import 'server-only';

export type Languages = 'ru' | 'en';

const dictionaries = {
  ru: () =>
    import('@/public/locales/ru/common.json').then((module) => module.default),
  en: () =>
    import('@/public/locales/en/common.json').then((module) => module.default),
};

export const getDictionary = async (locale: Languages) =>
  dictionaries[locale]();
