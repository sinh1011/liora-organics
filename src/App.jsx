import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import PromoBar from './components/PromoBar';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import PromoPopup from './components/PromoPopup';
import './styles.css';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <PromoBar />
        <Header />
        <Home />
        <Footer />
        <FloatingActions />
        <PromoPopup />
      </LanguageProvider>
    </ThemeProvider>
  );
}
