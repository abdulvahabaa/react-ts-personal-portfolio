import { useEffect } from 'react';

export function StructuredData() {
  useEffect(() => {
    // Person Schema
    const personSchema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Abdul Vahab A A',
      url: 'https://abdulvahabaa.in',
      image: 'https://abdulvahabaa.in/assets/profile.png',
      jobTitle: 'Full Stack Developer & Technical Trainer',
      worksFor: {
        '@type': 'Organization',
        name: 'G-Tec Computer Education',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Irinjalakuda, Thrissur',
        addressRegion: 'Kerala',
        addressCountry: 'IN',
      },
      sameAs: [
        'https://github.com/abdulvahabaa',
        // Add your social media profiles here
        'https://linkedin.com/in/abdulvahabaa',
        // 'https://twitter.com/abdulvahabaa',
      ],
      knowsAbout: [
        'Full Stack Development',
        'MERN Stack',
        'React.js',
        'Node.js',
        'TypeScript',
        'MongoDB',
        'PostgreSQL',
        'Web Development',
        'Software Engineering',
      ],
    };

    // ProfessionalService Schema
    const professionalServiceSchema = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Abdul Vahab A A - Full Stack Development Services',
      description:
        'Full Stack MERN Developer and Technical Trainer specializing in React, Node.js, TypeScript, MongoDB, and PostgreSQL.',
      provider: {
        '@type': 'Person',
        name: 'Abdul Vahab A A',
      },
      areaServed: {
        '@type': 'Country',
        name: 'India',
      },
      serviceType: [
        'Web Development',
        'Full Stack Development',
        'Technical Training',
        'Software Development',
      ],
    };

    // Website Schema
    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Abdul Vahab A A Portfolio',
      url: 'https://abdulvahabaa.in',
      description:
        'Portfolio website of Abdul Vahab A A - Full Stack Developer and Technical Trainer',
      author: {
        '@type': 'Person',
        name: 'Abdul Vahab A A',
      },
    };

    // Remove existing structured data scripts
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"]'
    );
    existingScripts.forEach(script => script.remove());

    // Add Person schema
    const personScript = document.createElement('script');
    personScript.type = 'application/ld+json';
    personScript.text = JSON.stringify(personSchema);
    document.head.appendChild(personScript);

    // Add ProfessionalService schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.text = JSON.stringify(professionalServiceSchema);
    document.head.appendChild(serviceScript);

    // Add Website schema
    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.text = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteScript);

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll(
        'script[type="application/ld+json"]'
      );
      scripts.forEach(script => script.remove());
    };
  }, []);

  return null;
}
