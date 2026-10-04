import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Reviews() {
  const { t, lang } = useLanguage();

  const reviews = [
    {
      textKey: 'reviews.items.0',
      author: 'Minh Anh',
      role: lang === 'vi' ? 'Khách gia đình' : 'Family customer',
    },
    {
      textKey: 'reviews.items.1',
      author: 'Hoàng Nam',
      role: lang === 'vi' ? 'Khách dùng thử' : 'Trial customer',
    },
    {
      textKey: 'reviews.items.2',
      author: 'Thanh Trúc',
      role: lang === 'vi' ? 'Mẹ bỉm' : 'Mom',
    },
  ];

  return (
    <section id="reviews" className="section-pad soft-bg">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t('reviews.eyebrow')}</span>
          <h2>{t('reviews.title')}</h2>
        </div>
        <div className="review-grid">
          {reviews.map((rev, index) => (
            <article key={index} className="review reveal">
              <p>{t(rev.textKey)}</p>
              <strong>{rev.author}</strong>
              <span>{rev.role}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
