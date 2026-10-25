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

/**
 * 站点运营方（营业执照全称）。ICP 备案主体就是这个公司，关于页与页脚版权行
 * 都要能读出主体关联性，审核员点开站点时才有据可查。
 */
export const OPERATOR_NAME = {
  zh: "北京安澜奇点科技有限公司",
  en: "Beijing Anlan Singularity Technology Co., Ltd.",
} as const;

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

/** 加入社群的问卷（腾讯问卷）。唯一入口。 */
export const JOIN_FORM_URL = "https://wj.qq.com/s2/28113604/kyqo/";

/**
 * 站内跳板：所有「加入社群」按钮指向 /join，由 app/join/route.ts 302 到问卷。
 * 这样 nginx access.log 里就有 /join 这一条，能不装任何前端脚本数出点击转化。
 */
export const JOIN_PATH = "/join";
