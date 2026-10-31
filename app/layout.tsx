import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { SITE_URL, CONTACT_EMAIL, OG_IMAGE } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "安澜奇点 · AI安全开放社区 | Open Community for AI Safety China",
  description: "关注 AI 风险、AI 安全技术及 AI 安全治理等前沿话题，通过交流与合作促进 AI 的安全可持续发展。",
  keywords: ["AI安全", "AI对齐", "AI伦理", "AI治理", "机器学习安全", "人工智能安全", "人工智能伦理", "AI Safety", "AI Alignment", "AI安全学习小组", "AI Safety Study Group", "AI安全开放社区", "Open Community for AI Safety China", "AI安全社区", "AI Safety社区", "AI安全社群", "AI安全共创计划", "中国", "China"],
  authors: [
    { name: "AI安全开放社区" },
  ],
  creator: "AI安全开放社区",
  publisher: "AI安全开放社区",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
    languages: {
      'zh-CN': '/',
      'en': '/en',
    },
  },
  openGraph: {
    title: "安澜奇点 · AI安全开放社区 | Open Community for AI Safety China",
    description: "关注 AI 风险、AI 安全技术及 AI 安全治理等前沿话题，通过交流与合作促进 AI 的安全可持续发展。",
    url: SITE_URL,
    siteName: 'OCASC',
    locale: 'zh_CN',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: "安澜奇点 · AI安全开放社区 | Open Community for AI Safety China",
    description: "关注 AI 风险、AI 安全技术及 AI 安全治理等前沿话题，通过交流与合作促进 AI 的安全可持续发展。",
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI安全开放社区",
    "legalName": "北京安澜奇点科技有限公司",
    "alternateName": "Open Community for AI Safety China",
    "url": SITE_URL,
    "logo": `${SITE_URL}/logo.png`,
    "description": "关注 AI 风险、AI 安全技术及 AI 安全治理等前沿话题，通过交流与合作促进 AI 的安全可持续发展。",
    "sameAs": [
      // Add social media links here
      "https://github.com/ocasc/doc",
      "https://www.linkedin.com/company/open-community-for-ai-safety-china"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "General Inquiry",
      "email": CONTACT_EMAIL
    }
  };

  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="zh-CN">
      <body
        className={`${manrope.variable} ${inter.variable} antialiased font-body`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </html>
  );
}
