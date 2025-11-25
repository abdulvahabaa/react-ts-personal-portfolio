interface BlogCardProps {
  title: string;
  brief: string;
  coverImage: string | null;
  slug: string;
  publishedAt: string;
}

export function BlogCard({
  title,
  brief,
  coverImage,
  slug,
  publishedAt,
}: BlogCardProps) {
  return (
    <a
      href={`https://deepakmodi.hashnode.dev/${slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg shadow border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 bg-white dark:bg-gray-900 hover:shadow-md transition"
    >
      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/3 p-3 overflow-hidden rounded-lg flex-shrink-0">
          {coverImage ? (
            <img
              src={coverImage}
              alt={title}
              className="w-full h-48 object-cover rounded-lg"
            />
          ) : (
            <div className="w-full h-40 bg-white dark:bg-gray-900 flex items-center justify-center rounded-lg">
              <span className="text-gray-500 dark:text-gray-400 text-sm">
                No Image Available
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col justify-between lg:w-2/3">
          <div>
            <h3 className="lg:text-xl text-lg font-semibold text-gray-900 dark:text-white leading-snug line-clamp-2">
              {title}
            </h3>
            <p className="mt-2 lg:text-base text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-4">
              {brief}
            </p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <span className="lg:text-base text-sm text-gray-500 dark:text-gray-400">
              Published: {new Date(publishedAt).toLocaleDateString()}
            </span>
            <span className="inline-block lg:text-base text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline">
              Read More →
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}
