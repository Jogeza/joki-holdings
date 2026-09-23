import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Keep the application entry in src/ and serve the shared brand imagery
// directly from assets/ without copying it into the component tree.
export default defineConfig({
  root: 'src',
  publicDir: '../assets',
  build: { outDir: '../dist', emptyOutDir: true },
  server: { port: 5173 },
  preview: { port: 4173 },
  plugins: [react()],
});
