/**
 * 活动的公众号文章（中文原文）。
 *
 * 活动行优先链到公众号文章，而不是 GitHub 上的 markdown —— 读者点「活动」是想
 * 看这场活动是什么，不该被送进一个代码仓库（2026-10-24 Sarah 指出）。
 *
 * 优先顺序：markdown 里写的 `+ **公众号**：<url>` > 这张表 > documentLink。
 * 新活动在 ocasc/doc 里加一行 `+ **公众号**：https://mp.weixin.qq.com/s/…`
 * 就自动生效，这张表只用于补历史活动。
 */
export const EVENT_ARTICLES: Record<string, string> = {
  // OpenDev × OCASC AI 安全黑客松（2026/9/12–9/14）
  // 《参与即得100美元算力，9.12 开赛：一起复盘 OpenAI 被入侵事件！》
  "hackathon-01-ai-incident-response-md":
    "https://mp.weixin.qq.com/s/we5qubF2n6draYEVn1vMdg",
};
