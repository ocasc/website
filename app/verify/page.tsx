import type { Metadata } from "next";
import styles from "../page.module.css";

export const metadata: Metadata = {
  title: "AI 安全核验 · 闭门讨论报名 | OCASC",
  description:
    "AI 安全核验的闭门讨论报名。先选你的身份，我们给出对应的那份短表。",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://aisafety-cn.com/verify" },
};

const OPTIONS = [
  {
    type: "vc",
    period: "投资人",
    title: "我在看 AI 相关项目",
    desc: "机构类型、出手阶段、在看的方向。I invest in AI companies.",
  },
  {
    type: "founder",
    period: "创始人",
    title: "我在做 AI 产品或公司",
    desc: "在做什么、到哪一步、做到哪一层。I am building an AI company.",
  },
  {
    type: "engineer",
    period: "工程师",
    title: "我在做工程或研究，想聊技术细节",
    desc: "技术方向、你亲手做过什么、是否愿意分享。I work on the technical side.",
  },
];

/**
 * 报名入口：一个链接，三种身份。
 *
 * 腾讯问卷免费版没有自定义逻辑（选身份隐藏其他分支是付费功能），所以分叉放在站上：
 * 这一步只做路由，三份短表各自只有 9–10 题。
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
                先选你在做什么，我们给对应的那份表，问题会短一些。
                <br />
                Dec 14, Shanghai. One closed-door session, seats confirmed by fit and order of sign-up.
                Pick who you are and you get the short version of the form.
              </p>
            </div>
          </section>

          <section className={styles.verifySection}>
            <div className={styles.msList}>
              {OPTIONS.map((o) => (
                <a
                  key={o.type}
                  className={styles.msRow}
                  href={`/v/${o.type}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className={styles.msPeriod}>{o.period}</span>
                  <div>
                    <div className={styles.evTitle}>{o.title}</div>
                    <div className={styles.msDesc}>{o.desc}</div>
                  </div>
                </a>
              ))}
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
