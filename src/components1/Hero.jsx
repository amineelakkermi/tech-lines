/* eslint-disable no-unused-vars */
import { t } from 'i18next'
import React from 'react'
import styles from '../style'
import { controlImg2 } from '../assets1'

const Hero = () => {
  const title = t("hero.title");
  const words = title.split(' ');

  return (
    <section className="relative min-h-[100vh] w-full bg-gray-100 flex justify-center items-center flex-col gap-5 py-[150px] overflow-hidden">


      {/* Cercles en arrière-plan */}
      <div className="absolute top-[20%] left-[2%] md:flex hidden flex-col gap-4 z-10 ">
        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 justify-center">
            {[...Array(3)].map((_, colIndex) => (
              <span key={colIndex} className="w-3 h-3 opacity-30 bg-slate-400 rounded-full inline-flex"></span>
            ))}
          </div>
        ))}
      </div>

      <div className="absolute bottom-[35%] right-[2%] md:flex hidden flex-col gap-4 z-10">
        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 justify-center">
            {[...Array(3)].map((_, colIndex) => (
              <span key={colIndex} className="w-3 h-3 opacity-30 bg-slate-400 rounded-full inline-flex"></span>
            ))}
          </div>
        ))}
      </div>

      {/* Contenu principal (titre, texte, image) avec z-index pour être devant */}
      <div className="flex flex-col gap-5 items-center text-center z-20">
        <h1 className={`${styles.title} font-semibold max-w-[900px] text-blue`}>
          <span className="text-blue1">{words.slice(0, 2).join(' ')}</span> <br /> {words.slice(2).join(' ')}
        </h1>
        <p className={`${styles.paragraph} mt-3 max-w-[680px]`}>
          {t("hero.text")}
        </p>

        <img 
          src={controlImg2}
          alt="Hero Image" 
          className="mt-5 max-w-[80%] sm:max-w-[800px] max-h-[450px] rounded-[20px] shadow-lg"
        />
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-[80px] bg-gray-50 z-0"
        style={{
          clipPath: 'polygon(100% 100%, 100% 0, 100% 100%, 0% 100%, 0 0%)',
        }}
      ></div>
      
    </section>
  )
}

export default Hero;
