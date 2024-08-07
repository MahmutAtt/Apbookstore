import React from 'react'
import { FaApple, FaArrowRight, FaBookOpen } from "react-icons/fa";
 const About = () => {
  return (
   // <div className='w-full h-screen grid content-center justify-center text-yellow-500 text-7xl'>About</div>
   <section className="text-gray-900 dark:bg-gray-900 dark:text-white">
   <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
       
       <FaApple className= "mx-auto text-8xl bg-gray-900 dark:bg-black py-3 px-4 mb-5 rounded-3xl text-white "/>
   
       
       <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-non text md:text-5xl lg:text-6xl">hello</h1>
       <p className="mb-8 text-lg font-normal lg:text-xl sm:px-16 lg:px-48"> About</p>
       <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
           <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-2xl bg-gray-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
               Get started
               <FaArrowRight className="ml-2" />
           </a>
           <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center rounded-2xl border border-gray-500 text-gray-800 hover:bg-green-700 focus:ring-4 dark:focus:ring-white-900 dark:text-white">
               Learn more
           </a>
       </div>
   </div>
</section>
  )
}
export default About