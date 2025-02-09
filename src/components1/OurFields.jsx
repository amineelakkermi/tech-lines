import React from "react";
import { fields } from "../constants/data1";
import styles, { layout } from "../style";
import { t } from "i18next";
import LineTitle from "./LineTitle";
import CurrentLanguage1 from "./CurrentLanguage1";
import Button from "./Button";
import { Link } from "react-router-dom";

const OurFields = ({ numberOfFields, showButton = true, showClipPath = true, showTitle = true }) => {
  const currentLanguage = CurrentLanguage1();

  return (
    <section className={`min-h-[100vh] bg-white relative ${styles.paddingX} py-[100px] flex flex-col gap-12`}>
      {/* Affichage dynamique du titre si showTitle est true */}
      {showTitle && (
        <div className="w-full flex flex-col gap-4 justify-center items-center">
          <div className="title-with-line">
            <h1 className={`${styles.title} text-blue1`}>
              {t("fields.title")}
            </h1>
            <LineTitle direction="ltr"/>
          </div>
        </div>
      )}

      {/* Affichage dynamique des éléments en fonction de numberOfFields */}
      {fields.slice(0, numberOfFields).map((item, index) => {
        return index % 2 === 0 ? (  
          <div key={index} className={`${layout.section}`}>
            <div className={`${layout.sectionInfo}`}>
              <h2 className={`md:text-[55px] text-[45px] text-blue1 leading-[74.8px] w-full md:mt-10 mt-5 font-[600]`}>
                {currentLanguage === "ar" ? item.titleAr : item.titleEn}
              </h2>
              <p className={`${styles.paragraph} mt-5`}>
                {currentLanguage === "ar" ? item.textAr1 : item.textEn1}
              </p>
              <p className={`${styles.paragraph} mt-5`}>
                {currentLanguage === "ar" ? item.textAr2 : item.textEn2}
              </p>
              <p className={`${styles.paragraph} mt-5`}>
                {currentLanguage === "ar" ? item.textAr3 : item.textEn3}
              </p>
              <p className={`${styles.paragraph} mt-5`}>
                {currentLanguage === "ar" ? item.textAr4 : item.textEn4}
              </p>
            </div>
            <div className={`${layout.sectionImg}`}>
              <img 
                className="rounded-[20px] w-[90%] md:w-[75%] h-auto object-contain" 
                src={item.img} 
                alt={item.titleEn || item.titleAr} 
              />
            </div>
          </div>
        ) : (  
          <div key={index} className={`${layout.sectionReverse}`}>
            <div className={`${layout.sectionImgReverse}`}>
              <img 
                className="rounded-[20px] w-[90%] md:w-[75%] h-auto object-contain" 
                src={item.img} 
                alt={item.titleEn || item.titleAr} 
              />
            </div>
            <div className={`${layout.sectionInfo}`}>
              <h2 className={`md:text-[55px] text-[45px] text-blue1 leading-[74.8px] w-full md:mt-10 mt-5 font-[600]`}>
                {currentLanguage === "ar" ? item.titleAr : item.titleEn}
              </h2>
              <p className={`${styles.paragraph} mt-5`}>
                {currentLanguage === "ar" ? item.textAr1 : item.textEn1}
              </p>
              <p className={`${styles.paragraph} mt-5`}>
                {currentLanguage === "ar" ? item.textAr2 : item.textEn2}
              </p>
              <p className={`${styles.paragraph} mt-5`}>
                {currentLanguage === "ar" ? item.textAr3 : item.textEn3}
              </p>
              <p className={`${styles.paragraph} mt-5`}>
                {currentLanguage === "ar" ? item.textAr4 : item.textEn4}
              </p>
            </div>
          </div>
        );
      })}

      {/* Bouton affiché uniquement si showButton est true */}
      {showButton && (
        <Button url="/fields" mb="mb-12" textAr="المزيد" textEn="More" />
      )}

      {/* Coupure clipPath affichée uniquement si showClipPath est true */}
      {showClipPath && (
        <div
          className="absolute bottom-0 left-0 w-full h-[80px] bg-[#2E2E72]"
          style={{
            clipPath: 'polygon(0 100%, 100% 110%, 100% 10%)',
          }}
        ></div>
      )}
    </section>
  );
};

export default OurFields;
