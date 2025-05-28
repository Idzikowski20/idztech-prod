import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import * as sass from 'sass-embedded';
import compression from 'vite-plugin-compression';

export default defineConfig({
  base: '/', // KLUCZOWE DLA WEBH
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["ed5802a5-ff62-4e35-931f-7618080152a4.lovableproject.com"],
    proxy: {
      '/api': {
        target: process.env.NODE_ENV === 'production'
          ? 'https://idztech.onrender.com'
          : 'http://localhost:10000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
        sassOptions: {
          outputStyle: 'compressed',
        },
      },
    },
    modules: {
      localsConvention: 'camelCaseOnly',
    },
  },
  build: {
    target: 'esnext',
    minify: 'terser',
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'lodash.debounce'],
    exclude: ['@splinetool/react-spline'],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      'lodash.debounce': 'lodash.debounce/index.js'
    },
  },
});
