"use client"
import Image from "next/image"
import { Parallax,ParallaxProvider } from "react-scroll-parallax"
const MbImages = [
    {src:'/assets/images/iphone_01.png',title:'Audio Book 01' ,speed:20},
    {src:'/assets/images/iphone_02.png',title:'Audio Book 02' ,speed:10},
    {src:'/assets/images/iphone_03.png',title:'Audio Book 03' ,speed:20},
    {src:'/assets/images/iphone_04.png',title:'Audio Book 04' ,speed:10},
    {src:'/assets/images/iphone_05.png',title:'Audio Book 05' ,speed:20},
]
export const MbGallery = () => {
  return (
   <ParallaxProvider>
     <div className="flex gap-10 mx-auto my-10 justify-center align-middle overflow-hidden h-[38rem] max-w-[1600px]">
        {MbImages.map(({src,title,speed}) =>(
           <Parallax speed={speed}>< Image src={src} alt={title} width={279} height={576}/></Parallax>
        ))}
    </div>
   </ParallaxProvider>
  )
}
