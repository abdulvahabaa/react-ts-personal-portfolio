import React from 'react';
import Slider from 'react-slick';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { CertificationCard } from './ui/CertificationCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const certifications = [
  {
    title: 'Getting Started with Full Stack Java Development',
    issuer: 'Simplilearn',
    date: 'Jun 2025',
    link: '',
    image:
      'https://certificates.simplicdn.net/share/8471483_88334081750001691860.png',
  },
  // {
  //   title: 'From Excel to Power BI',
  //   issuer: 'Coursera with Knowledge Accelerators',
  //   date: 'Jun 2024',
  //   link: 'https://www.coursera.org/account/accomplishments/verify/7CVTB2GB5XPT',
  //   image:
  //     'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7CVTB2GB5XPT/CERTIFICATE_LANDING_PAGE~7CVTB2GB5XPT.jpeg',
  // },
  // {
  //   title: 'Learn to code with AI',
  //   issuer: 'Coursera with Scrimba',
  //   date: 'Jun 2024',
  //   link: 'https://www.coursera.org/account/accomplishments/verify/YXGD3SSRF892',
  //   image:
  //     'https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~YXGD3SSRF892/CERTIFICATE_LANDING_PAGE~YXGD3SSRF892.jpeg',
  // },
  // {
  //   title: 'TCS iON Career Edge - Young Professional',
  //   issuer: 'TCS iON',
  //   date: 'May 2024',
  //   link: 'https://www.coursera.org/account/accomplishments/verify/YXGD3SSRF892',
  //   image:
  //     'https://media.licdn.com/dms/image/v2/D562DAQHt2uofVD994Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1737889449669?e=1755709200&v=beta&t=bpNz3W6_JdbqgByQtc9JjIhTz8znltkCJtc0FZPBXSI',
  // },
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
