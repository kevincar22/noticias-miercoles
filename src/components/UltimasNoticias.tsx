import React from 'react';

const UltimasNoticias: React.FC = () => {
  const taggboxHTML = `<div class="taggbox" style="width:100%;height:100%;overflow:auto;" data-widget-id="302020" data-website="1"></div>`;

  return (
    <section id="ultimas-noticias" className="py-16 px-5 border-b border-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-8">Últimas Noticias</h2>
      <div 
        className="mt-5"
        style={{ height: '500px' }} // Añadimos una altura para que el widget sea visible
        dangerouslySetInnerHTML={{ __html: taggboxHTML }}
      />
    </section>
  );
};

export default UltimasNoticias;
