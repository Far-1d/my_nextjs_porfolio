
import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
// import SkillScroll from "@/components/SkillScroll";
import Footer from "@/components/Footer";
import MultiLangNav from '@/components/ui/multilng_nav'
// import WorkExperience from "@/components/workExperience";
import { Locale } from '@/i18n.config';
import dynamic from 'next/dynamic';
import { Metadata, ResolvingMetadata } from "next";
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const SkillScroll = dynamic(() => import('@/components/SkillScroll'), { ssr: false });
const WorkExperience = dynamic(() => import('@/components/workExperience'), { ssr: false });

type Props = {
  searchParams: { [lang: string]: string | string[] | undefined }
}
 
export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const lang = searchParams.lang

  const t = lang==='en' ? "F.Zarie's porfolio" : 'رزومه فرید زارعی';
  const description = lang === 'en'? 'python backend developer' : 'برنامه نویس بک اند'
  return {
    title: t,
    description: description
  }
}


export default function Home({
  params: { lang }
} : {
  params: {lang: Locale}
}) {
  const p = {lang};
  return (
      <main className="relative bg-black-100 flex 
        justify-center item-center flex-col overflow-clip
        mx-auto sm:px-10 px-5">
        <div className="w-full">
          <MultiLangNav params={p}/>
          <Hero params={p}/>
          <RecentProjects params={p}/>
          <Grid params={p}/>
          <SkillScroll params={p}/>
          <WorkExperience params={p}/>
          <Footer params={p}/>
        </div>
      </main>
  );
}
