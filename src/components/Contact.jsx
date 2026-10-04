import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { t, lang } = useLanguage();

  const handleSubmit = () => {
    if (typeof window !== 'undefined') {
      if (window.fbq) {
        window.fbq('track', 'Lead');
      }
      if (window.gtag) {
        window.gtag('event', 'generate_lead', { event_category: 'contact_form' });
      }
    }
  };

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="container contact-grid">
        <div className="contact-info reveal">
          <span className="eyebrow">{t('contact.eyebrow')}</span>
          <h2>{t('contact.title')}</h2>
          <p>{t('contact.desc')}</p>
          <div className="contact-list">
            <a href="tel:0964489447">📞 096 448 94 47</a>
            <a href="mailto:organicsliora@gmail.com">✉️ organicsliora@gmail.com</a>
            <a href="https://zalo.me/0964489447" target="_blank" rel="noopener noreferrer">
              💬 Zalo Liora
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61576606656783"
              target="_blank"
              rel="noopener noreferrer"
            >
              📘 Facebook
            </a>
            <span>{t('contact.addr')}</span>
          </div>
        </div>

        <form
          className="contact-form reveal"
          id="contactForm"
          action="https://formspree.io/f/FORM_ID_CUA_BAN"
          method="POST"
          onSubmit={handleSubmit}
        >
          <label>
            <span>{t('form.name')}</span>
            <input
              name="name"
              type="text"
              required
              placeholder={lang === 'vi' ? 'Nguyễn Văn A' : 'John Doe'}
            />
          </label>
          <label>
            <span>{t('form.phone')}</span>
            <input
              name="phone"
              type="tel"
              required
              placeholder={lang === 'vi' ? '09xx xxx xxx' : '+1 234 567 890'}
            />
          </label>
          <label>
            <span>{t('form.need')}</span>
            <select name="need">
              {lang === 'vi' ? (
                <>
                  <option>Mua lẻ</option>
                  <option>Bán sỉ / đại lý</option>
                  <option>Nhà hàng / quán ăn</option>
                  <option>OEM / gia công</option>
                </>
              ) : (
                <>
                  <option>Retail</option>
                  <option>Wholesale / Distributor</option>
                  <option>Restaurant / Café</option>
                  <option>OEM / Manufacturing</option>
                </>
              )}
            </select>
          </label>
          <label>
            <span>{t('form.message')}</span>
            <textarea
              name="message"
              rows={4}
              placeholder={lang === 'vi' ? 'Tôi muốn được tư vấn...' : 'I would like consultation...'}
            ></textarea>
          </label>
          <button className="btn primary" type="submit">
            {t('form.submit')}
          </button>
          <small>{t('form.note')}</small>
        </form>
      </div>
    </section>
  );
}
