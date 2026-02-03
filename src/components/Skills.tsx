import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { SkillCard } from './ui/SkillCard';
import { skills } from '../data';

export function Skills() {
  return (
    <SectionBackground>
      <section id="skills">
        <div className="container mx-auto max-w-6xl px-6 sm:px-8">
          <SectionTitle subtitle="A modern tech stack designed for impact, efficiency, and scale.">
            Skills
          </SectionTitle>

          <div className="max-w-6xl mx-auto grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6">
            {skills.map(tech => (
              <SkillCard
                key={tech.name}
                name={tech.name}
                icon={tech.icon}
                color={tech.color}
                url={tech.url}
              />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
