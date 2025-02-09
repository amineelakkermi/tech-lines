import React from 'react';  
import styles, { layout } from '../style';
import { etoile, experience, standard, vision } from '../assets1';
import LineTitle from './LineTitle';
import { t } from 'i18next';
import CurrentLanguage1 from './CurrentLanguage1';

const Standards = () => {
  const boldTextBeforeColon = (text) => {
    const parts = text.split(':');
    return (
      <>
        <span className="font-bold text-blue text-[22px]">{parts[0]}</span> : {parts.slice(1).join(':')}
      </>
    );
  };
  const currentLanguage = CurrentLanguage1();

  return (
    <div className={`relative flex flex-col gap-12 ${styles.paddingX} py-[100px]`}>
       
      <div className={`w-full flex flex-col justify-center items-center gap-5`}>
        <div className='title-with-line'>
          <h1 className={`${styles.title} text-center text-blue1`}>{t("standards.title")}</h1>
          <LineTitle />
          </div> 
        <p className={`${styles.paragraph} text-blue z-50 font-bold text-[26px] text-center max-w-[750px] mt-5`}>
          {boldTextBeforeColon(t("standards.text1"))}
        </p>
      </div>

      <div className='absolute left-[5%] md:top-[15%] top-[5%]'>
        <img src={etoile} alt="etoile" className='-z-50' />
      </div>

      <div className='absolute right-[5%] md:bottom-[5%] -bottom-0'>
        <img src={etoile} alt="etoile"  className='-z-50' />
      </div>

      <div className="absolute z-10 right-20 top-32 md:flex hidden flex-col gap-4">
        {[...Array(3)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 justify-center">
            {[...Array(4)].map((_, colIndex) => (
              <span key={colIndex} className="w-3 h-3 opacity-35 bg-blue rounded-full inline-flex"></span>
            ))}
          </div>
        ))}
      </div>

      <div className="absolute -z-10 left-28 bottom-36 md:flex hidden flex-col gap-4">
        {[...Array(5)].map((_, rowIndex) => (
          <div key={rowIndex} className="flex gap-4 justify-center">
            {[...Array(3)].map((_, colIndex) => (
              <span key={colIndex} className="w-3 h-3 opacity-70 bg-slate-500 rounded-full inline-flex"></span>
            ))}
          </div>
        ))}
      </div>

      <div className='w-full flex justify-center items-center absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2'> 
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev/svgjs" viewBox="0 0 800 400"><path d="M256.9892272949219,200C266.8458607991536,208.3632024129232,302.2401377360026,251.52330017089844,316.1290283203125,250.17921447753906C330.0179189046224,248.8351287841797,319.2652231852214,212.0967763264974,340.32257080078125,191.93548583984375C361.3799184163411,171.7741953531901,431.7204284667969,128.46475728352866,442.4731140136719,129.2114715576172C453.2257995605469,129.95818583170572,397.3715413411458,179.54002634684244,404.83868408203125,196.415771484375C412.3058268229167,213.29151662190756,466.5173034667969,232.70608520507812,487.2759704589844,230.4659423828125C508.0346374511719,228.22579956054688,532.2282002766927,192.5328598022461,529.3906860351562,182.97491455078125C526.5531717936198,173.4169692993164,480.1075185139974,174.76104482014975,470.2508850097656,173.11827087402344" fill="none" stroke-width="25" stroke="url(&quot;#SvgjsLinearGradient1002&quot;)" stroke-linecap="round" stroke-dasharray="0 125" stroke-opacity="0.13"></path><defs><linearGradient id="SvgjsLinearGradient1002"><stop stop-color="hsl(180, 69%, 40%)" offset="0"></stop><stop stop-color="hsl(180, 69%, 60%)" offset="1"></stop></linearGradient></defs></svg>  
    </div>  

      {/* Grid Section */}
      <div className='w-full relative flex md:flex-row flex-col flex-wrap justify-center items-center gap-8'>
        <div className='flex flex-col justify-between h-full'>
          <p className={`${styles.paragraph}  text-center max-w-[100%] mx-auto mt-5 whitespace-pre-wrap break-words`}>
            {boldTextBeforeColon(t("standards.text2"))}
          </p>
        </div>
        <div className='flex flex-col justify-between h-full'>
          <p className={`${styles.paragraph}  text-center max-w-[100%] mx-auto mt-5 whitespace-pre-wrap break-words`}>
            {boldTextBeforeColon(t("standards.text3"))}
          </p>
        </div>
        <div className='flex flex-col justify-between h-full'>
          <p className={`${styles.paragraph}  text-center max-w-[100%] mx-auto mt-5 whitespace-pre-wrap break-words`}>
            {boldTextBeforeColon(t("standards.text4"))}
          </p>
        </div>
        <div className='flex flex-col justify-between h-full'>
          <p className={`${styles.paragraph}  text-center md:max-w-[80%] max-w-[100%] mx-auto mt-5 whitespace-pre-wrap break-words`}>
            {boldTextBeforeColon(t("standards.text5"))}
          </p>
        </div>
     
      </div>

      <div className={`relative w-full flex justify-center items-center h-auto gap-5 mt-16 z-50`}>
        <div className='w-full z-50 flex justify-center'>
          <img
            src={standard}
            className="md:w-[50%] w-[100%]  rounded-[20px] object-cover"
            alt="About Img"
          />
        </div>
      </div>


      
    </div>
  );
};

export default Standards;
