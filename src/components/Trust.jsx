import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Trust() {
  const { t } = useLanguage();

  const trustItems = [
    { icon: '🖐️', titleKey: 'trust.items.0.t', descKey: 'trust.items.0.d' },
    { icon: '🌱', titleKey: 'trust.items.1.t', descKey: 'trust.items.1.d' },
    { icon: '👶', titleKey: 'trust.items.2.t', descKey: 'trust.items.2.d' },
    { icon: '🏭', titleKey: 'trust.items.3.t', descKey: 'trust.items.3.d' },
  ];

  return (
    <section id="trust" className="section-pad soft-bg">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t('trust.eyebrow')}</span>
          <h2>{t('trust.title')}</h2>
          <p>{t('trust.desc')}</p>
        </div>
        <div className="trust-grid">
          {trustItems.map((item, index) => (
            <article key={index} className="trust-card reveal">
              <span>{item.icon}</span>
              <h3>{t(item.titleKey)}</h3>
              <p>{t(item.descKey)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
