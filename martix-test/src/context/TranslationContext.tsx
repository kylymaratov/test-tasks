'use client';
import translations from '@/public/locales/en/common.json';
import { Languages } from '@/utils/dictionaries';

import React, { createContext, ReactNode, useContext } from 'react';

const TranslationContext = createContext<{
  t?: typeof translations;
  locale: Languages;
}>({ t: undefined, locale: 'ru' });

interface Props {
  t: typeof translations;
  locale: Languages;
  children: ReactNode;
}

export const TranslationProvider = ({ t, locale, children }: Props) => {
  return (
    <TranslationContext.Provider value={{ t, locale }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslationContext = () => {
  const context = useContext(TranslationContext);

  return context;
};
