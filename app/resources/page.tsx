"use client";

import styles from "../page.module.css";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { BrandMark } from "@/components/brand-mark";

const JOIN_FORM_URL = "https://wj.qq.com/s2/28113604/kyqo/";

export default function ResourcesPage() {
  const { t } = useLanguage();
  const r = t.resourcesPage;

  const renderList = (
    head: string,
    note: string,
    rows: Array<{ name: string; kind: string; note: string; url: string }>,
  ) => (
    <section className={styles.section}>
      <div className={styles.secHead}>
        <div>
          <h2 className={styles.hSec}>{head}</h2>
        </div>
        <span className={styles.secAside}>{note}</span>
      </div>

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
    </section>
  );

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
          <section className={styles.heroPage}>
            <div>
              <h1 className={styles.h1}>{r.title}</h1>
              <p className={styles.lede}>{r.lede}</p>
            </div>
          </section>

          {renderList(r.programHead, r.programNote, r.programs)}
          {renderList(r.courseHead, r.courseNote, r.courses)}

          <section className={styles.section}>
            <div className={styles.criteriaWrap}>
              <p className={styles.criteria}>{r.criteria}</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
