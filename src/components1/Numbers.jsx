/* eslint-disable no-unused-vars */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaCheckCircle } from 'react-icons/fa';  // Import de l'icône
import styles from '../style';
import { numbers } from '../constants/data1';
import { t } from 'i18next';
import CurrentLanguage1 from './CurrentLanguage1';
import LineTitle from './LineTitle';
import { lines, stylingImg } from '../assets1';

const Numbers = () => {
  const currentLanguage = CurrentLanguage1();  // Récupérer la langue courante

  return (
    <section className={`relative flex ${styles.paddingX} py-[100px] min-h-[100vh]  flex-col gap-12`}>
      <div className='w-full flex flex-col gap-4 justify-center items-center'>
        <div className="title-with-line">
          <h1 className={`${styles.title} text-blue1`}>
            {t("numbers.title")}
          </h1>

          <LineTitle direction="ltr"/>
          </div>

        <p className={`${styles.paragraph} mt-4 text-center text-[22px] max-w-[750px]`}>
          {currentLanguage === "ar" 
            ? "نفتخر بإنجازاتنا الواسعة في مجالات مختلفة، حيث نقدم حلولاً مبتكرة وخدمات متكاملة تلبي احتياجات عملائنا بأعلى معايير الجودة."
            : "We take pride in our extensive achievements across various fields, providing innovative solutions and integrated services that meet our clients' needs with the highest quality standards."
          }
        </p>
      </div>

      {/* Liste des éléments centrés avec alignement start */}
      <div className="w-full flex justify-center items-center flex-col gap-4 sm:gap-6">
        <div className="flex flex-col items-start gap-4">
          {numbers.map((item, index) => (
            <div key={index} className="flex items-start gap-3 text-lg text-blue">
              <FaCheckCircle className="text-green-500 text-xl flex-shrink-0" /> {/* Icône verte */}
              <span className="max-w-[750px] text-start">
                {currentLanguage === "ar" ? item.textAr : item.textEn}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className='absolute hidden md:flex left-5 top-[85%]'>
       <img src={lines} alt="lines" className='object-cover opacity-80' />
      </div>
      
      <div className='absolute hidden md:flex right-5 bottom-[85%]'>
       <img src={lines} alt="lines" className='object-cover opacity-80' />
      </div>

      <div
          className="absolute bottom-0 left-0 w-full h-[80px] bg-[#2E2E72]"
          style={{
            clipPath: 'polygon(0 100%, 100% 110%, 100% 10%)',
          }}
        ></div>
      </section>
  );
};

export default Numbers;
