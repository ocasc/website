import { NextResponse } from "next/server";
import { VERIFY_FORMS, isVerifyType } from "@/lib/verify-forms";

/**
 * /v/<type> → 对应身份的报名表（302）。
 * 走这一跳是为了让 nginx 日志能按身份计数（和 /join 同一个思路，零前端脚本）。
 */
export const dynamic = "force-dynamic";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ type: string }> },
) {
  const { type } = await params;
  if (!isVerifyType(type)) {
    return new NextResponse("Not found", { status: 404 });
  }
  return NextResponse.redirect(VERIFY_FORMS[type], 302);
}
