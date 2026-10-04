import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import heroImg from '../assets/hero.jpg';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero section-pad">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <span className="eyebrow">{t('hero.eyebrow')}</span>
          <h1 dangerouslySetInnerHTML={{ __html: t('hero.title') }} />
          <p>{t('hero.lead')}</p>
          <div className="hero-actions">
            <a className="btn primary" href="#contact">
              {t('cta.consult')}
            </a>
            <a className="btn secondary" href="#products">
              {t('cta.viewProducts')}
            </a>
          </div>
          <div className="proof-row">
            <div>
              <strong>3X</strong>
              <small>{t('proof.concentrated')}</small>
            </div>
            <div>
              <strong>0%</strong>
              <small>{t('proof.harsh')}</small>
            </div>
            <div>
              <strong>VN</strong>
              <small>{t('proof.factory')}</small>
            </div>
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="blob"></div>
          <img src={heroImg} alt="Sản phẩm Liora Organics" />
          <div className="floating-card">
            <strong>{t('hero.floatTitle')}</strong>
            <span>{t('hero.floatDesc')}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
