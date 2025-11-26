import { useEffect, useState } from 'react';

// YouTube Video Configuration
// Add your 4 specific video IDs here
//
// How to get video ID from YouTube URL:
// Example URL: https://www.youtube.com/watch?v=xPsRtJd9uSU
// Video ID: xPsRtJd9uSU (the part after "v=")
//
// Or from short URL: https://youtu.be/xPsRtJd9uSU
// Video ID: xPsRtJd9uSU (the part after "/")
const SPECIFIC_VIDEO_IDS: string[] = [
  'xPsRtJd9uSU',
  '8EuWk-MxhQ0',
  '_zwY1iYSsLY',
  // 'mpm6d9FdGco',
];

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  publishedAt: string;
  viewCount?: string;
  duration?: string;
  url: string;
}

export function useYouTubeVideos() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideos = async () => {
      // Check if video IDs are provided
      if (!SPECIFIC_VIDEO_IDS || SPECIFIC_VIDEO_IDS.length === 0) {
        setError('Please add video IDs in SPECIFIC_VIDEO_IDS array');
        setLoading(false);
        return;
      }

      try {
        // Method 1: Try to get videos from RSS feed first (if they're recent)
        const rssVideos = await fetchFromRSS();

        if (rssVideos.length === SPECIFIC_VIDEO_IDS.length) {
          // All videos found in RSS feed
          setVideos(rssVideos);
          setLoading(false);
          return;
        }

        // Method 2: Use YouTube oEmbed API (no API key required) for remaining videos
        const allVideos: YouTubeVideo[] = [];

        for (const videoId of SPECIFIC_VIDEO_IDS) {
          // Check if we already have this video from RSS
          const existingVideo = rssVideos.find(v => v.id === videoId);
          if (existingVideo) {
            allVideos.push(existingVideo);
            continue;
          }

          // Fetch from oEmbed API
          try {
            const oEmbedResponse = await fetch(
              `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
            );

            if (oEmbedResponse.ok) {
              const oEmbedData = await oEmbedResponse.json();

              allVideos.push({
                id: videoId,
                title: oEmbedData.title || 'YouTube Video',
                description: oEmbedData.author_name || '',
                thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                publishedAt: new Date().toISOString(), // oEmbed doesn't provide date
                url: `https://www.youtube.com/watch?v=${videoId}`,
              });
            } else {
              // Fallback: Create video object with just ID and thumbnail
              allVideos.push({
                id: videoId,
                title: 'YouTube Video',
                description: '',
                thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                publishedAt: new Date().toISOString(),
                url: `https://www.youtube.com/watch?v=${videoId}`,
              });
            }
          } catch {
            // Fallback: Create video object with just ID and thumbnail
            allVideos.push({
              id: videoId,
              title: 'YouTube Video',
              description: '',
              thumbnail: `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
              publishedAt: new Date().toISOString(),
              url: `https://www.youtube.com/watch?v=${videoId}`,
            });
          }
        }

        setVideos(allVideos);
      } catch (err) {
        console.error('Error fetching YouTube videos:', err);
        setError('Failed to load videos. Please check your video IDs.');
      } finally {
        setLoading(false);
      }
    };

    const fetchFromRSS = async (): Promise<YouTubeVideo[]> => {
      try {
        // Try RSS feed with channel ID
        const rssUrl = `https://www.youtube.com/feeds/videos.xml?channel_id=UC9NIXC1eluK1Q_54J2_CCCA`;
        const proxyUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

        const response = await fetch(proxyUrl);

        if (!response.ok) {
          return [];
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
          // Find videos matching our specific IDs
          const foundVideos: YouTubeVideo[] = [];

          SPECIFIC_VIDEO_IDS.forEach(videoId => {
            const found = data.items.find((item: { link: string }) => {
              const itemVideoId = item.link.split('v=')[1]?.split('&')[0] || '';
              return itemVideoId === videoId;
            });

            if (found) {
              foundVideos.push({
                id: videoId,
                title: found.title || 'YouTube Video',
                description: found.description || found.content || '',
                thumbnail:
                  found.thumbnail ||
                  `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`,
                publishedAt: found.pubDate || new Date().toISOString(),
                url: found.link || `https://www.youtube.com/watch?v=${videoId}`,
              });
            }
          });

          return foundVideos;
        }
      } catch (err) {
        console.error('RSS fetch error:', err);
        // Return empty array on error
      }

      return [];
    };

    fetchVideos();
  }, []);

  return { videos, loading, error };
}
