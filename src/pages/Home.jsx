/* eslint-disable no-unused-vars */
import { React } from 'react'
import { AboutUs, Brands, Hero, ImgCenter, Numbers, OurFields, Works } from '../components1';
const Home = () => {
  

  return (
  <div>
  <Hero />
  <AboutUs />
  <Numbers />
  <Brands />

  <Works/>
  <OurFields numberOfFields={2} showButton={true} showClipPath={true} />
  {/*


  */}
  </div>
   
  );
};

export default Home;
