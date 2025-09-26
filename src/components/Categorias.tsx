import React from 'react';

const Categorias: React.FC = () => {
  return (
    <section id="categorias" className="py-16 px-5 border-b border-gray-200 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-8">Categorías</h2>
      <div className="mt-5 flex flex-wrap justify-center gap-4">
        <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold cursor-pointer hover:bg-blue-600 transition-colors">Tecnología</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold cursor-pointer hover:bg-blue-600 transition-colors">Ciencia</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold cursor-pointer hover:bg-blue-600 transition-colors">Deportes</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold cursor-pointer hover:bg-blue-600 transition-colors">Cultura</div>
        <div className="bg-blue-500 text-white px-4 py-2 rounded-full font-bold cursor-pointer hover:bg-blue-600 transition-colors">Internacional</div>
      </div>
    </section>
  );
};

export default Categorias;
