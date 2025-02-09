import { FaBuilding, FaHospital, FaGraduationCap, FaHome, FaShoppingCart, FaPlane } from 'react-icons/fa';
import styles from '../style';
import CurrentLanguage1 from './CurrentLanguage1';
import { Swiper, SwiperSlide } from 'swiper/react';  
import 'swiper/css'; 
import 'swiper/css/navigation';  
import 'swiper/css/pagination';  
import { t } from 'i18next';
import { FaTents } from 'react-icons/fa6';
import ClipBlue from './ClipBlue';

const Benificiaire = () => {
  const currentLanguage = CurrentLanguage1(); 

  const benficiaires = [
    { id: 1, textAr: "المساجد والمصليات.", textEn: "Mosques and prayer halls", icon: <FaBuilding className="text-4xl text-white" /> },
    { id: 2, textAr: "صروح التعليم (المدارس والجامعات).", textEn: "Educational institutions: schools and universities", icon: <FaGraduationCap className="text-4xl text-white" /> },
    { id: 3, textAr: "المراكز الطبية والمستشفيات.", textEn: "Medical centers and hospitals", icon: <FaHospital className="text-4xl text-white" /> },
    { id: 4, textAr: "قاعات الاجتماعات والمؤتمرات.", textEn: "Meeting halls and conference venues", icon: <FaHome className="text-4xl text-white" /> },
    { id: 5, textAr: "مخيمات الحج.", textEn: "Hajj camps", icon: <FaTents className="text-4xl text-white" /> },
    { id: 6, textAr: "المراكز والمجمعات التجارية.", textEn: "Commercial centers and complexes", icon: <FaShoppingCart className="text-4xl text-white" /> },
    { id: 7, textAr: "المطارات والملاعب الرياضية.", textEn: "Airports, sports stadiums, and others", icon: <FaPlane className="text-4xl text-white" /> }
  ];

  return (
    <section className="text-center relative min-h-screen flex flex-col justify-center items-center py-16 px-6 bg-gray-100">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <h1 className={`${styles.title} text-center text-blue1`}>{t("beneficiaires.title")}</h1>
      </div>

      <Swiper
      dir='rtl'
        spaceBetween={30}  
        slidesPerView={3}  
        breakpoints={{
          640: { slidesPerView: 2 },  
          1024: { slidesPerView: 3.25 }  
        }}
        loop={true} 
        className="max-w-6xl mx-auto mt-14"
      >
        {benficiaires.map((benficiaire) => (
          <SwiperSlide key={benficiaire.id}>
            <div
              className="group bg-white shadow-lg rounded-xl p-10 w-full max-w-[400px] h-[250px] flex flex-col items-center text-center
              transition-all duration-300 ease-in-out hover:bg-[#2f3067]"
            >
              <div className="flex items-center justify-center bg-blue group-hover:bg-transparent rounded-full p-4 group-hover:bg-blue-600 transition-all duration-300">
                {benficiaire.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-white mt-5 transition-all duration-300">
                {currentLanguage === "ar" ? benficiaire.textAr : benficiaire.textEn}
              </h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <ClipBlue />

    </section>
  );
}

export default Benificiaire;
