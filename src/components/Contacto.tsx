import React from 'react';

const Contacto: React.FC = () => {
  return (
    <section id="contacto" className="py-16 px-5 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-4">Contacto</h2>
      <p className="text-lg mb-8">¿Tienes alguna noticia, sugerencia o quieres colaborar? ¡Contáctanos!</p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <a href="mailto:xavoblackverse@gmail.com" className="inline-block bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors text-lg">xavoblackverse@gmail.com</a>
        <a href="https://www.instagram.com/noticiasdemiercoles" target="_blank" rel="noopener noreferrer" className="inline-block bg-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 transition-colors text-lg">@noticiasdemiercoles</a>
      </div>
    </section>
  );
};

export default Contacto;
