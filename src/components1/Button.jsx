import React from 'react';
import { Link } from 'react-router-dom';
import CurrentLanguage1 from './CurrentLanguage1';

const Button = ({ textAr , textEn , url , mt = "" , mb = ""}) => {
  const currentLanguage = CurrentLanguage1();
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={`w-full flex justify-center items-center`}>
      <Link onClick={scrollTop} to={url}>
        <button className={`w-[150px] h-[70px] bg-blue1 px-5 py-3 text-[20px] font-bold text-white ${mt}`}>
          {currentLanguage === "ar" ? textAr : textEn}
        </button>
      </Link>
    </div>
  );
};

export default Button;
