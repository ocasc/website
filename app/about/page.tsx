"use client";

import styles from "../page.module.css";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { BrandMark } from "@/components/brand-mark";
import { localePath } from "@/lib/locale";
import { JoinCta } from "@/components/join-cta";


export default function AboutPage() {
  const { t, language } = useLanguage();
  const ap = t.aboutPage;

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`${styles.wrap} ${styles.nav}`}>
          <a href={localePath(language, "/")} className={styles.brand}>
            <BrandMark className={styles.brandMark} />
            <span className={`${styles.brandText} ${language === "en" ? styles.brandTextEn : ""}`}>{t.nav.siteName}</span>
          </a>
          <nav className={styles.navLinks}>
            <a href={localePath(language, "/#events")}>{t.nav.events}</a>
            <a href={localePath(language, "/resources")}>{t.nav.resources}</a>
            <a href={localePath(language, "/about")}>{t.nav.about}</a>
          </nav>
          <div className={styles.langSlot}>
            <LanguageSwitcher />
          </div>
          <JoinCta src="nav" label={t.home.hero.joinCta} small />
        </div>
        <div className={`${styles.wrap} ${styles.mobileNav}`}>
          <a href={localePath(language, "/#events")}>{t.nav.events}</a>
          <a href={localePath(language, "/resources")}>{t.nav.resources}</a>
          <a href={localePath(language, "/about")}>{t.nav.about}</a>
        </div>
      </header>

      <main>
        <div className={styles.wrap}>
          <section className={`${styles.heroPage} ${styles.heroAbout}`}>
            <h1 className={styles.h1}>{ap.hero.title}</h1>
            <p className={styles.lede}>{ap.hero.description}</p>
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
