//هنا صفحة الاساسية نقوم باستوراد الصفحات التي تم انشاؤها  في مجلد ال components

import { FillterHRO } from "@/components/FillterHRO";
import { Hero } from "@/components/Hero";
import { MbGallery } from "@/components/MbGallery";

export default function Home() {
  return (
  <>
    <Hero />

    <MbGallery />
    <FillterHRO/>
 
    </>
  
  );
}
