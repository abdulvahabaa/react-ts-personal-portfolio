import { Play, Eye, Calendar } from 'lucide-react';

interface YouTubeCardProps {
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  viewCount?: string;
  url: string;
}

export function YouTubeCard({
  title,
  description,
  thumbnail,
  publishedAt,
  viewCount,
  url,
}: YouTubeCardProps) {
  const formatViewCount = (count?: string) => {
    if (!count) return '';
    const num = parseInt(count);
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M views`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K views`;
    return `${num} views`;
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 bg-white dark:bg-gray-900 hover:shadow-xl hover:shadow-blue-500/20 dark:hover:shadow-blue-400/20 transition-all duration-300 transform hover:-translate-y-1"
    >
      <div className="flex flex-col">
        {/* Thumbnail Section */}
        <div className="relative overflow-hidden rounded-lg flex-shrink-0">
          <div className="relative w-full h-48">
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-red-600/50">
                <Play className="w-8 h-8 text-white ml-1" fill="white" />
              </div>
            </div>
            {/* YouTube Badge */}
            <div className="absolute top-2 right-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold">
              YouTube
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-5 flex flex-col justify-between">
          <div>
            <h3 className="lg:text-xl text-lg font-bold text-gray-900 dark:text-white leading-snug line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="mt-3 lg:text-base text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
              {description || 'Watch this video to learn more about tech tutorials and vlogs!'}
            </p>
          </div>
          
          {/* Metadata */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
              {viewCount && (
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>{formatViewCount(viewCount)}</span>
                </div>
              )}
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(publishedAt)}</span>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 group-hover:gap-2 transition-all">
              Watch Now
              <Play className="w-4 h-4" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

