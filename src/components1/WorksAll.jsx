import React from 'react';
import { t } from 'i18next';
import styles from '../style';
import { worksImg } from '../constants/data1';
import LineTitle from './LineTitle';
import Button from './Button';
import ClipBlue from './ClipBlue';

const WorksAll = () => {
  return (
    <section className={`relative bg-gray-100 md:pb-[150px] pb-[100px] w-full min-h-[100vh] flex flex-col gap-10 ${styles.paddingX} py-[100px]`}>
      
      {/* Grid des images */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-5">
        {worksImg.map((item, index) => (
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


      <ClipBlue />
    </section>
  );
};

export default WorksAll;
