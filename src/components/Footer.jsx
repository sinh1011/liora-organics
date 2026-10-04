import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <strong>Liora Organics</strong>
          <p>{t('footer.desc')}</p>
        </div>
        <div>
          <p>© {currentYear} Liora Organics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
