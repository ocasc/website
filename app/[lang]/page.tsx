"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

/**
 * 兼容旧链接：/zh → 中文默认站（无前缀），/en → /en。
 * 语言现在由路径决定，不再写 localStorage。
 */
export default function LangRedirect() {
  const router = useRouter();
  const params = useParams();

  useEffect(() => {
    const lang = String(params.lang || "").toLowerCase();
    router.replace(lang === "en" ? "/en" : "/");
  }, [params.lang, router]);

  return null;
}
