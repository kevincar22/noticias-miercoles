import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import UltimasNoticias from './components/UltimasNoticias';
import Categorias from './components/Categorias';
import SobreNosotros from './components/SobreNosotros';
import Equipo from './components/Equipo';
import Highlights from './components/Highlights';
import Auspiciantes from './components/Auspiciantes';
import Contacto from './components/Contacto';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  useEffect(() => {
    const scriptId = 'instagram-embed-script';
    if (document.getElementById(scriptId)) return; // Evitar duplicados

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = '//www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    // Limpieza opcional al desmontar el componente
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        // No lo removemos para que no se recargue en cada cambio de ruta
      }
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <UltimasNoticias />
        <Highlights />
        <Categorias />
        <SobreNosotros />
        <Equipo />
        <Auspiciantes />
        <Contacto />
      </main>
      <Footer />
    </div>
  );
};

export default App;
