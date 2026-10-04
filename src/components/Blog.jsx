import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Blog() {
  const { t, lang } = useLanguage();

  const blogPosts = [
    {
      readTime: lang === 'vi' ? '5 phút đọc' : '5 min read',
      titleKey: 'blog.items.0.t',
      descKey: 'blog.items.0.d',
    },
    {
      readTime: lang === 'vi' ? '4 phút đọc' : '4 min read',
      titleKey: 'blog.items.1.t',
      descKey: 'blog.items.1.d',
    },
    {
      readTime: lang === 'vi' ? '6 phút đọc' : '6 min read',
      titleKey: 'blog.items.2.t',
      descKey: 'blog.items.2.d',
    },
  ];

  return (
    <section id="blog" className="section-pad">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t('blog.eyebrow')}</span>
          <h2>{t('blog.title')}</h2>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post, index) => (
            <article key={index} className="blog-card reveal">
              <span>{post.readTime}</span>
              <h3>{t(post.titleKey)}</h3>
              <p>{t(post.descKey)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
