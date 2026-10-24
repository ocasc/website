import type { Metadata } from "next";
import { SITE_URL, OG_IMAGE_EN } from "@/lib/site";

export const metadata: Metadata = {
  title: "Open Community for AI Safety China",
  description:
    "A professional network for Chinese-language readers working on AI safety: talks, paper reading, courses and in-person meetups.",
  alternates: {
    canonical: "/en",
    languages: {
      "zh-CN": "/",
      en: "/en",
    },
  },
  openGraph: {
    title: "Open Community for AI Safety China",
    description:
      "A professional network for Chinese-language readers working on AI safety: talks, paper reading, courses and in-person meetups.",
    url: `${SITE_URL}/en`,
    locale: "en_US",
    images: [OG_IMAGE_EN],
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return children;
}
