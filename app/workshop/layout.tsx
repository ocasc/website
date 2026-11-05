import type { Metadata } from "next";
import "./workshop.css";

export const metadata: Metadata = {
  title: "AI 安全承诺核验 · 12 月 3 日 深圳",
  description:
    "12 月 3 日晚上，深圳，一次二十人左右的小范围技术讨论：机房验收合格、钱付完之后，还有没有办法核对机器是不是当初那批。",
  // 备案审核期（2026-11-01 起）先不进索引，下号后再放开
  robots: { index: false, follow: true },
  openGraph: {
    title: "AI 安全承诺核验 · 12 月 3 日 深圳",
    description:
      "一次小范围技术讨论：机房验收之后，怎么核对机器还是当初那批。",
    images: ["/workshop/poster.jpg"],
  },
};

export default function WorkshopLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="workshop-shell">{children}</div>;
}
