import { Code2, Lightbulb, MonitorPlay } from 'lucide-react';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description:
      'Building responsive and scalable web applications using modern frameworks like React and Node.js.',
    color: 'bg-blue-500',
    image: '/assets/web dev.png',
  },
  {
    icon: MonitorPlay,
    title: 'Web Development Training',
    description:
      'Providing MERN and Django tutoring, YouTube lessons, and professional training at G-TECH',
    color: 'bg-purple-500',
    image: '/assets/training.png',
  },
  {
    icon: Lightbulb,
    title: 'Graphic Design',
    description:
      'Creating visually compelling graphics, logos, and branding materials to elevate your business presence.',
    color: 'bg-yellow-500',
    image: '/assets/graphic design.png',
  },
];

export function Services() {
  return (
    <SectionBackground>
      <section id="services">
        <div className="container mx-auto max-w-6xl px-6 sm:px-8 mt-16">
          <SectionTitle subtitle="What I Offering to my clients">
            Services
          </SectionTitle>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-8">
            {services.map(
              ({ icon: Icon, title, description, color, image }) => (
                <div key={title} className="relative group">
                  {/* Background Effect */}
                  <div
                    className={`absolute inset-0 ${color} rounded-xl blur-xl opacity-20 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none`}
                  />
                  {/* Card Content */}
                  <div className="relative bg-white dark:bg-gray-900 p-0 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-1 overflow-hidden">
                    {image && (
                      <div className="relative overflow-hidden p-4 pb-0">
                        <img
                          src={image}
                          alt={title}
                          className="w-full aaspect-square object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      <div className="flex items-center mb-4 space-x-4">
                        {/* Icon */}
                        <div
                          className={`p-3 ${color} rounded-lg flex items-center gap-1`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
                          {title}
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </SectionBackground>
  );
}
