import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { EducationCard } from './ui/EducationCard';
import { education } from '../data/index';

export function Education() {
  return (
    <SectionBackground>
      <section id="education">
        <div className="container mx-auto max-w-6xl px-6 sm:px-8">
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
