/* eslint-disable no-unused-vars */
import React from 'react';
import styles, { layout } from '../style';
import { t } from 'i18next';
import { about, experience, team, whoWeAre } from '../assets1';
import LineTitle from './LineTitle';

const AboutUs = () => {
  return (
    <section 
      className={`relative bg-gray-50 flex md:flex-row flex-col ${styles.paddingX} py-[100px] min-h-[100vh] w-full overflow-hidden`}>

      <div className={`${layout.sectionInfo} gap-5 `}>
      <div className='title-with-line'>
      <h1 className={`${styles.title} text-blue1`}>{t("about.title")}</h1>
      <LineTitle />
      </div>

        <p className={`${styles.paragraph}`}>{t("about.text")}</p>
      </div>

      <div className='absolute left-[25%] top-[-15%]'>
      <img src={whoWeAre} alt="Who We Are" className='opacity-5 -z-10'/>
      </div>

      <div className={`${layout.sectionImg} h-[500px] gap-5 relative`}>
        <div className='w-[50%]'>
          <img 
            src={team} 
            className="w-full md:h-[480px] h-[370px] rounded-[20px]" 
            alt="About Img" 
          />
        </div>
       
        <div className='flex w-[50%] flex-col gap-5'>
          <img 
            src={about} 
            className='w-full md:h-[230px] h-[175px] rounded-[20px]' 
            alt="About Img" 
          />
          <img 
            src={experience} 
            className='w-full md:h-[230px] h-[175px] rounded-[20px]' 
            alt="About Img" 
          />
        </div>
      </div>
      {/* Coupure inclinée du bas droit vers le bas gauche */}
      <div
        className="absolute bottom-0 left-0 w-full h-[80px] bg-white"
        style={{
          clipPath: 'polygon(0 100%, 100% 100%, 100% 10%)',
        }}
      ></div>
    
    </section>
  );
}

export default AboutUs;
