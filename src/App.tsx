import React from 'react';
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
