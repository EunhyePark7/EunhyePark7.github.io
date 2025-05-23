import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import jsconfigPaths from 'vite-jsconfig-paths';

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  resolve: {
    alias: [{ find: '@/', replacement: path.resolve(__dirname, './src/') }],
  },
  base: '/',
});
