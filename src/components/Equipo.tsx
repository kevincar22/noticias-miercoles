import React from 'react';

const equipo = [
  {
    nombre: 'Xavo',
    rol: 'Guionista, Investigador, Editor, Manager de Redes, Co-productor y Relaciones Públicas',
    img: '/xavo_perfil.png',
  },
  {
    nombre: 'Farú',
    rol: 'Relaciones Comerciales, Productor y Agente Legal',
    img: '', // Sin imagen por ahora
  },
  {
    nombre: 'Romi',
    rol: 'Influencer y Colaboradora Principal',
    img: '/romi_perfil.png',
  },
  {
    nombre: 'Beth',
    rol: 'Influencer y Colaboradora Principal',
    img: '/beth_perfil.png',
  },
];

const Equipo: React.FC = () => {
  return (
    <section id="equipo" className="py-16 px-5 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-8">Nuestro Equipo</h2>
      <div className="w-full overflow-x-auto scrollbar-hide mt-5 pb-4">
        <div className="flex justify-center min-w-max">
          <div className="inline-flex flex-nowrap gap-8 px-4">
            {equipo.map((miembro, index) => (
              <div key={index} className="flex-shrink-0 w-80">
                <div className="bg-white border border-gray-200 rounded-lg shadow-lg w-full overflow-hidden text-center">
                  {miembro.img ? (
                    <img src={miembro.img} alt={`Foto de ${miembro.nombre}`} className="w-full h-80 object-cover object-top" />
                  ) : (
                    <div className="w-full h-80 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Foto no disponible</span>
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800">{miembro.nombre}</h3>
                    <p className="text-gray-600 mt-2 h-24">{miembro.rol}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-700 mb-6">Ayudantes Importantes</h3>
        <div className="max-w-2xl mx-auto text-left space-y-4">
          <div>
            <p className="font-semibold text-gray-800">Andres Zambrano:</p>
            <p className="text-gray-600">Iluminación y técnico de cámara</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Angel:</p>
            <p className="text-gray-600">Asistente de cámara</p>
          </div>
          <div>
            <p className="font-semibold text-gray-800">Pablo:</p>
            <p className="text-gray-600">Técnico de video y luces</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipo;
