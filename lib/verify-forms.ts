/**
 * 12/14 上海闭门讨论的报名表（腾讯问卷）。
 *
 * 一份表服务三种人，不依赖腾讯问卷的分叉逻辑（自定义逻辑是付费功能，`update_logic`
 * 返回 paid_function_trial_no_permission；后台「基本逻辑」能不能配，实测点了不生效，未验证）。
 * 类型相关的信息用一道开放式题收，题面直接告诉投资人 / 创始人 / 工程师各自写什么。
 *
 * 保留 vc / founder / engineer 三个旧路径当别名，全部 302 到同一份表，
 * 这样之前发出去的 /v/vc 之类链接不会 404。
 */
const FORM = "https://wj.qq.com/s2/28332730/or1z/";

export const VERIFY_FORMS = {
  form: FORM,
  vc: FORM,
  founder: FORM,
  engineer: FORM,
} as const;

export type VerifyType = keyof typeof VERIFY_FORMS;

export const isVerifyType = (v: string): v is VerifyType =>
  Object.prototype.hasOwnProperty.call(VERIFY_FORMS, v);
