import { useYouTubeVideos } from '../hooks/useYouTubeVideos';
import { YouTubeCard } from './ui/YouTubeCard';
import { SectionTitle } from './ui/SectionTitle';
import { SectionBackground } from './ui/SectionBackground';
import { AlertCircle } from 'lucide-react';

export function YouTubeVideos() {
  const { videos, loading, error } = useYouTubeVideos();

  return (
    <SectionBackground>
      <section id="youtube-videos">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Check out my latest tech tutorials and vlogs! Learn something new with each video.">
            YouTube Videos
          </SectionTitle>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
              <p className="ml-4 text-gray-500 dark:text-gray-400">
                Loading videos...
              </p>
            </div>
          ) : error ? (
            <div className="max-w-2xl mx-auto bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-6 h-6 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">
                    Unable to Load Videos
                  </h3>
                  <p className="text-sm text-yellow-700 dark:text-yellow-400 mb-4">
                    {error}
                  </p>
                  <a
                    href="https://www.youtube.com/@eldoradotechie"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                  >
                    Visit My YouTube Channel
                  </a>
                </div>
              </div>
            </div>
          ) : videos.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                No videos found. Please check your configuration.
              </p>
              <a
                href="https://www.youtube.com/@eldoradotechie"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Visit My YouTube Channel
              </a>
            </div>
          ) : (
            <>
              <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map(video => (
                  <YouTubeCard key={video.id} {...video} />
                ))}
              </div>

              {/* "View More Videos" Button */}
              <div className="mt-10 text-center">
                <a
                  href="https://www.youtube.com/@eldoradotechie"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105"
                >
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  View More Videos →
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </SectionBackground>
  );
}

