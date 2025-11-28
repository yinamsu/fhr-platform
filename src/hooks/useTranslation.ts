import { useLanguage } from '@/contexts/LanguageContext'
import commonKo from '@/locales/ko/common.json'
import commonEn from '@/locales/en/common.json'
import commonVi from '@/locales/vi/common.json'
import commonTh from '@/locales/th/common.json'
import commonRu from '@/locales/ru/common.json'

export function useTranslation() {
  const { language } = useLanguage()
  
  const translations = {
    ko: commonKo,
    en: commonEn,
    vi: commonVi,
    th: commonTh,
    ru: commonRu,
  }

  const t = translations[language]

  return { t, language }
}
