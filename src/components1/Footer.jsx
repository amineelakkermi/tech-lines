/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { techLineWhite } from '../assets1';
import { navItems } from '../constants/data';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { style } from 'framer-motion/client';
import styles from '../style';

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const currentYear = new Date().getFullYear(); // Current year

  return (
    <footer className="w-full bg-[#2E2E72] text-white py-10 md:px-16 px-6">
      <div className="container mx-auto flex flex-col sm:items-center md:flex-row md:items-start md:justify-between text-center md:text-left">
        
       <div className='flex flex-col gap-3'>
       {/* Logo centered on small screens */}
       <div className="mb-6 md:mb-0 flex justify-center md:justify-start">
          <Link onClick={scrollTop} to='/home'>
            <img src={techLineWhite} alt="logo" className="w-[120px] md:w-[150px]" />
          </Link>
        </div>
        <p className={`text-white mt-5 text-[20px] text-start max-w-[500px]`}>
         {t("footer.description")}
        </p>
       </div>

        {/* Quick Links & Contact */}
        <div className="flex flex-col sm:items-center md:flex-row md:items-start md:gap-16">
          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-[22px] font-semibold mb-3">{t('footer.quickLinks')}</h3> {/* Increased font size */}
            <ul className={`flex flex-col gap-4 md:text-start text-center`}>
              {navItems?.slice(0, -1).map((item, index) => (
                <li key={index}>
                  <Link
                    className={`cursor-pointer ${currentLanguage === "ar" ? "text-[18px]" : "text-[16px]"} text-white duration-300 hover:text-gray-300`}
                    to={item.url}
                    onClick={scrollTop}
                  >
                    {currentLanguage === "ar" ? item.titleAr : item.titleEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
            {/* Contact & Social Media */}
            <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[22px] font-semibold mb-3">{t('footer.contact')}</h3> {/* Increased font size */}
            <div className="flex justify-center md:justify-start gap-5 mt-3">
              <a href="https://www.facebook.com/people/%D8%AE%D8%B7%D9%88%D8%B7-%D8%A7%D9%84%D8%AA%D9%82%D9%86%D9%8A%D8%A7%D8%AA/pfbid02n4FSeWPWwZsfMpDUjmhhrnHsmWCEj8ngTb1zv9ZB1igB2jA5NFsxpoCVV5Sa345Al/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-2xl">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/tech_lines_sa/#" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-2xl">
                <FaInstagram />
              </a>
              <a href="https://x.com/Tech_Lines_sa" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 text-2xl">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Get in touch */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[22px] font-semibold mb-3">{t('footer.touch')}</h3> 
            <div className="flex flex-col justify-center md:justify-start gap-5 mt-3">
              {/* Email */}
              <a href="mailto:Waleed@techlines.sa" className="text-white text-start hover:text-gray-300 text-lg">
              Waleed@techlines.sa
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/+966 56 384 0444" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 text-lg">
                {t("footer.whatsapp")} : <span dir="ltr">+966 56 384 0444</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center border-t border-gray-600 mt-8 pt-4 text-[17px]">
        {t("footer.copyright")} {currentYear}
      </div>
    </footer>
  );
};

export default Footer;
