import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { img104 } from '../assets';
import styles from '../style';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa'; // Import des icônes
import { useTranslation } from 'react-i18next';


const ContactComponent = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    user_email: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState('');
  const formRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear the error message for the current field if it's valid
    if (value) {
      setErrors({
        ...errors,
        [name]: '',
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname) newErrors.firstname = 'This field is required';
    if (!formData.user_email) newErrors.email = 'This field is required';
    if (!formData.message) newErrors.message = 'This field is required'; // Utilisation de "message"
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    emailjs
      .sendForm(
        '', // Remplacez par l'ID de votre service
        '', // Remplacez par l'ID de votre modèle
        formRef.current, // Utilisation du ref
        '' // Remplacez par votre clé publique
      )
      .then(
        (result) => {
          setStatusMessage('Message sent successfully!');
          console.log('Email Sent:', result.text);
        },
        (error) => {
          setStatusMessage('There was an error sending the message. Please try again.');
          console.log('Email Error:', error.text);
        }
      );

    // Réinitialiser le formulaire
    setFormData({
      firstname: '',
      user_email: '',
      message: '', // Réinitialisation du champ message
    });
  };

   const { t, i18n } = useTranslation();
    const currentLanguage = i18n.language;

  return (
    <section dir='ltr' className="flex bg-gray-100 justify-center items-center w-full min-h-[100vh] relative">
      <div dir={`${currentLanguage === "ar" ? "rtl" : "ltr"}`} className="flex  w-full flex-col gap-5 justify-center md:px-16 px-6">
     
      <h1 className={`${styles.title} text-blue text-center`}>
    {currentLanguage === "ar" ? "تواصل معنا" : "Contact us" }
    </h1>
        
        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-8 mt-4">
        <div className="md:w-1/2 w-full">
            <input
              type="name"
              name="user_name"
              value={formData.firstname}
              onChange={handleInputChange}
              placeholder={t('form.name')}
              className="w-full p-2 text-[#999] border-b border-gray-500 bg-transparent focus:outline-none"
            />
            {errors.email && <span className="text-red-500">{errors.firstname}</span>}
          </div>

          <div className="md:w-1/2 w-full">
            <input
              type="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleInputChange}
              placeholder={t('form.email')}
              className="w-full p-2 text-[#999] border-b border-gray-500 bg-transparent focus:outline-none"
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div className="md:w-1/2 w-full">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder={t('form.message')}
              className="w-full p-2 text-[#999] border-b border-gray-500 bg-transparent focus:outline-none"
            ></textarea>
            {errors.message && <span className="text-red-500">{errors.message}</span>}
          </div>

          <div className="md:w-1/2 w-full flex justify-center items-center">
            <button
              type="submit"
              className="cta flex items-center relative mx-auto py-5 px-6 transition-all duration-200 ease-in-out group"
            >
              <span className={`absolute top-0 ${currentLanguage === 'ar' ? 'right-0' : 'left-0'} block w-14 h-14 rounded-full bg-orange transition-all duration-300 ease-in-out group-hover:w-full`}></span>
              <span className="relative text-lg text-black font-bold tracking-widest uppercase leading-5 z-10">{t('form.send')}</span>
            </button>
          </div>
        </form>

        {statusMessage && (
        <div className="flex items-center mt-4 text-[#999]">
          {statusMessage.includes('success') ? (
            <>
              <FaCheckCircle className="text-green-500 mr-2" />
              <p>{statusMessage}</p>
            </>
          ) : (
            <>
              <FaTimesCircle className="text-red-500 mr-2" />
              <p>{statusMessage}</p>
            </>
          )}
        </div>
      )}
      </div>
    </section>
  );
};

export default ContactComponent;
