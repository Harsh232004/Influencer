import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const brands = [
  // Using the same expanded list of brands
  { id: 1, img: 'https://cdn.worldvectorlogo.com/logos/icici-prudential-1.svg', alt: 'ICICI Prudential' },
  { id: 2, img: 'https://asset.brandfetch.io/id2ToVb4yP/idu8fF10aM.svg', alt: 'InCred Money' },
  { id: 3, img: 'https://asset.brandfetch.io/idYIna1IIy/idqHuks0ii.svg', alt: 'KlarifyLife' },
  { id: 4, img: 'https://asset.brandfetch.io/idO1a2df5D/id_1M428AM.svg', alt: 'OneScore' },
  { id: 5, img: 'https://asset.brandfetch.io/id5C33T285/id03sJ6oF-.svg', alt: 'Kotak 811' },
  { id: 6, img: 'https://asset.brandfetch.io/idwJ012AAs/idCjHAb4gE.svg', alt: 'Liquid' },
  { id: 7, img: 'https://asset.brandfetch.io/id3k5i2i5g/id356bGL5g.svg', alt: 'Lovely Professional University' },
  { id: 8, img: 'https://asset.brandfetch.io/id4I94sNoZ/idWw972A0m.svg', alt: 'Masters\' Union' },
  { id: 9, img: 'https://asset.brandfetch.io/id2Pmo52v3/idbK1uDk9h.svg', alt: 'Airtel' },
  { id: 10, img: 'https://asset.brandfetch.io/id1pBv2m4p/id1rEa3xKP.svg', alt: 'Meesho' },
  { id: 11, img: 'https://asset.brandfetch.io/id3a-82E7A/id_yFf3a0T.svg', alt: 'MobiKwik' },
  { id: 12, img: 'https://asset.brandfetch.io/idT5jok_3z/id5Y_Y5M8G.svg', alt: 'Newton School' },
];

const BrandsSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8, // Increased to show more logos at once
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000, // Speed of the scroll animation
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false, // Hiding arrows for a seamless look
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } }
    ]
  };

  return (
    // Removed `bg-white` to restore your original background
    <section className="py-16 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-16">
          Trusted by leading brands worldwide
        </h2>
        
        <Slider {...settings}>
          {brands.map((brand) => (
            <div key={brand.id} className="px-4">
              <div className="flex items-center justify-center h-12">
                <img
                  className="max-h-full w-auto object-contain filter grayscale"
                  src={brand.img}
                  alt={brand.alt}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </Slider>
        
      </div>
    </section>
  );
};

export default BrandsSection;