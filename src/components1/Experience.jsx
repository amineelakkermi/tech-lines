import React from 'react';
import styles, { layout } from '../style';
import { experience } from '../assets1';
import LineTitle from './LineTitle';
import { t } from 'i18next';

const Experience = () => {
  return (
    <div className={`relative flex flex-col gap-12 ${styles.padding}`}>
       
     
      <div className={`w-full flex flex-col justify-center items-center gap-5`}>
      <div className='title-with-line'>
      <h1 className={`${styles.title} text-center text-blue1`}>{t("experience.title")}</h1>
      <LineTitle />
      </div>
      <p className={`${styles.paragraph} text-center max-w-[750px] mt-5`}>{t("experience.text")}</p>
      </div>

       <div className={`relative w-full flex justify-center items-center h-auto gap-5`}>
        <div className='w-full z-50 flex justify-center'>
          <img
            src={experience}
            className="md:w-[50%] w-[100%] md:h-[470px] h-[370px] rounded-[20px] object-cover"
            alt="About Img"
          />
        </div>
      </div>

     
    </div>
  );
};

export default Experience;
