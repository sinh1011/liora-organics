import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function CtaBox() {
  const { t } = useLanguage();

  return (
    <section className="cta-section section-pad">
      <div className="container cta-box reveal">
        <div>
          <span className="eyebrow">{t('ctaBox.eyebrow')}</span>
          <h2>{t('ctaBox.title')}</h2>
        </div>
        <a className="btn primary" href="#contact">
          {t('ctaBox.button')}
        </a>
      </div>
    </section>
  );
}
