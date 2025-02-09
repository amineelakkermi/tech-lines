import { FaPencilRuler, FaBuilding, FaTruck, FaLightbulb, FaTools, FaChartLine } from 'react-icons/fa';
import { worksData } from '../constants/data1';
import { t } from 'i18next';
import styles from '../style';
import CurrentLanguage1 from './CurrentLanguage1';

const icons = [
  <FaPencilRuler className="text-4xl text-blue1 group-hover:text-white transition-all duration-300" />, 
  <FaBuilding className="text-4xl text-blue1 group-hover:text-white transition-all duration-300" />, 
  <FaTruck className="text-4xl text-blue1 group-hover:text-white transition-all duration-300" />,
  <FaLightbulb className="text-4xl text-blue1 group-hover:text-white transition-all duration-300" />, 
  <FaTools className="text-4xl text-blue1 group-hover:text-white transition-all duration-300" />, 
  <FaChartLine className="text-4xl text-blue1 group-hover:text-white transition-all duration-300" /> 
];

const Tasks = () => {
  const currentLanguage = CurrentLanguage1();  // Récupérer la langue courante

  return (
    <section className="text-center flex flex-col justify-center items-center py-16 px-6 bg-gray-50">
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <h1 className={`${styles.title} text-center text-blue1`}>{t("tasks.title")}</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
        {worksData.map((work, index) => (
          <div
            key={index}
            className="group bg-white shadow-lg rounded-xl p-10 w-full max-w-[400px] min-h-[250px] flex flex-col items-center text-center
                       transition-all duration-300 ease-in-out hover:bg-[#2f3067]"
          >
            <div className="text-blue1 group-hover:text-white transition-all duration-300">
              {icons[index]}
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-white mt-5 transition-all duration-300">
              {currentLanguage === "ar" ?  work.titleAr : work.titleEn}
            </h3>
            <p className="text-gray-700 mt-3 group-hover:text-white transition-all duration-300">
            {currentLanguage === "ar" ?  work.textAr1 : work.textEn1}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Tasks;
