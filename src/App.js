import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import StatsAndPartners from './components/StatsAndPartners/StatsAndPartners';
import FeaturesSection from './components/FeaturesSection/FeaturesSection';
import ContactFormSection from './components/ContactFormSection/ContactFormSection';
import MapSection from './components/MapSection/MapSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <HeroSection />
        <StatsAndPartners />
        <FeaturesSection />
        <ContactFormSection />
        <MapSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
