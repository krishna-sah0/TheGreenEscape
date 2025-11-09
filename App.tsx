
import React, { useState, useEffect } from 'react';
import { Section } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/sections/Home';
import AboutUs from './components/sections/AboutUs';
import Menu from './components/sections/Menu';
import AmusementZone from './components/sections/AmusementZone';
import Wellness from './components/sections/Wellness';
import Events from './components/sections/Events';
import Gallery from './components/sections/Gallery';
import Booking from './components/sections/Booking';
import ContactUs from './components/sections/ContactUs';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.Home);

  const renderSection = () => {
    switch (activeSection) {
      case Section.Home:
        return <Home setActiveSection={setActiveSection} />;
      case Section.About:
        return <AboutUs />;
      case Section.Menu:
        return <Menu />;
      case Section.Amusement:
        return <AmusementZone />;
      case Section.Wellness:
        return <Wellness />;
      case Section.Events:
        return <Events />;
      case Section.Gallery:
        return <Gallery />;
      case Section.Booking:
        return <Booking />;
      case Section.Contact:
        return <ContactUs />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  return (
    <div className="bg-cream min-h-screen font-lora text-brown-800">
      <Header activeSection={activeSection} onNavigate={setActiveSection} />
      <main>
        {renderSection()}
      </main>
      <Footer onNavigate={setActiveSection} />
    </div>
  );
};

export default App;
