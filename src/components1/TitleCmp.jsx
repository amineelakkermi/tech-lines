import React from 'react';
import styles from '../style';
import CurrentLanguage1 from './CurrentLanguage1';
import ClipTop from './ClipTop';

const TitleCmp = ({ titleAr, titleEn, img, bgColor }) => {
  const currentLanguage = CurrentLanguage1();

  return (
    <div className={`${styles.paddingX} flex items-center py-[100px] w-full h-[600px] bg-[#f6f6f6] relative`}>
      <div className="relative flex w-full justify-center items-center z-10">
        <h1 className={`${styles.title} text-center text-blue font-bold`}>
          {currentLanguage === "ar" ? titleAr : titleEn}
        </h1>
      </div>
      <ClipTop bgColor={bgColor} />
    </div>
  );
};

export default TitleCmp;
