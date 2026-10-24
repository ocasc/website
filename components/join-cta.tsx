"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";
import { WeChatQrDialog } from "./wechat-qr-dialog";

/**
 * 「加入社群」按钮。
 *
 * 行为变了（2026-10-24）：以前是 <a href="/join?src=…"> 直接 302 到腾讯问卷；
 * 现在改成按钮 —— 先发一个 beacon 到 /api/join-click?src=… 记数（nginx 日志里
 * 能看到，零第三方脚本），再打开公众号二维码弹窗，弹窗里保留「直接填问卷」
 * 作为第二选项（走 /join?src=modal-form）。
 */
export function JoinCta({
  src,
  label,
  small = false,
  className = "",
}: {
  src: string;
  label: string;
  small?: boolean;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    const url = `/api/join-click?src=${encodeURIComponent(src)}`;
    try {
      if (navigator.sendBeacon) navigator.sendBeacon(url);
      else void fetch(url, { method: "POST", keepalive: true });
    } catch {
      /* 计数失败不影响打开弹窗 */
    }
    setOpen(true);
  };

  const cls = [
    styles.btn,
    small ? styles.btnSm : "",
    styles.btnSolid,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <button type="button" className={cls} onClick={handleClick}>
        {label}
      </button>
      <WeChatQrDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
