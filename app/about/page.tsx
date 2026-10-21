"use client";

import styles from "../page.module.css";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { BrandMark } from "@/components/brand-mark";

const JOIN_FORM_URL = "https://wj.qq.com/s2/28113604/kyqo/";

export default function AboutPage() {
  const { t } = useLanguage();
  const ap = t.aboutPage;
  const stats = t.stats;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`${styles.wrap} ${styles.nav}`}>
          <a href="/" className={styles.brand}>
            <BrandMark className={styles.brandMark} />
            <span className={styles.brandText}>{t.nav.siteName}</span>
          </a>
          <nav className={styles.navLinks}>
            <a href="/#events">{t.nav.events}</a>
            <a href="/resources">{t.nav.resources}</a>
            <a href="/about">{t.nav.about}</a>
          </nav>
          <div className={styles.langSlot}>
            <LanguageSwitcher />
          </div>
          <a
            className={`${styles.btn} ${styles.btnSm} ${styles.btnSolid}`}
            href={JOIN_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.home.hero.joinCta}
          </a>
        </div>
        <div className={`${styles.wrap} ${styles.mobileNav}`}>
          <a href="/#events">{t.nav.events}</a>
          <a href="/resources">{t.nav.resources}</a>
          <a href="/about">{t.nav.about}</a>
        </div>
      </header>

      <main>
        <div className={styles.wrap}>
          <section className={`${styles.heroPage} ${styles.heroAbout}`}>
            <div className={styles.heroAboutText}>
              <h1 className={styles.h1}>{ap.hero.title}</h1>
              <p className={styles.lede}>{ap.hero.description}</p>
            </div>
            <div className={styles.statRail}>
              {[stats.coreTeam, stats.community, stats.reach].map((s) => (
                <div key={s.label} className={styles.statRailRow}>
                  <b>{s.value}</b>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.secHead}>
              <div>
                <h2 className={styles.hSec}>{ap.story.title}</h2>
              </div>
            </div>
            <div className={styles.storyGrid}>
              <div className={styles.storyList}>
                {ap.story.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.secHead}>
              <div>
                <h2 className={styles.hSec}>{ap.milestones.title}</h2>
              </div>
            </div>
            <div className={styles.msList}>
              {ap.milestones.items.map((m) => (
                <div key={m.period + m.title} className={styles.msRow}>
                  <span className={styles.msPeriod}>{m.period}</span>
                  <span className={styles.msTitle}>{m.title}</span>
                  <span className={styles.msDesc}>{m.description}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <footer className={styles.footerSlim}>
          <div className={styles.footerSlimIn}>
            <div className={styles.fSite}>{t.home.footer.site}</div>
            <div className={styles.fLinks}>
              <a href="https://space.bilibili.com/1770030225" target="_blank" rel="noopener noreferrer">
                {t.about.contact.bilibili}
              </a>
              <a href="https://www.zhihu.com/ring/host/1911472389268676936" target="_blank" rel="noopener noreferrer">
                {t.about.contact.circle}
              </a>
              <a href="https://www.linkedin.com/company/open-community-for-ai-safety-china" target="_blank" rel="noopener noreferrer">
                {t.about.contact.linkedin}
              </a>
              <a href="https://github.com/ocasc/doc" target="_blank" rel="noopener noreferrer">
                {t.about.contact.github}
              </a>
              <a href="mailto:sarah.sun@aisafety-cn.com">{t.home.footer.email}</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
