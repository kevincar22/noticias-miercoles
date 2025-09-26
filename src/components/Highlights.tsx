import React from 'react';
import { InstagramEmbed } from 'react-social-media-embed';
import ClientOnly from './ClientOnly';

const Highlights: React.FC = () => {
  // Aquí puedes poner las URLs de tus Reels destacados
  const highlightUrls = [
    'https://www.instagram.com/reel/C-Yt9g-J3g-/', // Ejemplo 1
    'https://www.instagram.com/reel/C-a_bC-J1d-/', // Ejemplo 2
  ];

  return (
    <section id="highlights" className="py-16 px-5 border-b border-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-8">Highlights</h2>
      <div className="mt-5 flex flex-wrap justify-center gap-8">
        {highlightUrls.map((url, index) => (
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

export default Highlights;
