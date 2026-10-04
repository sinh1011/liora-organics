import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import aboutImg from '../assets/about.jpg';

export default function Factory() {
  const { t } = useLanguage();

  const checklistItems = [
    'factory.items.0',
    'factory.items.1',
    'factory.items.2',
    'factory.items.3',
  ];

  return (
    <section id="factory" className="section-pad split-section">
      <div className="container split-grid">
        <div className="reveal">
          <img
            className="rounded-img"
            src={aboutImg}
            alt="Liora Organics sản xuất tại Việt Nam"
          />
        </div>
        <div className="split-copy reveal">
          <span className="eyebrow">{t('factory.eyebrow')}</span>
          <h2>{t('factory.title')}</h2>
          <p>{t('factory.desc')}</p>
          <ul className="check-list">
            {checklistItems.map((itemKey, index) => (
              <li key={index}>{t(itemKey)}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
