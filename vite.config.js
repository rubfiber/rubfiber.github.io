import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({babel: {plugins: [['babel-plugin-react-compiler']],},}),],
  server: {
    open: true,
    port: 3001,
  },
  base: "/rubfiber.github.io/",
});
