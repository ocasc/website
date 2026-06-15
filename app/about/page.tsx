"use client";

import React, { useState } from 'react';
import { Mail, Tv, Linkedin, Github, Target, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/language-context';
import { LanguageSwitcher } from '@/components/language-switcher';
import { NotificationBanner } from '@/components/notification-banner';

const ZhihuIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0zm1.964 4.078c-.271.73-.5 1.434-.68 2.11h4.587c.545-.006.445 1.168.445 1.171H9.384a58.104 58.104 0 01-.112 3.797h2.712c.388.023.393 1.251.393 1.266H9.183a9.223 9.223 0 01-.408 2.102l.757-.604c.452.456 1.512 1.712 1.906 2.177.473.681.063 2.081.063 2.081l-2.794-3.382c-.653 2.518-1.845 3.607-1.845 3.607-.523.468-1.58.82-2.64.516 2.218-1.73 3.44-3.917 3.667-6.497H4.491c0-.015.197-1.243.806-1.266h2.71c.024-.32.086-3.254.086-3.797H6.598c-.136.406-.158.447-.268.753-.594 1.095-1.603 1.122-1.907 1.155.906-1.821 1.416-3.6 1.591-4.064.425-1.124 1.671-1.125 1.671-1.125zM13.078 6h6.377v11.33h-2.573l-2.184 1.373-.401-1.373h-1.219zm1.313 1.219v8.86h.623l.263.937 1.455-.938h1.456v-8.86z"/>
  </svg>
);

const BilibiliIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.789 1.894v7.52c.02.764.283 1.396.789 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.497.769-1.129.789-1.893v-7.52c-.02-.765-.283-1.396-.789-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373z"/>
  </svg>
);

const XhsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972.794.794 0 0 0-.884-.618.795.795 0 0 0-.692.794c0 .101-.002.666.001.777zm-11.509 4.808c-.203.001-1.353.004-1.685.003a2.528 2.528 0 0 1-.766-.126.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124.66.01 1.32.002 1.981 0 .01 0 .02-.006.023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01a.834.834 0 0 0-.01.08c-.027.397-.038.495-.234 3.06-.012.24-.034.389-.135.607-.026.057-.033.042.003.112.046.092.681 1.523.787 1.74.008.015.011.02.017.02.008 0 .033-.026.047-.044.147-.187.268-.391.371-.606.306-.635.44-1.325.486-1.706.014-.11.021-.22.03-.33l.204-2.616.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.427 1.427 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.443.443 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293c.076.982.153 1.964.233 2.946.05.4.186 1.085.487 1.706.103.215.223.419.37.606.015.018.037.051.048.049.02-.003.742-1.642.804-1.765.036-.07.03-.055.003-.112zm3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56c-.01 0-.02.006-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.534.534 0 0 0-.02.191.46.46 0 0 0 .23.378.981.981 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.53.53 0 0 0-.023.172.465.465 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001c.01 0 .02-.006.023-.015l.575-1.28a.025.025 0 0 0-.024-.035zm-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829 0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047.001.037.465 1.064.555 1.263.01.02.03.033.051.033.157.003.767.009.938-.014.153-.02.3-.06.438-.132.3-.156.49-.419.595-.765.052-.172.075-.353.075-.533.002-2.33 0-4.66-.007-6.991a.032.032 0 0 0-.032-.032zm11.784 6.896c0-.014-.01-.021-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084-.37 0-1.11-.002-1.304 0-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036c.006.01.013.008.058.008 1.748.003 3.495.002 5.243.002.03-.001.034-.006.035-.033v-1.539zm4.177-3.43c0 .013-.007.023-.02.024-.346.006-.692.004-1.037.004-.014-.002-.022-.01-.022-.024-.005-.434-.007-.869-.01-1.303 0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015.093.025.16.107.165.204.006.431.002 1.153.001 1.153zm2.67.244a1.953 1.953 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21c0-.132-.007-.263-.025-.394a1.823 1.823 0 0 0-.153-.53 1.533 1.533 0 0 0-.677-.71 2.167 2.167 0 0 0-1-.258c-.153-.003-.567 0-.72 0-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007c-.006.006-.008.012-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128V11.19s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003c.098 0 .191.02.28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185 0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033.184.437.374.871.57 1.303a.045.045 0 0 0 .04.026c.17.005.34.002.51.003.15-.002.517.004.666-.01a2.03 2.03 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981c0-.128-.01-.254-.034-.38 0 .078-.029-.641-.724-.998z"/>
  </svg>
);

const WechatIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.295.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c-.276-.94-.418-1.92-.418-2.91C8.276 9.47 13.137 6 19.14 6c.275 0 .548.012.82.036C18.573 3.666 13.932 2.188 8.691 2.188zm-1.47 3.11a1.123 1.123 0 1 1 0 2.246 1.123 1.123 0 0 1 0-2.246zm5.576 0a1.123 1.123 0 1 1 0 2.246 1.123 1.123 0 0 1 0-2.246zM19.14 7.2c-5.28 0-9.498 3.516-9.498 7.83 0 4.312 4.217 7.83 9.498 7.83.958 0 1.882-.126 2.74-.354a.73.73 0 0 1 .602.082l1.498.878a.27.27 0 0 0 .14.046.247.247 0 0 0 .247-.247c0-.06-.024-.118-.04-.177l-.327-1.238a.495.495 0 0 1 .18-.558C25.696 20.104 27 18.236 27 16.03c0-4.314-4.217-7.83-9.498-7.83h1.638zm-3.107 5.027a.94.94 0 1 1 0 1.88.94.94 0 0 1 0-1.88zm5.107 0a.94.94 0 1 1 0 1.88.94.94 0 0 1 0-1.88z"/>
  </svg>
);

const JOIN_FORM_URL = 'https://docs.qq.com/form/page/DTXNGUmNiTmNnV016';

const CORE_MEMBERS = [
  {
    nameZh: '王金戈',
    nameEn: 'Jinge Wang',
    initials: '王金',
    photo: '/photo-wangjinge.jfif',
    gradient: 'from-[#004ac6] to-[#2563eb]',
    linkedin: 'https://www.linkedin.com/in/wangjinge/',
    zhihu: 'https://www.zhihu.com/people/jingewang',
    xiaohongshu: 'https://www.xiaohongshu.com/user/profile/604cf639000000000100bded',
    bilibili: 'https://space.bilibili.com/69217382',
  },
  {
    nameZh: '孙圆圆',
    nameEn: 'Yuanyuan Sun',
    initials: '孙圆',
    photo: '/photo-sarahsun.jfif',
    gradient: 'from-[#006242] to-[#00a86b]',
    linkedin: 'https://www.linkedin.com/in/yuan-yuan-sun/',
    zhihu: undefined,
    xiaohongshu: undefined,
    bilibili: undefined,
  },
  {
    nameZh: '王巍',
    nameEn: 'Wei Wang',
    initials: '王巍',
    photo: '/photo-wangwei.jfif',
    gradient: 'from-[#7c3aed] to-[#a855f7]',
    linkedin: 'https://www.linkedin.com/in/wangwei15/',
    zhihu: undefined,
    xiaohongshu: undefined,
    bilibili: undefined,
  },
  {
    nameZh: '柳菁',
    nameEn: 'Jing Liu',
    initials: '柳菁',
    photo: '/photo-liujing.jfif',
    gradient: 'from-[#c2410c] to-[#f97316]',
    linkedin: 'https://www.linkedin.com/in/jingl779/',
    zhihu: undefined,
    xiaohongshu: undefined,
    bilibili: undefined,
  },
];

const CO_CREATOR_PLACEHOLDERS = Array(6).fill(null);

export default function AboutPage() {
  const { t, language } = useLanguage();
  const ap = t.aboutPage;
  const [showWechatQR, setShowWechatQR] = useState(false);

  return (
    <div className="min-h-screen bg-surface font-body text-on-surface overflow-x-hidden">
      {/* ===== Top Navigation ===== */}
      <nav className="fixed top-0 w-full z-50 glass-nav shadow-sm">
        <NotificationBanner />
        <div className="flex justify-between items-center px-6 md:px-12 lg:px-16 py-4 max-w-6xl mx-auto">
          {/* Logo / Site Name */}
          <a href="/" className="flex items-center gap-1.5 text-lg md:text-xl font-bold tracking-tighter text-on-surface font-headline hover:opacity-80 transition-opacity">
            <img src="/logo.png" alt={t.nav.siteName} className="h-6 w-6 object-contain" />
            {t.nav.siteName}
          </a>

          {/* Nav Links (desktop) */}
          <div className="hidden md:flex gap-8 items-center font-headline tracking-tight font-semibold">
            <a href="/#events" className="text-on-surface-variant hover:text-primary transition-colors">
              {t.nav.events}
            </a>
            <a href="/#resources" className="text-on-surface-variant hover:text-primary transition-colors">
              {t.nav.resources}
            </a>
            <a href="/about" className="text-primary transition-colors" aria-current="page">
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
        <section className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 py-16 lg:py-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-tertiary/10 text-tertiary text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
            </svg>
            {ap.hero.badge}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-extrabold text-on-surface leading-tight tracking-tight mb-6">
            {ap.hero.title}
          </h1>
          <p className="text-lg lg:text-xl text-on-surface-variant leading-relaxed max-w-2xl">
            {ap.hero.description}
          </p>
        </section>

        {/* ===== Story Section ===== */}
        <section className="bg-surface-container-low py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-4">
                <h2 className="text-3xl font-headline font-bold text-on-surface mb-4 sticky top-28">
                  {ap.story.title}
                </h2>
              </div>
              <div className="lg:col-span-8 space-y-5">
                {ap.story.paragraphs.map((para, i) => (
                  <p key={i} className="text-on-surface-variant leading-relaxed text-base lg:text-lg">
                    {para}
                  </p>
                ))}
                {/* Community Stats */}
                <div className="grid grid-cols-3 gap-4 pt-6">
                  <div className="bg-surface-container rounded-2xl p-5 text-center">
                    <div className="text-3xl font-headline font-extrabold text-primary mb-1">{t.stats.coreTeam.value}</div>
                    <div className="text-sm text-on-surface-variant">{t.stats.coreTeam.label}</div>
                  </div>
                  <div className="bg-surface-container rounded-2xl p-5 text-center">
                    <div className="text-3xl font-headline font-extrabold text-primary mb-1">{t.stats.community.value}</div>
                    <div className="text-sm text-on-surface-variant">{t.stats.community.label}</div>
                  </div>
                  <div className="bg-surface-container rounded-2xl p-5 text-center">
                    <div className="text-3xl font-headline font-extrabold text-primary mb-1">{t.stats.reach.value}</div>
                    <div className="text-sm text-on-surface-variant">{t.stats.reach.label}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Milestones Section ===== */}
        <section className="py-20 max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          <h2 className="text-3xl font-headline font-bold text-on-surface mb-12 text-center">
            {ap.milestones.title}
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-outline/20 -translate-x-1/2 hidden md:block" />

            <div className="space-y-10 md:space-y-0">
              {ap.milestones.items.map((item, i) => (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                >
                  {/* Content card */}
                  <div className={`w-full md:w-5/12 ${i % 2 === 0 ? 'md:pr-10 md:text-right' : 'md:pl-10'}`}>
                    <div className={`rounded-2xl p-6 shadow-sm border transition-shadow hover:shadow-md ${
                      item.comingSoon
                        ? 'bg-surface-container-lowest border-dashed border-outline/30 opacity-75'
                        : 'bg-surface-container-lowest border-outline/10'
                    }`}>
                      <div className={`flex items-center gap-2 mb-3 ${i % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="inline-block text-xs font-semibold text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                          {item.period}
                        </span>
                        {item.comingSoon && (
                          <span className="inline-block text-xs font-semibold text-amber-600 bg-amber-100 px-2.5 py-1 rounded-full">
                            {t.events.comingSoon}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-headline font-bold text-on-surface mb-2">{item.title}</h3>
                      <p className="text-sm text-on-surface-variant leading-relaxed">{item.description}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div className="w-4 h-4 rounded-full hero-gradient shadow-md flex-shrink-0" />
                  </div>

                  {/* Spacer */}
                  <div className="hidden md:block w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Team Section ===== */}
        <section className="bg-surface-container-low py-20">
          <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
            <h2 className="text-3xl font-headline font-bold text-on-surface mb-4 text-center">
              {ap.team.title}
            </h2>

            {/* Core Members */}
            <h3 className="text-lg font-headline font-semibold text-on-surface-variant text-center mb-10 mt-8">
              {ap.team.coreTitle}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {CORE_MEMBERS.map((member, i) => {
                const memberData = ap.team.members[i];
                const displayName = language === 'zh' ? member.nameZh : member.nameEn;
                return (
                  <div
                    key={i}
                    className="relative bg-white/70 dark:bg-surface-container-lowest/80 backdrop-blur-sm rounded-2xl pt-10 pb-6 px-6 flex flex-col items-center text-center shadow-sm hover:shadow-xl transition-all duration-300 group overflow-hidden"
                  >
                    {/* Top gradient accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${member.gradient}`} />
                    {/* Circular photo avatar */}
                    <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={member.photo}
                        alt={displayName}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {/* Name */}
                    <h4 className="text-lg font-headline font-bold text-on-surface mb-1">{displayName}</h4>
                    {/* Role */}
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-4">
                      {memberData?.role}
                    </p>
                    {/* Social links - icon only */}
                    <div className="flex items-center gap-3 mt-auto">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-on-surface-variant hover:text-primary transition-colors"
                        title="LinkedIn"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                      {member.zhihu && (
                        <a
                          href={member.zhihu}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-on-surface-variant hover:text-primary transition-colors"
                          title="知乎"
                        >
                          <ZhihuIcon className="h-4 w-4" />
                        </a>
                      )}
                      {member.xiaohongshu && (
                        <a
                          href={member.xiaohongshu}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-on-surface-variant hover:text-primary transition-colors"
                          title="小红书"
                        >
                          <XhsIcon className="h-4 w-4" />
                        </a>
                      )}
                      {member.bilibili && (
                        <a
                          href={member.bilibili}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-on-surface-variant hover:text-primary transition-colors"
                          title="Bilibili"
                        >
                          <BilibiliIcon className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Co-creators */}
            <div className="border-t border-outline/10 pt-12">
              <h3 className="text-lg font-headline font-semibold text-on-surface-variant text-center mb-3">
                {ap.team.coCreatorsTitle}
              </h3>
              <p className="text-sm text-on-surface-variant text-center mb-10 max-w-md mx-auto">
                {ap.team.coCreatorsNote}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {CO_CREATOR_PLACEHOLDERS.map((_, i) => (
                  <div
                    key={i}
                    className="bg-surface-container rounded-2xl p-4 flex flex-col items-center text-center opacity-50 border border-dashed border-outline/30"
                  >
                    <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center mb-3">
                      <svg className="w-5 h-5 text-on-surface-variant/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold text-on-surface-variant">{ap.team.placeholderName}</p>
                    <p className="text-xs text-on-surface-variant/70 mt-0.5">{ap.team.placeholderRole}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


      </main>

      {/* ===== Footer ===== */}
      <footer className="bg-surface-container-low border-t border-outline/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16">
          {/* Top: About + Social */}
          <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <p className="text-on-surface-variant text-sm leading-relaxed max-w-md">
                {t.about.description}
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="font-headline font-bold text-on-surface mb-4">{t.about.title}</h4>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href="https://space.bilibili.com/1770030225" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors">
                  <Tv className="h-4 w-4" />
                  <span>{t.about.contact.bilibili}</span>
                </a>
                <a href="https://www.zhihu.com/ring/host/1911472389268676936" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors">
                  <Target className="h-4 w-4" />
                  <span>{t.about.contact.circle}</span>
                </a>
                <a href="https://www.linkedin.com/company/open-community-for-ai-safety-china" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors">
                  <Linkedin className="h-4 w-4" />
                  <span>{t.about.contact.linkedin}</span>
                </a>
                <a href="https://github.com/ocasc/doc" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-on-surface-variant hover:text-primary transition-colors">
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
            <a href="mailto:wjg172184@163.com" className="hover:text-primary transition-colors" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </footer>

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
