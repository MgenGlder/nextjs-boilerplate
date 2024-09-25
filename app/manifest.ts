import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'P2 Solar Mini-Grid: Design Optimization',
    short_name: 'Solar Mini-Grid',
    description: 'Solar Mini-Grid: Design Optimization',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}