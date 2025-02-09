/* eslint-disable no-unused-vars */

import React from 'react';
import { useTranslation } from 'react-i18next';

const CurrentLanguage1 = () => {
  const { i18n } = useTranslation();
  return i18n.language; // Retourne la langue actuelle
};

export default CurrentLanguage1
