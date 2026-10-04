import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Hero from '../components/Hero';
import Trust from '../components/Trust';
import Products from '../components/Products';
import Factory from '../components/Factory';
import Reviews from '../components/Reviews';
import Blog from '../components/Blog';
import CtaBox from '../components/CtaBox';
import Contact from '../components/Contact';

export default function Home() {
  const { lang } = useLanguage();
  useScrollReveal(lang);

  return (
    <main id="top">
      <Hero />
      <Trust />
      <Products />
      <Factory />
      <Reviews />
      <Blog />
      <CtaBox />
      <Contact />
    </main>
  );
}
