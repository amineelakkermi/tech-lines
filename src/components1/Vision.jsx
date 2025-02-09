import React from 'react';  
import styles, { layout } from '../style';
import { experience, vision } from '../assets1';
import LineTitle from './LineTitle';
import { t } from 'i18next';
import CurrentLanguage1 from './CurrentLanguage1';

const Vision = () => {
  const currentLanguage = CurrentLanguage1();
  return (
    <div className={`relative flex flex-col gap-12 ${styles.padding}`}>
       
      <div className={`w-full flex flex-col justify-center items-center gap-5`}>
      <div className='title-with-line'>
      <h1 className={`${styles.title} text-center text-blue1`}>{t("vision.title")}</h1>
      <LineTitle direction={currentLanguage === "ar" ? "ltr" : "rtl"}/>
      </div> 
      <p className={`${styles.paragraph} text-center max-w-[750px] mt-5`}>{t("vision.text1")}</p>
      </div>

      <div className='w-full relative grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div className='flex flex-col justify-between h-full'>
          <p className={`${styles.paragraph} text-center max-w-[750px] mt-5`}>{t("vision.text2")}</p>
        </div>

        <div className={`relative flex flex-col justify-between h-full gap-5`}>
          <div className='w-full z-50 flex justify-center'>
            <img
              src={vision}
              className="md:w-[50%] w-[100%] opacity-5 rounded-[20px] object-cover"
              alt="Vision Img"
            />
          </div>
        </div>
      
        <div className='flex flex-col justify-between h-full'>
          <p className={`${styles.paragraph} text-center max-w-[750px] mt-5`}>{t("vision.text3")}</p>
        </div>
      </div>
      <div className={`w-full flex flex-col justify-center items-center gap-5`}>
        <p className={`${styles.paragraph} text-center max-w-[750px] mt-5`}>{t("vision.text4")}</p>
      </div>
    </div>
  );
};

export default Vision;
