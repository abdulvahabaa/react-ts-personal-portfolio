import React from 'react';
import Slider from 'react-slick';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { CertificationCard } from './ui/CertificationCard';
import { certifications } from '../data';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,

    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <SectionBackground>
      <section id="certifications">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Some courses I actually completed instead of just bookmarking them - fancy certificates!">
            Certifications
          </SectionTitle>
          <Slider {...settings} className="max-w-6xl mx-auto">
            {certifications.map(cert => (
              <div key={cert.title} className="px-4">
                <CertificationCard {...cert} />
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </SectionBackground>
  );
}
