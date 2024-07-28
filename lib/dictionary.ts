import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
    en: () => import('@/locales/en/all.json').then(module => module.default),
    fa: () => import('@/locales/fa/all.json').then(module => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()