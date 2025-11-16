import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const achievements = [
  {
    title: "Winner - Innovtex Hackathon 2025",
    issuer: "Rajalakshmi Institute of Technology",
    date: "Aug 2025",
    link: "https://media.licdn.com/dms/image/v2/D562DAQEf81JThuVz8w/profile-treasury-image-shrink_800_800/B56ZaO2ydUGUAg-/0/1746153450532?e=1755540000&v=beta&t=jGwwUEGOsKNuAFJuX3XZknQqTAmLA3IiGog-xqK6gNM",
    image: "assets/hackathon.jpeg",
  },
  {
    title: "1st Runner up - Nakshatra'24 Paper Presentation",
    issuer: "S. A. Engineering College",
    date: "Oct 2024",
    link: "#",
    image: "assets/2nd event.jpg",
  },
  {
    title: "2nd Runner up - ELITEZ'24 Idea Pitching",
    issuer: "Adhi College of Engineering and Technology",
    date: "Sept 2024",
    link: "#",
    image: "assets/3rd.jpg",
  },
  {
    title: "Winner - AURORA'24 Paper Presentation",
    issuer: "Saveetha Engineering College",
    date: "Jul 2024",
    link: "#",
    image: "assets/4th.jpg",
  },
  {
    title: "Winner - SAURUS'24 Idea Pitching",
    issuer: "Sri Sairam Engineering College",
    date: "Apr 2024",
    link: "#",
    image: "assets/5th.jpg",
  },
  {
    title: "1st Runner up - Mech Flarez'24 Paper Presentation",
    issuer: "Jeppiaar Engineering College",
    date: "Mar 2024",
    link: "#",
    image: "assets/6th.jpg",
  },
];

export function Achievements() {
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
      <section id="achievements">
        <div className="container mx-auto px-4 sm:px-6 md:px-8">
          <SectionTitle subtitle="Recognitions and awards for outstanding performance and innovation.">
            Achievements
          </SectionTitle>
          <div className="w-full">
            <Slider {...settings} className="max-w-6xl mx-auto">
              {achievements.map((ach) => (
                <div key={ach.title} className="px-2 sm:px-4">
                  <CertificationCard {...ach} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
