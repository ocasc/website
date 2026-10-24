import { NextResponse } from "next/server";
import { JOIN_FORM_URL } from "@/lib/site";

/**
 * 「加入社群」的计数跳板：302 到腾讯问卷。
 * 走站内一跳的目的不是重写 URL，而是让点击落在 nginx access.log 的 /join 上，
 * 这样转化数据不需要第三方脚本（大陆访客的广告拦截、微信内置浏览器都拦不到日志）。
 */
export function GET() {
  return NextResponse.redirect(JOIN_FORM_URL, 302);
}
