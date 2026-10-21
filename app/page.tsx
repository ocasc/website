"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "./page.module.css";
import { useLanguage } from "@/lib/language-context";
import { LanguageSwitcher } from "@/components/language-switcher";
import { BrandMark } from "@/components/brand-mark";
import { useEvents } from "@/lib/use-events";

const JOIN_FORM_URL = "https://wj.qq.com/s2/28113604/kyqo/";
const PROPOSE_TALK_URL =
  "https://docs.google.com/forms/d/1-LlnyTAXhM8c8YvQZDddWkfrE-Qp0SwxwYJZbPB-yXo/viewform";

const PARTNERS = [
  { name: "According.Work", logo: "/accordingwork-logo.png", url: "https://according.work/", tall: false },
  { name: "清华大学出版社", logo: "/tup-logo.png", url: "https://www.tup.tsinghua.edu.cn/", tall: false },
  { name: "Fungimind", logo: "/fungimind-logo.jpg", url: "https://www.thefungimind.com/", tall: true },
];


export default function HomePage() {
  const { t, language } = useLanguage();
  const { events, loading, error } = useEvents();
  // 判定「未来/过去」只在客户端算，避免服务端 UTC 与本地时区不一致导致 hydration 不匹配
  const [todayKey, setTodayKey] = useState<string | null>(null);
  useEffect(() => {
    const n = new Date();
    setTodayKey(
      `${n.getFullYear()}/${String(n.getMonth() + 1).padStart(2, "0")}/${String(
        n.getDate(),
      ).padStart(2, "0")}`,
    );
  }, []);
  const [expanded, setExpanded] = useState(false);
  const [showWechatQR, setShowWechatQR] = useState(false);
  const home = t.home;

  const sorted = useMemo(() => {
    const list = [...(events ?? [])];
    list.sort((a, b) => {
      if (a.isUpcoming !== b.isUpcoming) return a.isUpcoming ? -1 : 1;
      return b.date.localeCompare(a.date);
    });
    return list;
  }, [events]);

  const visible = expanded ? sorted : sorted.slice(0, 4);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={`${styles.wrap} ${styles.nav}`}>
          <a href="/" className={styles.brand}>
            <BrandMark className={styles.brandMark} />
            <span className={styles.brandText}>
              {t.nav.siteName}
              {home.brandSub && home.brandSub !== t.nav.siteName ? <span>{home.brandSub}</span> : null}
            </span>
          </a>

          <nav className={styles.navLinks}>
            <a href="#events">{t.nav.events}</a>
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
            {home.hero.joinCta}
          </a>
        </div>
        <div className={`${styles.wrap} ${styles.mobileNav}`}>
          <a href="#events">{t.nav.events}</a>
          <a href="/resources">{t.nav.resources}</a>
          <a href="/about">{t.nav.about}</a>
        </div>
      </header>

      <main>
        <div className={styles.wrap}>
          <section className={styles.hero}>
            <div>
              {home.hero.eyebrow ? (
                <p className={styles.eyebrow}>{home.hero.eyebrow}</p>
              ) : null}
              <h1 className={`${styles.h1} ${language === "en" ? styles.h1En : ""}`}>
                {home.hero.titleLine1}
                {home.hero.titleLine2 ? (
                  <>
                    <br />
                    {home.hero.titleLine2}
                  </>
                ) : null}
                {language === "en" ? " " : ""}
                {home.hero.titleAccent ? <em>{home.hero.titleAccent}</em> : null}
                {home.hero.titleTail}
              </h1>
              <p className={styles.lede}>{home.hero.lede}</p>
              <p className={styles.meta}>
                <b className={styles.metaItem}>{home.hero.metaAffiliate}</b>
              </p>
              <div className={styles.heroCta}>
                <a
                  className={`${styles.btn} ${styles.btnSolid}`}
                  href={JOIN_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {home.hero.joinCta}
                </a>
              </div>
            </div>

            <aside className={styles.pyramid} aria-label={home.statsLabel}>
              <div className={`${styles.tier} ${styles.tierCore}`}>
                <b>{t.stats.coreTeam.value}</b>
                <span>{t.stats.coreTeam.label}</span>
              </div>
              <div className={`${styles.tier} ${styles.tierMembers}`}>
                <b>{t.stats.community.value}</b>
                <span>{t.stats.community.label}</span>
              </div>
              <div className={`${styles.tier} ${styles.tierReach}`}>
                <b>{t.stats.reach.value}</b>
                <span>{t.stats.reach.label}</span>
              </div>
              {home.statsNote ? (
                <p className={styles.pyramidNote}>{home.statsNote}</p>
              ) : null}
            </aside>
          </section>

          <figure className={styles.mission}>
            <figcaption className={styles.missionLabel}>{home.mission.label}</figcaption>
            <p className={styles.missionText}>
              {language === "zh" ? (
                <>
                  {home.mission.text.split("始终")[0]}
                  <span className={styles.missionTail}>
                    始终{home.mission.text.split("始终")[1]}
                  </span>
                </>
              ) : (
                home.mission.text
              )}
            </p>
          </figure>

          <section id="offer" className={styles.section}>
            <div className={styles.secHead}>
              <div>
                {home.tracks.eyebrow ? (
                  <p className={styles.eyebrow}>{home.tracks.eyebrow}</p>
                ) : null}
                <h2 className={styles.hSec}>{home.tracks.title}</h2>
              </div>
            </div>
            <div className={styles.tracks}>
              {home.tracks.items.map((item) => (
                <article key={item.no} className={styles.track}>
                  <p className={styles.trackNo}>{item.no}</p>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <a
                    className={styles.trackLink}
                    href={item.url}
                    {...(item.url.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {item.link}
                  </a>
                </article>
              ))}
            </div>

          </section>

          <section id="events" className={styles.section}>
            <div className={styles.secHead}>
              <div>
                {home.events.eyebrow ? (
                  <p className={styles.eyebrow}>{home.events.eyebrow}</p>
                ) : null}
                <h2 className={styles.hSec}>{home.events.title}</h2>
              </div>
            </div>

            <div className={styles.tHead} aria-hidden="true">
              <span>{home.events.headDate}</span>
              <span>{home.events.headType}</span>
              <span>{home.events.headTitle}</span>
              <span>{home.events.headForm}</span>
            </div>

            {loading ? (
              <p className={styles.state}>{home.events.loading}</p>
            ) : error ? (
              <p className={styles.state}>{home.events.error}</p>
            ) : visible.length === 0 ? (
              <p className={styles.state}>{home.events.empty}</p>
            ) : (
              visible.map((ev) => {
                const href = ev.documentLink || ev.videoLink;
                const dayKey = ev.date.replace(/-/g, "/").replace(
                  /^(\d{4})\/(\d)\//,
                  "$1/0$2/",
                );
                const isFuture = todayKey !== null && dayKey > todayKey;
                const evTitle =
                  language === "en" && ev.titleEn ? ev.titleEn : ev.title;
                const evPlace =
                  language === "en" && ev.locationEn ? ev.locationEn : ev.location;
                return (
                  <a
                    key={ev.id}
                    className={`${styles.ev} ${isFuture ? styles.evFuture : ""}`}
                    href={href || "#events"}
                    {...(href ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    <span className={styles.evDate}>{ev.date}</span>
                    <span className={styles.evType}>{t.events.eventTypes[ev.type].title}</span>
                    <span className={styles.evTitle}>{evTitle}</span>
                    <span className={styles.evForm}>{evPlace}</span>
                    <span className={styles.evMetaMobile}>
                      {t.events.eventTypes[ev.type].title} · {evPlace}
                    </span>
                  </a>
                );
              })
            )}

            {!loading && !error && sorted.length > 4 && (
              <div className={styles.evFoot}>
                <button type="button" onClick={() => setExpanded((v) => !v)}>
                  {expanded ? home.events.collapse : home.events.showAll}
                </button>
              </div>
            )}
          </section>

          <section className={styles.propose}>
            <div className={styles.proposeGrid}>
              <div>
                <div className={styles.secTitleRow}>
                  <h2>
                    {home.propose.titleLine1}
                    <br />
                    {home.propose.titleLine2}
                  </h2>
                </div>
                <p>{home.propose.body}</p>
                <div className={styles.heroCta}>
                  <a
                    className={`${styles.btn} ${styles.btnSolid}`}
                    href={PROPOSE_TALK_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {home.propose.cta}
                  </a>
                </div>
              </div>
              <div className={styles.spec}>
                {home.propose.specs.map((s) => (
                  <div key={s.k} className={styles.specRow}>
                    <span className={styles.specK}>{s.k}</span>
                    <span className={styles.specV}>{s.v}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className={styles.footer}>
        <div className={styles.wrap}>
          <div className={styles.partners}>
            <span className={styles.partnersLabel}>{home.footer.partners}</span>
            {PARTNERS.map((p) => (
              <a
                key={p.name}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.partner}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.logo} alt={p.name} className={p.tall ? styles.partnerTall : undefined} />
              </a>
            ))}
          </div>

          <div className={styles.fIn}>
            <div className={styles.fSite}>{home.footer.site}</div>
            <div className={styles.fLinks}>
              <a href="https://space.bilibili.com/1770030225" target="_blank" rel="noopener noreferrer">
                {t.about.contact.bilibili}
              </a>
              <a
                href="https://www.zhihu.com/ring/host/1911472389268676936"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.about.contact.circle}
              </a>
              <a
                href="https://www.linkedin.com/company/open-community-for-ai-safety-china"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.about.contact.linkedin}
              </a>
              <a href="https://github.com/ocasc/doc" target="_blank" rel="noopener noreferrer">
                {t.about.contact.github}
              </a>
              <button
                type="button"
                className={styles.fLinkButton}
                onClick={() => setShowWechatQR(true)}
              >
                {home.footer.wechat}
              </button>
              <a href="mailto:sarah.sun@aisafety-cn.com">{home.footer.email}</a>
            </div>
            <div className={styles.fCopy}>{home.footer.copyright}</div>
          </div>
        </div>
      </footer>

      {showWechatQR && (
        <div
          className={styles.modalBackdrop}
          onClick={() => setShowWechatQR(false)}
          role="presentation"
        >
          <div className={styles.modal} onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <h3>OCASC 微信公众号</h3>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/ocasc-qrcode.png" alt="OCASC 微信公众号二维码" />
            <p>扫描二维码关注我们</p>
            <button type="button" onClick={() => setShowWechatQR(false)}>
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
