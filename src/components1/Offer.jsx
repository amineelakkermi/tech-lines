import React from 'react'; 
import styles, { layout } from '../style';
import { experience } from '../assets1';
import LineTitle from './LineTitle';
import { t } from 'i18next';
import ClipBlue from './ClipBlue';

const Offer = () => {
  return (
    <div className={`relative flex flex-col md:pb-[150px] pb-[100px] gap-12 ${styles.padding}`}>
       
       <div className='w-full flex justify-center items-center relative'>
         <span className='absolute top-[0%] transform  bg-blue1 rounded-full w-[30px] h-[30px]'></span>
         <blockquote className='bg-blue1 h-[150px] w-[5px]'></blockquote>
       </div>
     
      <div className={`w-full flex flex-col justify-center items-center gap-5`}>
          <h1 className={`${styles.title} text-center text-blue1`}>{t("offer.title")}</h1>
        <p className={`${styles.paragraph} text-center max-w-[750px] mt-5`}>{t("offer.text")}</p>
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

      <div className='w-full flex justify-center items-center relative'>
         <span className='absolute bottom-[0%] transform  bg-blue1 rounded-full w-[30px] h-[30px]'></span>
         <blockquote className='bg-blue1 h-[150px] w-[5px]'></blockquote>
       </div>

       <ClipBlue />
     
    </div>
  );
};

export default Offer;
