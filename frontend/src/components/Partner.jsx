import React from 'react';

const Partner = () => {
  const clients = [
    { img: '/logos/indepth.png', alt: 'InDepth Consulting' },
    { img: '/logos/higher.png', alt: 'Higher Fit' },
    { img: '/logos/sentinal.png', alt: 'Sentinal Consulting' },
    { img: '/logos/national.png', alt: 'National' },
    { img: '/logos/sale.png', alt: 'ForSale' },
    { img: '/logos/del mar.png', alt: 'Del Mar Strategy' },
  ];

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client.img}
              alt={client.alt}
              className="w-full max-w-[120px] h-auto opacity-150 hover:opacity-100 transition-opacity duration-300 mx-auto"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
