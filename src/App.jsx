import './App.css'
import { useTranslation } from 'react-i18next';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components1/Navbar';
import Footer from './components1/Footer';
import { ScrollToTop } from './components1';
import { About, Contact, Exellence, Fields, Home, Strategy, WorksPage } from './pages';


const App = () => {

 
  const { i18n } = useTranslation(); 
  const currentLanguage = i18n.language;

  return (
   <div dir={currentLanguage === 'ar' ? 'rtl' : 'ltr'} className={currentLanguage === "ar" ? "font-cairo" : "font-poppins"}>
   <Navbar />
   {/*  <div className='gradient-circle z-[998]' /> */}
   <ScrollToTop />
   <Routes>
    
    <Route path='/' element={<Home />} />
    <Route path='/works' element={<WorksPage />} />

    <Route path='/about' element={<About />} />
    <Route path='/strategy' element={<Strategy />} />
    <Route path='/exellence' element={<Exellence />} />
    <Route path='/fields' element={<Fields />} />
    <Route path="/contact" element={<Contact />} />





    <Route path='*' element={<Home />} />
    
   </Routes>
   <Footer /> 
 
   </div>
  )
}

export default App