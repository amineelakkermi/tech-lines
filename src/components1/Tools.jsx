import React from 'react'
import styles, { layout } from '../style'
import { style } from 'framer-motion/client'
import LineTitle from './LineTitle'
import { team, tools, tools2 } from '../assets1'
import { t } from 'i18next'
import CurrentLanguage1 from './CurrentLanguage1'

const Tools = () => {
  const currentLanguage = CurrentLanguage1(); 

  return (
    <div
    dir='ltr'
    className={`relative ${layout.section} ${styles.paddingX}`}>
     <div
      dir={currentLanguage === "ar" ? "rtl": "ltr"}
     className={`${layout.sectionInfo} md:mr-16 mr-0 gap-5 `}>
      <div className='title-with-line'>
      <h1 className={`${styles.title} text-blue1`}>{t("tools.title")}</h1>
      <LineTitle direction={currentLanguage === "ar" ? "ltr" : "rtl"}/>
      </div>
      <p className={`${styles.paragraph}`}>{t("tools.text")}</p>
     </div>

     <div
     className={`relative ${layout.sectionImg} md:ml-16 ml-0 h-[500px] gap-5 relative`}>
     <div className='w-[100%] z-50'>
     <img src={tools} className="md:w-[70%] w-[100%] md:h-[470px] h-[370px] rounded-[20px]" alt="About Img" />
     </div>   

 <div className="absolute -z-10 -bottom-7 -left-20 md:flex hidden flex-col gap-4">
 {[...Array(5)].map((_, rowIndex) => (
   <div key={rowIndex} className="flex gap-4 justify-center">
     {[...Array(3)].map((_, colIndex) => (
       <span key={colIndex} className="w-3 h-3 opacity-30 bg-slate-400 rounded-full inline-flex"></span>
     ))}
   </div>
 ))}
</div>

  

 <div className="absolute -z-0 -top-7 right-32 md:flex hidden flex-col gap-4">
 {[...Array(5)].map((_, rowIndex) => (
   <div key={rowIndex} className="flex gap-4 justify-center">
     {[...Array(3)].map((_, colIndex) => (
       <span key={colIndex} className="w-3 h-3 opacity-30 bg-slate-400 rounded-full inline-flex"></span>
     ))}
   </div>
 ))}
</div>
     </div>

    <div className='absolute opacity-50 md:left-[25%] left-[50%]  md:top-[15%] top-[5%]'>
    <img src={tools2} className='opacity-100' alt="tools2" />
     </div>
     
   <div className='absolute md:opacity-50 opacity-0 left-[35%] bottom-[10%]'>
   <img src={tools2} className='opacity-100' alt="tools2" />
   </div>
     


    
      
    </div>
  )
}

export default Tools