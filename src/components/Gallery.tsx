import { useState } from 'react';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { GalleryCard } from './ui/GalleryCard';
import { ImageModal } from './ui/ImageModal';
import { galleryData } from '../data/index';

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<{
    image: string;
    title: string;
    description: string;
  } | null>(null);

  const handleView = (image: string, title: string, description: string) => {
    setSelectedImage({ image, title, description });
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <SectionBackground>
      <section id="gallery">
        <div className="container mx-auto max-w-6xl px-6 sm:px-8">
          <SectionTitle subtitle="Memorable moments, awards, class pictures, and life experiences.">
            Gallery
          </SectionTitle>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryData.map((item, index) => (
              <GalleryCard
                key={item.id}
                image={item.image}
                title={item.title}
                description={item.description}
                onView={() =>
                  handleView(item.image, item.title, item.description)
                }
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <ImageModal
            isOpen={!!selectedImage}
            onClose={handleCloseModal}
            image={selectedImage.image}
            title={selectedImage.title}
            description={selectedImage.description}
          />
        )}
      </section>
    </SectionBackground>
  );
}
