"use client";

import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Mail, Tv, Linkedin, Github, ExternalLink, ArrowRight, Target } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { LanguageSwitcher } from '@/components/language-switcher';
import { EventCard } from '@/components/event-card';
import { HeroStats } from '@/components/hero-stats';
import { useEvents } from '@/lib/use-events';
import { NotificationBanner } from '@/components/notification-banner';

const JOIN_FORM_URL = 'https://docs.qq.com/form/page/DTXNGUmNiTmNnV016';

const WechatIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c-.276-.94-.418-1.92-.418-2.91C8.276 9.47 13.137 6 19.14 6c.275 0 .548.012.82.036C18.573 3.666 13.932 2.188 8.691 2.188zm-1.47 3.11a1.123 1.123 0 1 1 0 2.246 1.123 1.123 0 0 1 0-2.246zm5.576 0a1.123 1.123 0 1 1 0 2.246 1.123 1.123 0 0 1 0-2.246zM19.14 7.2c-5.28 0-9.498 3.516-9.498 7.83 0 4.312 4.217 7.83 9.498 7.83.958 0 1.882-.126 2.74-.354a.73.73 0 0 1 .602.082l1.498.878a.27.27 0 0 0 .14.046.247.247 0 0 0 .247-.247c0-.06-.024-.118-.04-.177l-.327-1.238a.495.495 0 0 1 .18-.558C25.696 20.104 27 18.236 27 16.03c0-4.314-4.217-7.83-9.498-7.83h1.638zm-3.107 5.027a.94.94 0 1 1 0 1.88.94.94 0 0 1 0-1.88zm5.107 0a.94.94 0 1 1 0 1.88.94.94 0 0 1 0-1.88z"/>
  </svg>
);

export default function HomePage() {
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState<'all' | 'seminar' | 'lecture' | 'course'>('all');
  const [showComingSoon, setShowComingSoon] = useState(false);
  const [showWechatQR, setShowWechatQR] = useState(false);
  const { t, language } = useLanguage();
  const { events, loading, error, refresh } = useEvents();

  useEffect(() => {
    if (showComingSoon) {
      const timer = setTimeout(() => setShowComingSoon(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showComingSoon]);

  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navHeight = 80;
      window.scrollTo({
        top: section.offsetTop - navHeight,
        behavior: 'smooth',
      });
    }
  };

  // Filter and paginate events
  const filteredEvents = (events || []).filter(
    (event) => selectedEventType === 'all' || event.type === selectedEventType
  );
  const displayEvents = showAllEvents ? filteredEvents : filteredEvents.slice(0, 3);

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface overflow-x-hidden">
      {/* ===== Top Navigation ===== */}
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
        <NotificationBanner />
        <div className="flex justify-between items-center px-6 md:px-12 lg:px-16 py-4 max-w-6xl mx-auto">
          {/* Logo / Site Name */}
          <div className="flex items-center gap-1.5 text-lg md:text-xl font-bold tracking-tighter text-on-surface font-headline">
            <img src="/logo.png" alt={t.nav.siteName} className="h-6 w-6 object-contain" />
            {t.nav.siteName}
          </div>

          {/* Nav Links (desktop) */}
          <div className="hidden md:flex gap-8 items-center font-headline tracking-tight font-semibold">
            <a
              href="#events"
              onClick={(e) => { e.preventDefault(); handleNavClick('events'); }}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {t.nav.events}
            </a>
            <a
              href="#resources"
              onClick={(e) => { e.preventDefault(); handleNavClick('resources'); }}
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {t.nav.resources}
            </a>
            <a
              href="/about"
              className="text-on-surface-variant hover:text-primary transition-colors"
            >
              {t.nav.about}
            </a>
          </div>

          {/* Right side: Language switcher + Join button */}
          <div className="flex items-center gap-3 md:gap-6">
            <LanguageSwitcher />
            <a
              href={JOIN_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-gradient text-on-primary px-4 md:px-6 py-2.5 rounded-xl font-semibold shadow-sm hover:opacity-90 transition-all text-sm md:text-base cursor-pointer inline-block"
            >
              {t.nav.joinAction}
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-24">
        {/* ===== Hero Section ===== */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24 grid lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-sm font-semibold mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" /></svg>
              {t.hero.badge}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-[3.5rem] font-headline font-extrabold text-on-surface leading-[1.15] tracking-tight mb-8">
              {t.hero.titlePrefix}
              <span className="text-on-surface-variant/40 line-through decoration-2">{t.hero.titleStrikethrough}</span>
              <span className="text-primary">{t.hero.titleHighlight}</span>
              {t.hero.titleSuffix}
            </h1>
            <p className="text-base lg:text-lg text-on-surface-variant leading-relaxed max-w-xl mb-8">
              {t.hero.description}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer">
                <button className="hero-gradient text-on-primary px-6 py-3 rounded-xl font-bold text-base shadow-lg hover:scale-105 transition-transform cursor-pointer">
                  {t.hero.primaryButton}
                </button>
              </a>
              <a href="/about">
                <button className="bg-surface-container-high text-primary px-6 py-3 rounded-xl font-bold text-base hover:bg-surface-container-highest transition-colors cursor-pointer">
                  {t.hero.secondaryButton}
                </button>
              </a>
            </div>
          </div>

          {/* Right: Community Stats */}
          <div className="lg:col-span-5 relative">
            <HeroStats stats={t.stats} />
          </div>
        </section>

        {/* ===== Events Section ===== */}
        <section id="events" className="bg-surface-container-low py-24">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            {/* Header + Filters */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div className="max-w-xl">
                <h2 className="text-3xl font-headline font-bold text-on-surface mb-4">
                  {t.events.title}
                </h2>
                <p className="text-on-surface-variant">{t.events.description}</p>
              </div>
              <div className="flex gap-2 p-1.5 bg-surface-container-highest rounded-xl">
                {(
                  [
                    { key: 'all', label: t.events.allTypes },
                    { key: 'lecture', label: t.events.eventTypes.lecture.title },
                    { key: 'seminar', label: t.events.eventTypes.seminar.title },
                    { key: 'course', label: t.events.eventTypes.course.title },
                  ] as const
                ).map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedEventType(key);
                      setShowAllEvents(false);
                    }}
                    className={`px-4 md:px-5 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${selectedEventType === key
                      ? 'bg-surface-container-lowest text-primary shadow-sm font-bold'
                      : 'text-on-surface-variant hover:text-on-surface'
                      }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Event Cards */}
            {loading ? (
              <div className="text-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4" />
                <p className="text-on-surface-variant">Loading events...</p>
              </div>
            ) : error ? (
              <div className="text-center py-16">
                <p className="text-destructive mb-4">{error}</p>
                <button
                  onClick={refresh}
                  className="px-6 py-2 rounded-xl bg-surface-container-highest text-on-surface font-semibold hover:bg-surface-variant transition-colors cursor-pointer"
                >
                  Retry
                </button>
              </div>
            ) : displayEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {displayEvents.map((event) => (
                  <EventCard
                    key={event.id}
                    event={event}
                    translations={{
                      watchVideo: t.events.watchVideo,
                      viewDocument: t.events.viewDocument,
                      registerNow: t.events.registerNow,
                      comingSoon: t.events.comingSoon,
                      typeLabels: {
                        lecture: t.events.eventTypes.lecture.title,
                        seminar: t.events.eventTypes.seminar.title,
                        course: t.events.eventTypes.course.title,
                      },
                    }}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-on-surface-variant text-lg">
                  {selectedEventType === 'all'
                    ? t.events.noEvents
                    : t.events.noEventsOfType.replace(
                      '{type}',
                      t.events.eventTypes[selectedEventType].title
                    )}
                </p>
              </div>
            )}

            {/* Show More / Collapse */}
            {filteredEvents.length > 3 && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAllEvents(!showAllEvents)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-container-lowest text-primary font-bold shadow-sm hover:bg-surface-bright transition-colors cursor-pointer"
                >
                  {showAllEvents ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      {t.events.collapse}
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      {t.events.viewMore}
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ===== Resources Section (Bento Grid) ===== */}
        <section id="resources" className="py-24 max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl font-headline font-bold text-on-surface mb-4 text-center">
            {t.resources.title}
          </h2>
          <p className="text-on-surface-variant text-center mb-12 max-w-2xl mx-auto">
            {t.resources.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:auto-rows-[280px]">
            {/* Courses — Large Left Block */}
            <div className="md:col-span-8 md:row-span-2 hero-gradient rounded-3xl p-8 md:p-10 text-on-primary flex flex-col relative overflow-hidden">
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-headline font-bold leading-tight">
                      {t.resources.categories.courses.title}
                    </h3>
                    <p className="text-sm opacity-70 mt-0.5">
                      {t.resources.categories.courses.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 flex-1 min-h-0">
                  {/* New course — left, full height */}
                  {(() => {
                    const item = t.resources.categories.courses.items[0];
                    return (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col justify-between bg-white/10 hover:bg-white/20 rounded-2xl p-5 transition-colors group sm:w-1/2 shrink-0"
                      >
                        <div>
                          <div className="font-bold text-xl mb-2 flex items-center gap-2">
                            {item.name}
                            {item.badge && (
                              <span className="text-xs font-bold bg-white/30 text-white px-2 py-0.5 rounded-full shrink-0">
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="opacity-70 leading-relaxed text-sm">{item.description}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm font-semibold mt-4 opacity-70 group-hover:opacity-100 transition-opacity">
                          <span>Visit</span>
                          <ExternalLink className="h-3.5 w-3.5" />
                        </div>
                      </a>
                    );
                  })()}
                  {/* Old courses — right column, stacked vertically */}
                  <div className="flex flex-col gap-3 sm:w-1/2 min-h-0">
                    {t.resources.categories.courses.items.slice(1).map((item, i) => (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col justify-between bg-white/10 hover:bg-white/20 rounded-2xl p-4 transition-colors group flex-1 min-h-0"
                      >
                        <div>
                          <div className="font-bold text-base mb-1 leading-tight">{item.name}</div>
                          <p className="opacity-70 text-xs leading-relaxed line-clamp-2">{item.description}</p>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-semibold mt-2 opacity-70 group-hover:opacity-100 transition-opacity">
                          <span>Visit</span>
                          <ExternalLink className="h-3 w-3" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary-container rounded-full opacity-30 blur-3xl" />
            </div>

            {/* Research Projects — Top Right */}
            <div className="md:col-span-4 bg-surface-container-highest rounded-3xl p-6 flex flex-col group">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                <h4 className="text-xl font-headline font-bold text-on-surface">
                  {t.resources.categories.projects.title}
                </h4>
              </div>
              <p className="text-sm text-on-surface-variant mb-3">
                {t.resources.categories.projects.description}
              </p>
              <div className="space-y-2 flex-1">
                {t.resources.categories.projects.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-high transition-colors"
                  >
                    <div className="min-w-0">
                      <div className="font-semibold text-on-surface text-sm">{item.name}</div>
                      <div className="text-xs text-on-surface-variant line-clamp-2">{item.description}</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-on-surface-variant flex-shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>

            {/* Seminars — Bottom Right */}
            <div className="md:col-span-4 bg-tertiary-container rounded-3xl p-6 text-on-tertiary-container flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <h4 className="text-xl font-headline font-bold">
                  {t.resources.categories.seminars.title}
                </h4>
              </div>
              <p className="text-sm opacity-70 mb-3">
                {t.resources.categories.seminars.description}
              </p>
              <div className="space-y-2 flex-1">
                {t.resources.categories.seminars.items.map((item, i) => (
                  <a
                    key={i}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-colors"
                  >
                    <div className="min-w-0">
                      <div className="font-semibold text-sm">{item.name}</div>
                      <div className="text-xs opacity-70 line-clamp-2">{item.description}</div>
                    </div>
                    <ExternalLink className="h-4 w-4 opacity-50 flex-shrink-0 ml-2" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Join CTA Section ===== */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 pb-24">
          <div className="bg-surface-container rounded-[2rem] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-8 md:gap-12 text-center lg:text-left">
            <div className="flex-1">
              <h2 className="text-2xl lg:text-3xl font-headline font-extrabold text-on-surface mb-4">
                {t.join.title}
              </h2>
              <p className="text-on-surface-variant text-lg">{t.join.description}</p>
            </div>
            <div className="flex flex-col items-center gap-3">
              <a href={JOIN_FORM_URL} target="_blank" rel="noopener noreferrer">
                <button className="hero-gradient text-on-primary px-8 py-4 rounded-xl font-bold text-lg hover:scale-[0.98] transition-transform cursor-pointer">
                  {t.join.button}
                </button>
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* ===== Footer ===== */}
      <footer className="bg-surface-container-low border-t border-outline/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Top: About + Social */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* About */}
            <div>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-md">
                {t.about.description}
              </p>
            </div>
            {/* Follow Us */}
            <div className="md:text-right">
              <h4 className="font-headline font-bold text-on-surface mb-4">{t.about.title}</h4>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a
                  href="https://space.bilibili.com/1770030225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <Tv className="h-4 w-4" />
                  <span>{t.about.contact.bilibili}</span>
                </a>
                <a
                  href="https://www.zhihu.com/ring/host/1911472389268676936"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <Target className="h-4 w-4" />
                  <span>{t.about.contact.circle}</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/open-community-for-ai-safety-china"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>{t.about.contact.linkedin}</span>
                </a>
                <a
                  href="https://github.com/ocasc/doc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors"
                >
                  <Github className="h-4 w-4" />
                  <span>{t.about.contact.github}</span>
                </a>
                <button
                  onClick={() => setShowWechatQR(true)}
                  className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
                  title="微信公众号"
                >
                  <WechatIcon className="h-4 w-4" />
                  <span>{language === 'zh' ? '公众号' : 'WeChat'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Partners */}
          <div className="py-6 border-t border-outline/10 flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <span className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider shrink-0">{t.partners.title}</span>
            <div className="flex flex-wrap items-center gap-6">
              <a href="https://according.work/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="/accordingwork-logo.png" alt="According.Work" className="h-6 object-contain" />
              </a>
              <a href="https://www.tup.tsinghua.edu.cn/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="/tup-logo.png" alt="清华大学出版社" className="h-6 object-contain" />
              </a>
              <a href="https://www.thefungimind.com/" target="_blank" rel="noopener noreferrer" className="opacity-60 hover:opacity-100 transition-opacity">
                <img src="/fungimind-logo.jpg" alt="Fungimind" className="h-8 object-contain" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="py-6 border-t border-outline/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-on-surface-variant">
            <p>{t.footer.copyright}</p>
            <a href="mailto:sarah.sun@aisafety-cn.com" className="hover:text-primary transition-colors" aria-label="Email"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>

      {/* Coming Soon Toast */}
      <div
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${showComingSoon ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
      >
        <div className="bg-on-surface text-surface px-5 py-3 rounded-2xl shadow-lg text-sm font-medium flex items-center gap-2">
          <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Coming Soon
        </div>
      </div>

      {/* WeChat QR Modal */}
      {showWechatQR && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowWechatQR(false)}
        >
          <div
            className="bg-white rounded-2xl p-6 shadow-2xl flex flex-col items-center gap-4 max-w-xs w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-base font-bold text-gray-800">OCASC 微信公众号</h3>
            <img
              src="/ocasc-qrcode.png"
              alt="OCASC微信公众号二维码"
              className="w-56 h-56 object-contain rounded-xl"
            />
            <p className="text-xs text-gray-500">扫描二维码关注我们</p>
            <button
              onClick={() => setShowWechatQR(false)}
              className="text-sm text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
