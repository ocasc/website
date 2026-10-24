/**
 * 站点对外身份的唯一来源。
 *
 * canonical / og:url / sitemap / JSON-LD 以前各自写死了一份旧域名
 * (aisafetystudy.gixia.org)，那个域名现在只做 301，于是所有机器可读的
 * 身份都指向了错的主机。要改域名只改这里。
 */
export const SITE_URL = "https://aisafety-cn.com";

/** 页脚与结构化数据共用的联系邮箱（Zoho 托管，sarah.sun@ 是当前唯一真实邮箱）。 */
export const CONTACT_EMAIL = "sarah.sun@aisafety-cn.com";

/** 分享卡：1200×630，微信 / Twitter / OG 通用尺寸。 */
export const OG_IMAGE = {
  url: "/og-cover.png",
  width: 1200,
  height: 630,
  alt: "AI安全开放社区",
};

export const OG_IMAGE_EN = {
  url: "/og-cover-en.png",
  width: 1200,
  height: 630,
  alt: "Open Community for AI Safety China",
};
