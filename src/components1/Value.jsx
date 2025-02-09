import React from 'react';  
import styles, { layout } from '../style';
import { etoile, experience, vision } from '../assets1';
import LineTitle from './LineTitle';
import { t } from 'i18next';
import CurrentLanguage1 from './CurrentLanguage1';

const Value = () => {
  const boldTextBeforeColon = (text) => {
    const parts = text.split(':');
    return (
      <>
        <span className="font-bold text-[22px]">{parts[0]}</span>: {parts.slice(1).join(':')}
      </>
    );
  };
  const currentLanguage = CurrentLanguage1();

  return (
    <div className={`relative bg-gray-100 flex flex-col gap-12 ${styles.paddingX} py-[100px]`}>
       
      <div className={`w-full flex flex-col justify-center items-center gap-5`}>
        <div className='title-with-line'>
          <h1 className={`${styles.title} text-center text-blue1`}>{t("value.title")}</h1>
          <LineTitle direction={currentLanguage === "ar" ? "ltr" : "rtl"}/>
          </div> 
        <p className={`${styles.paragraph} text-blue z-50 font-bold text-[26px] text-center max-w-[750px] mt-5`}>
          {boldTextBeforeColon(t("value.text1"))}
        </p>
      </div>

      <div className='absolute left-[5%] md:top-[15%] top-[5%]'>
        <img src={etoile} alt="etoile" className='-z-50' />
      </div>

      <div className='absolute right-[5%] md:bottom-[5%] -bottom-0'>
        <img src={etoile} alt="etoile"  className='-z-50' />
      </div>

      <div className="absolute z-10 right-20 top-10 md:flex hidden flex-col gap-4">
        {[...Array(3)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 justify-center">
            {[...Array(4)].map((_, colIndex) => (
              <span key={colIndex} className="w-3 h-3 opacity-35 bg-blue rounded-full inline-flex"></span>
            ))}
          </div>
        ))}
      </div>

      {/* Grid Section */}
      <div className='w-full relative flex md:flex-row flex-col flex-wrap justify-center items-center gap-8'>
        <div className='flex flex-col justify-between h-full'>
          <p className={`${styles.paragraph}  text-center max-w-[100%] mx-auto mt-5 whitespace-pre-wrap break-words`}>
            {boldTextBeforeColon(t("value.text2"))}
          </p>
        </div>
        <div className='flex flex-col justify-between h-full'>
          <p className={`${styles.paragraph}  text-center max-w-[100%] mx-auto mt-5 whitespace-pre-wrap break-words`}>
            {boldTextBeforeColon(t("value.text3"))}
          </p>
        </div>
        <div className='flex flex-col justify-between h-full'>
          <p className={`${styles.paragraph}  text-center max-w-[100%] mx-auto mt-5 whitespace-pre-wrap break-words`}>
            {boldTextBeforeColon(t("value.text4"))}
          </p>
        </div>
        <div className='flex flex-col justify-between h-full'>
          <p className={`${styles.paragraph}  text-center max-w-[100%] mx-auto mt-5 whitespace-pre-wrap break-words`}>
            {boldTextBeforeColon(t("value.text5"))}
          </p>
        </div>
        <div className='flex flex-col justify-between h-full'>
          <p className={`${styles.paragraph}  text-center max-w-[100%] mx-auto mt-5 whitespace-pre-wrap break-words`}>
            {boldTextBeforeColon(t("value.text6"))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Value;
