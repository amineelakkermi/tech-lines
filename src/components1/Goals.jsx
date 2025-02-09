import React from 'react';
import styles, { layout } from '../style';
import LineTitle from './LineTitle';
import { goals } from '../assets1';
import { t } from 'i18next';
import CurrentLanguage1 from './CurrentLanguage1';
import ClipBlue from './ClipBlue';

const Goals = () => {
  const currentLanguage = CurrentLanguage1();

  const boldTextBeforeColon = (text) => {
    const parts = text.split(":");
    return (
      <>
        <span className="font-bold text-[22px] text-blue">{parts[0]}</span> : {parts.slice(1).join(":")}
      </>
    );
  };

  return (
    <div dir="ltr" className={`${layout.sectionReverse} relative md:pb-[150px] pb-[100px] ${styles.paddingX}`}>
      <div className={`relative ${layout.sectionImgReverse} ml-12 h-[500px] gap-5 relative`}>
        <div className="w-[100%] z-50">
          <img
            src={goals}
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

      </div>

      <div dir={currentLanguage === "ar" ? "rtl" : "ltr"} className={`${layout.sectionInfo} gap-5`}>
        <div className="title-with-line">
          <h1 className={`${styles.title} text-blue1`}>{t("goals.title")}</h1>
          <LineTitle direction={currentLanguage === "ar" ? "ltr" : "rtl"} />
        </div>
        <p className={`${styles.paragraph}`}>{boldTextBeforeColon(t("goals.text1"))}</p>
        <p className={`${styles.paragraph}`}>{boldTextBeforeColon(t("goals.text2"))}</p>
        <p className={`${styles.paragraph}`}>{boldTextBeforeColon(t("goals.text3"))}</p>
        <p className={`${styles.paragraph}`}>{boldTextBeforeColon(t("goals.text4"))}</p>
      </div>

      <ClipBlue />
    </div>
  );
};

export default Goals;
