import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white py-4 text-center sticky top-0 z-50 w-full">
      <h1 className="text-3xl font-bold">Noticias de Miércoles</h1>
      <nav className="mt-4">
        <ul className="flex flex-wrap justify-center space-x-4 md:space-x-6">
          <li><a href="#ultimas-noticias" className="font-bold hover:underline">Noticias</a></li>
          <li><a href="#highlights" className="font-bold hover:underline">Highlights</a></li>
          <li><a href="#sobre-nosotros" className="font-bold hover:underline">Quiénes Somos</a></li>
          <li><a href="#equipo" className="font-bold hover:underline">Equipo</a></li>
          <li><a href="#auspiciantes" className="font-bold hover:underline">Auspiciantes</a></li>
          <li><a href="#contacto" className="font-bold hover:underline">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
