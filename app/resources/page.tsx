"use client";

import styles from "../page.module.css";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { BrandMark } from "@/components/brand-mark";
import { localePath } from "@/lib/locale";
import { JOIN_PATH } from "@/lib/site";


export default function ResourcesPage() {
  const { t, language } = useLanguage();
  const r = t.resourcesPage;

  const rowsOf = (rows: Array<{ name: string; kind: string; note: string; url: string }>) => (
    <>
      <div className={styles.listHead} aria-hidden="true">
        <span>{r.colName}</span>
        <span>{r.colKind}</span>
        <span>{r.colNote}</span>
      </div>
      {rows.map((row) => (
        <div key={row.url} className={styles.rRow}>
          <a
            className={styles.rName}
            href={row.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {row.name}
            <span aria-hidden="true"> ↗</span>
          </a>
          <span className={styles.rKind}>{row.kind}</span>
          <span className={styles.rNote}>{row.note}</span>
        </div>
      ))}
    </>
  );

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

          <a
            className={`${styles.btn} ${styles.btnSm} ${styles.btnSolid}`}
            href={`${JOIN_PATH}?src=nav`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.home.hero.joinCta}
          </a>
        </div>
        <div className={`${styles.wrap} ${styles.mobileNav}`}>
          <a href={localePath(language, "/#events")}>{t.nav.events}</a>
          <a href={localePath(language, "/resources")}>{t.nav.resources}</a>
          <a href={localePath(language, "/about")}>{t.nav.about}</a>
        </div>
      </header>

      <main>
        <div className={styles.wrap}>
          <section className={styles.heroPage}>
            <div>
              <h1 className={styles.h1}>{r.title}</h1>
              <p className={styles.lede}>{r.lede}</p>
            </div>
          </section>

          {r.stages.map((stage) => (
            <section key={stage.no} className={styles.section}>
              <div className={styles.secHead}>
                <div className={styles.stageTitle}>
                  <span className={styles.stageNo}>{stage.no}</span>
                  <h2 className={styles.hSec}>{stage.title}</h2>
                </div>
                <span className={styles.secAside}>{stage.note}</span>
              </div>
              {rowsOf(stage.rows)}
            </section>
          ))}

          <section className={styles.section}>
            <div className={styles.criteriaWrap}>
              <p className={styles.criteria}>{r.criteria}</p>
            </div>
          </section>

          {/* 读完三段路之后的第二个入口：以前这一页到底没有 CTA，读完即走 */}
          <section className={styles.section}>
            <div className={styles.endCta}>
              <p className={styles.endCtaText}>{r.endCta.text}</p>
              <a
                className={`${styles.btn} ${styles.btnSolid}`}
                href={`${JOIN_PATH}?src=resources-end`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {r.endCta.button}
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
