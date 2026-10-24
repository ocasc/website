import type { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "AI 安全核验 · 闭门讨论报名 | OCASC",
  description:
    "AI 安全核验的闭门讨论报名（12 月 14 日，上海）。一份表，投资人、创始人、工程师都能填。",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://aisafety-cn.com/verify" },
};

/**
 * 报名入口：一个链接，一份表。
 *
 * 腾讯问卷的分叉逻辑（选身份隐藏其他分支）是付费功能，后台「基本逻辑」实测点了不生效，
 * 所以不靠逻辑：一份 9 题的表，类型相关信息用一道开放式题收。这一页只负责解释和跳转。
 */
export default function VerifyPage() {
  return (
    <div className={styles.page}>
      <main>
        <div className={styles.wrap}>
          <section className={styles.heroPage}>
            <div>
              <p className={styles.eyebrow}>报名 · Sign-up</p>
              <h1 className={styles.h1}>
                AI 安全核验<em>闭门讨论</em>
              </h1>
              <p className={styles.lede}>
                12 月 14 日，上海，一场小型的闭门讨论，席位按方向和报名顺序确认。
                一份表，投资人和创始人、工程师都能填。两分钟。
                <br />
                Dec 14, Shanghai. One closed-door session, seats confirmed by fit and order of sign-up.
                One form for all three, whether you invest, build or engineer. Two minutes.
              </p>
            </div>
          </section>

          <section className={styles.verifySection}>
            <div className={styles.msList}>
              <a
                className={styles.msRow}
                href="/v/form"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.msPeriod}>报名</span>
                <div>
                  <div className={styles.evTitle}>填报名表</div>
                  <div className={styles.msDesc}>
                    名字、机构与职位、你在做的事、微信号。 Fill in the sign-up form.
                  </div>
                </div>
              </a>
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.lede}>
              「验证」在这里是指拿别人能复核的记录和证据，确认一个 AI 系统是不是像它说的那样：
              模型版本有没有被换过，评测结果别人能不能重跑一遍，用了多少算力能不能对得上。
              有的今天就能查，有的还查不了。不需要 AI 背景。
            </p>
            <p className={styles.lede}>
              Verification here means records and evidence someone else can re-check: whether the
              model version was swapped, whether an evaluation can be re-run independently,
              whether compute use adds up. Some of this is checkable today, some is not.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
