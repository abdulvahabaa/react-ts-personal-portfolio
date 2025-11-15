import { useEffect, useState } from "react";

const HASHNODE_API = "https://gql.hashnode.com/";
const USERNAME = "deepakmodi"; // Hashnode username

interface Blog {
  title: string;
  brief: string;
  coverImage: string | null;
  slug: string;
}

export function useBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `
        {
          user(username: "${USERNAME}") {
            publications(first: 1) {
              edges {
                node {
                  posts(first: 6) {
                    edges {
                      node {
                        title
                        brief
                        coverImage {
                          url
                        }
                        slug
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `;

      try {
        const response = await fetch(HASHNODE_API, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query }),
        });

        const data = await response.json();
        // console.log("Hashnode API Response:", data); // Debugging Line

        if (data?.data?.user?.publications?.edges?.length > 0) {
          // Extract posts from the first publication
          const posts = data.data.user.publications.edges[0].node.posts.edges;

          const formattedBlogs = posts.map((post: any) => ({
            title: post.node.title,
            brief: post.node.brief,
            coverImage: post.node.coverImage ? post.node.coverImage.url : null, // Use cover image URL
            slug: post.node.slug,
          }));

          setBlogs(formattedBlogs);
        } else {
          console.error("No blogs found in API response");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading };
}
