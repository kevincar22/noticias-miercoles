import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import ClientOnly from './ClientOnly';

const UltimasNoticias: React.FC = () => {
  // Aquí puedes poner las URLs de tus Reels
  const reelUrls = [
    'https://www.instagram.com/p/DPCuVqtCUvh', // Reel de prueba de la cuenta oficial de Instagram
    'https://www.instagram.com/p/DPCuVqtCUvh',
    'https://www.instagram.com/p/DPCuVqtCUvh',
  ];

  return (
    <section id="ultimas-noticias" className="py-16 px-5 border-b border-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-8">Últimas Noticias</h2>
      <div className="mt-5 flex flex-wrap justify-center gap-8">
        {reelUrls.map((url, index) => (
          <ClientOnly key={index}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InstagramEmbed url={url} width={328} />
            </div>
          </ClientOnly>
        ))}
      </div>
    </section>
  );
};

export default UltimasNoticias;
