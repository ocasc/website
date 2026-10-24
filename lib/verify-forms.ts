/**
 * 报名表的三种身份 → 各自的腾讯问卷。
 *
 * 腾讯问卷的自定义逻辑（选一个身份就隐藏其他分支）是付费功能，这个团队没有：`update_logic`
 * 返回 paid_function_trial_no_permission。所以分叉放在站上做：一个总链接 /verify，选完身份
 * 再进对应的短表。链接走 /v/<type> 是为了在 nginx 日志里能按身份计数。
 */
export const VERIFY_FORMS = {
  vc: "https://wj.qq.com/s2/28332223/vep7/",
  founder: "https://wj.qq.com/s2/28332226/mk0k/",
  engineer: "https://wj.qq.com/s2/28332227/95pi/",
} as const;

export type VerifyType = keyof typeof VERIFY_FORMS;

export const isVerifyType = (v: string): v is VerifyType =>
  Object.prototype.hasOwnProperty.call(VERIFY_FORMS, v);
