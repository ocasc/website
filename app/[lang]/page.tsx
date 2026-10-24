import { redirect, notFound } from "next/navigation";

/**
 * 兼容旧链接：/zh → 中文默认站（无前缀），/en → /en。
 *
 * 这里必须做白名单。以前是客户端 useEffect 无脑 router.replace("/")，
 * 结果 app/[lang] 把所有单段路径（/abc、/events、/apple-touch-icon.png）
 * 都吃成 200 + 首页 HTML：软 404 会被搜索引擎索引，缺资源也永远不报错。
 * 现在未知语言直接 404，并且由服务端决定状态码（客户端组件拿不到 404）。
 */
const ZH = new Set(["zh", "zh-cn", "zh_cn", "cn", "chs"]);
const EN = new Set(["en", "en-us", "en_us", "eng"]);

export default async function LangRedirect({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const key = String(lang ?? "").toLowerCase();

  if (ZH.has(key)) redirect("/");
  if (EN.has(key)) redirect("/en");

  notFound();
}
