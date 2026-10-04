import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function ProductCard({ tag, img, alt, title, desc, featured = false }) {
  const { t } = useLanguage();

  return (
    <article className={`product-card ${featured ? 'featured' : ''} reveal`}>
      <div className="tag">{tag}</div>
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <p>{desc}</p>
      <a href="#contact" className="text-link">
        {t('cta.askPrice')}
      </a>
    </article>
  );
}
