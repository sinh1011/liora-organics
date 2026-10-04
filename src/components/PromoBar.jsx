import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function PromoBar() {
  const { t } = useLanguage();

  return (
    <div className="promo-bar">
      {t('promo.bar')}
    </div>
  );
}
