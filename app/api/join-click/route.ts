import { NextResponse } from "next/server";

/**
 * 「加入社群」点击计数。
 *
 * 按钮改成弹窗之后，点击不再经过 /join 的 302，所以用一个 beacon 打这里：
 * 请求会落在 nginx access.log 的 /api/join-click?src=… 上，零第三方脚本、
 * 零 cookie。响应只回 204，不写库也不落盘。
 */
export const dynamic = "force-dynamic";

export async function POST() {
  return new NextResponse(null, { status: 204 });
}

export async function GET() {
  return new NextResponse(null, { status: 204 });
}
