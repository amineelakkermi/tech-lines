import React from "react";
import { brands } from "../constants/data1";
import styles from "../style";
import { t } from "i18next";
import LineTitle from "./LineTitle";
import { stylingImg } from "../assets1";

const Brands = () => {
  return (
    <div className={`${styles.paddingX} pb-[150px] bg-[#2E2E72] relative flex flex-col justify-center items-center gap-12 md:min-h-[75vh] min-h-[60vh]`}>
        <h1 className={`${styles.title} text-white text-center`}>{t("partners.title")}</h1>

      <div className="relative w-full flex flex-wrap justify-center items-center md:gap-24 gap-16 overflow-hidden mt-12">
            {brands.map((brand, index) => (
              <div key={index} className="brand-logo w-[250px] h-[150px]">
                <img src={brand.img} className="w-[100%] h-[100%] object-contain" alt={`Brand ${index + 1}`} />
              </div>
            ))}
          </div>
         
      
        
          


      <div
          className="absolute bottom-0 left-0 w-full h-[80px] bg-gray-100"
          style={{
            clipPath: 'polygon(0 100%, 100% 110%, 100% 10%)',
          }}
        ></div>

    </div>
  );
};

export default Brands;
