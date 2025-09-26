import React from 'react';

const Auspiciantes: React.FC = () => {
  return (
    <section id="auspiciantes" className="py-16 px-5 text-center">
      <h2 className="text-3xl font-bold mb-8">Nuestros Auspiciantes</h2>
      <div className="mt-5 flex flex-wrap justify-center items-center gap-x-12 gap-y-8">
        <div className="text-gray-600 font-bold text-2xl filter grayscale hover:grayscale-0 transition">Armborbricks</div>
        <div className="text-gray-600 font-bold text-2xl filter grayscale hover:grayscale-0 transition">Kubox</div>
        <div className="text-gray-600 font-bold text-2xl filter grayscale hover:grayscale-0 transition">Scuf</div>
        <div className="text-gray-600 font-bold text-2xl filter grayscale hover:grayscale-0 transition">EGO</div>
        <div className="text-gray-600 font-bold text-2xl filter grayscale hover:grayscale-0 transition">Comic Con</div>
        <div className="text-gray-600 font-bold text-2xl filter grayscale hover:grayscale-0 transition">Black Cat Productions</div>
      </div>
    </section>
  );
};

export default Auspiciantes;
