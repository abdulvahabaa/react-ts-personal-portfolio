import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Getting Started with Full Stack Java Development",
    issuer: "Simplilearn",
    date: "Jun 2025",
    link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxOTEwIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODQ3MTQ4M184ODMzNDA4MTc1MDAwMTY5MTg2MC5wbmciLCJ1c2VybmFtZSI6Ik0uIERpbmVzaCJ9&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F4495%2FGetting%2520Started%2520with%2520Full%2520Stack%2520Java%2520Development%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1469300024069529568&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVd891No4KKK%2FyCE2yrytKTUstKsrMS49PKsovL04tsnXOKMrPTQUAr5jf8D8AAAA%3D",
    image:
      "https://certificates.simplicdn.net/share/8471483_88334081750001691860.png",
  },
  {
    title: "GitHub Foundations",
    issuer: "GitHub",
    date: "May 2025",
    link: "https://www.linkedin.com/learning/certificates/5ff7a51b5ab179d785d5deb67abb6ab3e3ec09664736b2aab1d1e31630a388d9?trk=share_certificate",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQE2e8a3Kznbuw/profile-treasury-image-shrink_800_800/B56ZcTGb1ZHgAY-/0/1748372144579?e=1755655200&v=beta&t=SfqDvsHdH3OQem_a3GJ05buiBDGbTu4e02KnH8RvyJQ",
  },
  {
    title: "Graphic Design Essentials",
    issuer: "Canva",
    date: "Mar 2025",
    link: "https://www.linkedin.com/learning/certificates/5ff7a51b5ab179d785d5deb67abb6ab3e3ec09664736b2aab1d1e31630a388d9?trk=share_certificate",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQFnRdrQley2rg/profile-treasury-image-shrink_800_800/B56ZWP2NiMHoAg-/0/1741875109160?e=1755705600&v=beta&t=tM8XcwcztFE4ViqdFR3gHBh91fi-SfJn8muRnjcF_ss",
  },
  {
    title: "Generative AI",
    issuer: "Microsoft & LinkedIn",
    date: "Jan 2025",
    link: "https://www.linkedin.com/learning/certificates/5ff7a51b5ab179d785d5deb67abb6ab3e3ec09664736b2aab1d1e31630a388d9?trk=share_certificate",
    image:
      "https://media.licdn.com/dms/image/v2/D5622AQH6bnbJ7kuODw/feedshare-shrink_1280/B56ZfQRkXmHUAo-/0/1751545956073?e=1757548800&v=beta&t=SyDrRF7lmUaPsRNCPg-aR-8tZJ-hgK2aEbhdh1SdiUg",
  },
  {
    title: "Data Science & Analytics",
    issuer: "HP Foundation",
    date: "Jun 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/7CVTB2GB5XPT",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQFAhuZkNpMhAA/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1737886955171?e=1755705600&v=beta&t=YQfMzBMYJgv1GcBl7UCsLCUdzkFv1LiQSwcsMKI4mFk",
  },
  {
    title: "From Excel to Power BI",
    issuer: "Coursera with Knowledge Accelerators",
    date: "Jun 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/7CVTB2GB5XPT",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~7CVTB2GB5XPT/CERTIFICATE_LANDING_PAGE~7CVTB2GB5XPT.jpeg",
  },
  {
    title: "Learn to code with AI",
    issuer: "Coursera with Scrimba",
    date: "Jun 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/YXGD3SSRF892",
    image:
      "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~YXGD3SSRF892/CERTIFICATE_LANDING_PAGE~YXGD3SSRF892.jpeg",
  },
  {
    title: "TCS iON Career Edge - Young Professional",
    issuer: "TCS iON",
    date: "May 2024",
    link: "https://www.coursera.org/account/accomplishments/verify/YXGD3SSRF892",
    image:
      "https://media.licdn.com/dms/image/v2/D562DAQHt2uofVD994Q/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1737889449669?e=1755709200&v=beta&t=bpNz3W6_JdbqgByQtc9JjIhTz8znltkCJtc0FZPBXSI",
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
            {certifications.map((cert) => (
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
