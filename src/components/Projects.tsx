import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { ProjectCard } from './ui/ProjectCard';
import { projects } from '../data';

export function Projects() {
  return (
    <SectionBackground>
      <section id="projects">
        <div className="container mx-auto max-w-6xl px-6 sm:px-8">
          <SectionTitle subtitle="Every project, a product. Every product, a solution with a story.">
            Projects
          </SectionTitle>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(project => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
