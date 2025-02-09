import React from 'react'
import styles, { layout } from '../style'
import { style } from 'framer-motion/client'
import LineTitle from './LineTitle'
import { team } from '../assets1'
import { t } from 'i18next'
import CurrentLanguage1 from './CurrentLanguage1'

const Team = () => {
  const currentLanguage = CurrentLanguage1();  

  return (
    <div dir='ltr' className={`${layout.sectionReverse} ${styles.paddingX}`}>
       
       <div className={`relative ${layout.sectionImgReverse}  ml-12 h-[500px] gap-5 relative`}>
         <div className='w-[100%] z-50'>
          <img 
            src={team} 
            className="md:w-[70%] w-[100%] md:h-[470px] h-[370px] rounded-[20px]" 
            alt="About Img" 
          />
        </div>   
        


        <div className="absolute -z-10 -bottom-7 -left-20 md:flex hidden flex-col gap-4">
        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 justify-center">
            {[...Array(5)].map((_, colIndex) => (
              <span key={colIndex} className="w-3 h-3 opacity-30 bg-slate-400 rounded-full inline-flex"></span>
            ))}
          </div>
        ))}
      </div>


        <div className="absolute -z-0 -top-7 right-32 md:flex hidden flex-col gap-4">
        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 justify-center">
            {[...Array(5)].map((_, colIndex) => (
              <span key={colIndex} className="w-3 h-3 opacity-30 bg-slate-400 rounded-full inline-flex"></span>
            ))}
          </div>
        ))}
      </div>
      </div>


     <div dir={currentLanguage === "ar" ? "rtl": "ltr"} className={`${layout.sectionInfo} gap-5 `}>
      <div className='title-with-line'>
      <h1 className={`${styles.title} text-blue1`}>{t("team.title")}</h1>
      <LineTitle direction={currentLanguage === "ar" ? "ltr" : "rtl"}/>
      </div>
      <p className={`${styles.paragraph}`}>{t("team.text")}</p>
     </div>

    
      
    </div>
  )
}

export default Team