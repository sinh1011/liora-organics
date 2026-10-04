import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function PromoPopup() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const popupSeen = sessionStorage.getItem('lioraPopupSeen');
    if (!popupSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 1800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem('lioraPopupSeen', '1');
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div
      className={`popup ${isOpen ? 'show' : ''}`}
      id="promoPopup"
      role="dialog"
      aria-modal="true"
      aria-label="Khuyến mãi"
      onClick={handleBackdropClick}
    >
      <div className="popup-card">
        <button
          className="popup-close"
          id="popupClose"
          aria-label="Đóng"
          onClick={handleClose}
        >
          ×
        </button>
        <span className="eyebrow">{t('popup.eyebrow')}</span>
        <h3>{t('popup.title')}</h3>
        <p>{t('popup.desc')}</p>
        <a
          className="btn primary"
          href="https://zalo.me/0964489447"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('popup.button')}
        </a>
      </div>
    </div>
  );
}
