import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'save-video-middleware',
        configureServer(server) {
          server.middlewares.use('/api/save-video', (req, res) => {
            if (req.method === 'POST') {
              const dir = path.resolve(__dirname, 'public/videos');
              if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
              const filePath = path.join(dir, 'parul_suthar_clarity_video.mp4');
              const writeStream = fs.createWriteStream(filePath);
              req.pipe(writeStream);
              writeStream.on('finish', () => {
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: true }));
              });
              writeStream.on('error', (err) => {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: err.message }));
              });
            } else {
              res.writeHead(405);
              res.end();
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
