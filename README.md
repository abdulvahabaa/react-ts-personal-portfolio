# react-ts-personal-portfolio

My personal developer portfolio built with React and TypeScript. Features a component-driven architecture, optimized performance, and modern UI design principles.

## Features

- 🎨 Modern and responsive UI design
- 🌙 Dark mode support
- ⚡ Optimized performance
- 📱 Fully responsive
- 🎯 Component-driven architecture
- 🎬 YouTube videos showcase section

## YouTube Videos Section Setup

The portfolio includes a YouTube videos showcase section that displays 4 specific videos from your channel.

### Setup Instructions

1. **Get YouTube API Key:**
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable "YouTube Data API v3"
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "API Key"
   - Copy your API key

2. **Add API Key to Project:**
   - Create a `.env` file in the project root (if it doesn't exist)
   - Add your API key:
     ```
     VITE_YOUTUBE_API_KEY=your_api_key_here
     ```
   - Restart your development server

3. **Configure Video IDs:**
   - Open `src/hooks/useYouTubeVideos.ts`
   - Update the `SPECIFIC_VIDEO_IDS` array with your 4 video IDs:
     ```typescript
     const SPECIFIC_VIDEO_IDS: string[] = [
       'video_id_1',
       'video_id_2',
       'video_id_3',
       'video_id_4',
     ];
     ```
   - To get video ID: Copy from YouTube URL after `v=` (e.g., `youtube.com/watch?v=VIDEO_ID_HERE`)

### Example

If your video URL is: `https://www.youtube.com/watch?v=xPsRtJd9uSU`

Then your video ID is: `xPsRtJd9uSU`

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons

## License

ISC
