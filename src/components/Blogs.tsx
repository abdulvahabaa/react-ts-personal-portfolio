import { useBlogs } from "../hooks/useBlogs";
import { BlogCard } from "./ui/BlogCard";
import { SectionTitle } from "./ui/SectionTitle";
import { SectionBackground } from "./ui/SectionBackground";

export function Blogs() {
  const { blogs, loading } = useBlogs();

  return (
    <SectionBackground>
      <section id="blogs">
        <div className="container mx-auto px-8">
          <SectionTitle subtitle="Sharing what I learn, so others can build faster and smarter.">
            Latest Blogs
          </SectionTitle>

          {loading ? (
            <p className="text-center text-gray-500 dark:text-gray-400">
              Loading blogs...
            </p>
          ) : (
            <>
              <div className="max-w-6xl mx-auto grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog) => (
                  <BlogCard key={blog.slug} {...blog} />
                ))}
              </div>

              {/* "See All Blogs" Button */}
              <div className="mt-10 text-center">
                <a
                  href="https://deepakmodi.hashnode.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all"
                >
                  View More Articles →
                </a>
              </div>
            </>
          )}
        </div>
      </section>
    </SectionBackground>
  );
}
