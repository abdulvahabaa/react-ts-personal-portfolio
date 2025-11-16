import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';

const education = [
  {
    degree: 'B.Tech in Information Technology',
    institution: 'Sri Sairam Institution of Technology, Chennai',
    period: '2023 - 2027',
    score: '78%',
  },
  {
    degree: 'Senior Secondary (XII)',
    institution: 'St.Mary Matriculation Higher Secondary School',
    period: '2022 - 2023',
    score: '74%',
  },
  {
    degree: 'Secondary (X)',
    institution: 'New Prince Matriculation Higher Secondary School',
    period: '2020 - 2021',
    score: 'NULL',
  },
];

export function Education() {
  return (
    <SectionBackground>
      <section id="education">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="A solid academic foundation fueling my passion for tech innovation.">
            Education
          </SectionTitle>
          <div className="max-w-5xl mx-auto space-y-10">
            {education.map((edu, index) => (
              <EducationCard
                key={edu.degree}
                {...edu}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
