import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProductCard from './ProductCard';
import product100Img from '../assets/product-100.jpg';
import product500Img from '../assets/product-500.jpg';
import product1000Img from '../assets/product-1000.jpg';

export default function Products() {
  const { t } = useLanguage();

  return (
    <section id="products" className="section-pad">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">{t('products.eyebrow')}</span>
          <h2>{t('products.title')}</h2>
          <p>{t('products.desc')}</p>
        </div>
        <div className="product-grid">
          <ProductCard
            tag={t('products.small.tag')}
            img={product100Img}
            alt="Limo Clean 100ml"
            title="Limo Clean 100ml"
            desc={t('products.small.desc')}
          />
          <ProductCard
            tag={t('products.mid.tag')}
            img={product500Img}
            alt="Limo Clean 500ml"
            title="Limo Clean 500ml"
            desc={t('products.mid.desc')}
            featured={true}
          />
          <ProductCard
            tag={t('products.big.tag')}
            img={product1000Img}
            alt="Limo Clean 1000ml"
            title="Limo Clean 1000ml"
            desc={t('products.big.desc')}
          />
        </div>
      </div>
    </section>
  );
}
