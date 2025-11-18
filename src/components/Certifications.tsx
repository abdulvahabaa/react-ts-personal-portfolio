import React from 'react';
import Slider from 'react-slick';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { CertificationCard } from './ui/CertificationCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const certifications = [
  {
    title: 'Certified Ethical Hacker',
    issuer: 'EC-Council',
    date: 'Nov 2021',
    link: '',
    image:
      '/assets/certificates/CEH.png',
  },
  {
    title: 'MERN Stack Developer',
    issuer: 'Brototype',
    date: 'Aug 2023',
    link: '',
    image:
      '/assets/certificates/CEH.png',
  },
];

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
          <SectionTitle subtitle="Credentials that back up the skills I apply in real-world scenarios.">
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
