import React from 'react';
import Slider from 'react-slick';
import InfluencerCard from '../cards/InfluencerCard'; // Adjust path if needed

// Import slick-carousel styles
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// 1. Updated Data Structure: This now matches the needs of the new card design.
const influencersData = [
  {
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop',
    name: 'Manshu',
    role: 'Product Designer',
    company: 'Codica',
    socials: [
      { name: 'Dribbble', href: '#', color: 'bg-pink-500' },
      { name: 'Website', href: '#', color: 'bg-gray-600' }
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop',
    name: 'Spiktee',
    role: 'Lead Developer',
    company: 'Embrace',
    socials: [
      { name: 'LinkedIn', href: '#', color: 'bg-blue-600' },
      { name: 'Twitter', href: '#', color: 'bg-sky-500' }
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop',
    name: 'Pertig Maieh',
    role: 'UX Researcher',
    company: 'Harmes',
    socials: [
      { name: 'Website', href: '#', color: 'bg-teal-500' },
      { name: 'LinkedIn', href: '#', color: 'bg-blue-600' }
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop',
    name: 'Bharu Perfek',
    role: 'Marketing Head',
    company: 'Noarse',
    socials: [
      { name: 'Twitter', href: '#', color: 'bg-sky-500' },
      { name: 'Website', href: '#', color: 'bg-gray-600' }
    ]
  },
  {
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop',
    name: 'Jenna Doe',
    role: 'Content Strategist',
    company: 'Soneetmedia',
    socials: [
      { name: 'LinkedIn', href: '#', color: 'bg-blue-600' },
      { name: 'Twitter', href: '#', color: 'bg-sky-500' }
    ]
  }
];

const InfluencersSection = () => {
  // The slider settings remain the same for the moving motion
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    // Section background is transparent to inherit parent color
    <section className="py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Star Influencers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mt-2"></div>
        </div>
        
        <Slider {...settings}>
          {influencersData.map((influencer, index) => (
            <InfluencerCard
              key={index}
              image={influencer.image}
              name={influencer.name}
              role={influencer.role}
              company={influencer.company}
              socials={influencer.socials}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default InfluencersSection;