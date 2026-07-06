import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    emptyOutDir: false,
    minify: true,
    outDir: 'public',
    lib: {
      entry: 'client/react-ui.jsx',
      name: 'ExamReactUI',
      formats: ['iife'],
      fileName: () => 'react-ui.js'
    }
  }
});
