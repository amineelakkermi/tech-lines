import React from 'react';
import { t } from 'i18next';
import styles from '../style';
import { worksImg } from '../constants/data1';
import LineTitle from './LineTitle';
import Button from './Button';

const Works = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  return (
    <section className={`relative bg-gray-100 w-full min-h-[100vh] flex flex-col gap-10 ${styles.paddingX} py-[100px]`}>
      
      <div
        className="absolute top-0 right-0 w-full h-[80px] bg-blue z-0"
        style={{ clipPath: 'polygon(0 100%, 0 100%, 100% 100%, 0% 100%, 0 0)' }}
      ></div>
      {/* Titre */}
      <div className="w-full flex flex-col gap-4 justify-center items-center">
        <div className="title-with-line">
          <h1 className={`${styles.title} text-blue1`}>{t("works.title")}</h1>
          <LineTitle />
        </div>
      </div>

      {/* Grid des images */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
        {worksImg.slice(0, 8).map((item, index) => (
          <div key={index} className="relative overflow-hidden img-container w-full h-[290px] cursor-pointer">
            <img 
              src={item.img} 
              alt="img" 
              className="w-full h-full rounded-[7px] absolute inset-0 object-cover"
            />
            <div className="absolute bg-gradient opacity-0 inset-0 w-full h-full"></div>
          </div>
        ))}
      </div>

      <Button url="/works" mt="mt-12" textAr="المزيد" textEn="More" />

      <div
        className="absolute bottom-0 left-0 w-full h-[80px] bg-white z-0"
        style={{ clipPath: 'polygon(100% 100%, 100% 0, 100% 100%, 0% 100%, 0 0%)' }}
      ></div>

      

       
    </section>
  );
};

export default Works;
