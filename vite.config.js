import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isPrroduction = command === 'build';
  return {
    plugins: [react()],
    base: isPrroduction ? "/src/main.jsx" : "/"
  };
});
