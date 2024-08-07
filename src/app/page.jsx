//هنا صفحة الاساسية نقوم باستوراد الصفحات التي تم انشاؤها  في مجلد ال components

import { FillterHRO } from "@/components/FillterHRO";
import { Hero } from "@/components/Hero";
import { MbGallery } from "@/components/MbGallery";
import {QuAn} from "@/components/QuAn";

export default function Home() {
  return (
  <>
    <Hero />

    <MbGallery />
    <FillterHRO/>
    <QuAn/>
 
    </>
  
  );
}
