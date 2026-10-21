"use client";

import React, { createContext, useContext, useEffect, useCallback } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Language, translations } from './i18n';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: typeof translations.zh;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/** /en 开头即英文，其余一律中文（中文是默认站点，不带前缀） */
function languageFromPath(pathname: string): Language {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'zh';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const language = languageFromPath(pathname);

  // html lang 跟路由走：读屏和搜索引擎按语言处理
  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  }, [language]);

  const setLanguage = useCallback(
    (next: Language) => {
      if (next === language) return;
      const bare = pathname.replace(/^\/en(?=\/|$)/, '') || '/';
      const target = next === 'en' ? (bare === '/' ? '/en' : `/en${bare}`) : bare;
      router.push(target);
    },
    [language, pathname, router]
  );

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
