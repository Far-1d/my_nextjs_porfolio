import { FloatingNav } from "./FloatingNav";
import { Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/dictionary'


export default async function MultiLangNav({
    params: { lang }
  } : {
    params: {lang: Locale}
  }) {
    const {nav} = await getDictionary(lang)
    
    return <FloatingNav navItems={nav} />
  }