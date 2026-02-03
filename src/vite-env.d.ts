/// <reference types="vite/client" />

declare module '@vercel/analytics/react' {
  export const Analytics: (props?: Record<string, unknown>) => null;
}
