import type { Language } from "./i18n";

/**
 * 站点路由约定：中文是默认站点（无前缀），英文统一挂在 /en 下。
 * 只处理站内路径；外链、页内锚点（#events）原样返回。
 */
export function localePath(language: Language, path: string): string {
  if (language !== "en") return path;
  if (path === "/") return "/en";
  if (path.startsWith("#")) return path;
  if (path.startsWith("/#")) return `/en${path.slice(1)}`;
  return `/en${path}`;
}
