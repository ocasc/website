"use client";

import { useEffect } from "react";
import styles from "@/app/page.module.css";
import { useLanguage } from "@/lib/language-context";
import { JOIN_PATH } from "@/lib/site";

/**
 * 扫码关注公众号的弹窗。原来这个弹窗里的图是一张「文章码」
 * (mp.weixin.qq.com/s?...__biz=3700152896)，扫出来是一篇文章而不是账号页；
 * 2026-10-24 换成官方账号二维码 wechat-oa-qr.png（weixin.qq.com/r/…，永久有效）。
 *
 * 微信内置浏览器里没法扫自己屏幕上的码，所以那档文案改成「长按识别」——
 * 这一条是转化里最容易漏掉的细节。
 */
export function WeChatQrDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, language } = useLanguage();
  const q = t.home.qr;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const inWeChat = typeof navigator !== "undefined" && /MicroMessenger/i.test(navigator.userAgent);

  return (
    <div className={styles.modalBackdrop} onClick={onClose} role="presentation">
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={q.title}
      >
        <h3>{q.title}</h3>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/wechat-oa-qr.png" alt={q.title} width={220} height={220} />
        <p className={styles.qrHint}>{inWeChat ? q.hintLongPress : q.hintScan}</p>
        <p className={styles.qrNote}>
          {q.afterFollow}
        </p>
        <p className={styles.qrAlt}>
          <a href={`${JOIN_PATH}?src=modal-form`}>
            {q.formFallback}
          </a>
        </p>
        <button type="button" onClick={onClose}>
          {language === "en" ? "Close" : "关闭"}
        </button>
      </div>
    </div>
  );
}
