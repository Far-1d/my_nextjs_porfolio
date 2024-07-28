
import Grid from "@/components/Grid";
// import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
// import SkillScroll from "@/components/SkillScroll";
import Footer from "@/components/Footer";
import MultiLangNav from '@/components/ui/multilng_nav'
// import WorkExperience from "@/components/workExperience";
import { Locale } from '@/i18n.config';
import dynamic from 'next/dynamic';
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const SkillScroll = dynamic(() => import('@/components/SkillScroll'), { ssr: false });
const WorkExperience = dynamic(() => import('@/components/workExperience'), { ssr: false });

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
        <div className="max-w-7xl w-full">
          <MultiLangNav params={p}/>
          <Hero params={p}/>
          <Grid params={p}/>
          <SkillScroll params={p}/>
          <RecentProjects params={p}/>
          <WorkExperience params={p}/>
          <Footer params={p}/>
        </div>
      </main>
  );
}
