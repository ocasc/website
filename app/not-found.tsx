import styles from "./page.module.css";

/**
 * 全站 404。以前没有这个文件，未知路径被 app/[lang] 吃成 200 + 首页，
 * 访客打错地址会被静默弹回首页、搜索引擎会把垃圾 URL 当软 404 收录。
 */
export default function NotFound() {
  return (
    <div className={styles.page}>
      <main>
        <div className={styles.wrap}>
          <section className={styles.heroPage}>
            <div>
              <p className={styles.eyebrow}>404</p>
              <h1 className={styles.h1}>这个页面不在了。</h1>
              <p className={styles.lede}>
                地址可能打错了，或者这一页已经并到了别处。
                <br />
                This page does not exist.
              </p>
              <div className={styles.heroCta}>
                <a className={`${styles.btn} ${styles.btnSolid}`} href="/">
                  回到首页
                </a>
                <a className={styles.btn} href="/resources">
                  如何进入 AI 安全
                </a>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.secHead}>
              <div>
                <h2 className={styles.hSec}>也可能是这几个地方</h2>
              </div>
            </div>
            <div className={styles.msList}>
              <a className={styles.msRow} href="/#events">
                <span className={styles.msPeriod}>活动</span>
                <span className={styles.msTitle}>讲座、研讨会、课程与线下聚会</span>
                <span className={styles.msDesc}>→</span>
              </a>
              <a className={styles.msRow} href="/about">
                <span className={styles.msPeriod}>关于</span>
                <span className={styles.msTitle}>我们是谁，做过什么</span>
                <span className={styles.msDesc}>→</span>
              </a>
              <a className={styles.msRow} href="https://github.com/ocasc/doc" rel="noopener noreferrer">
                <span className={styles.msPeriod}>活动记录</span>
                <span className={styles.msTitle}>全部活动的原始文档</span>
                <span className={styles.msDesc}>↗</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
