import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';

export default defineConfig({
    version: "20230709",
    plugins: [react()],
    resolve: {
        alias: {
            '@components': resolve(__dirname, './components'),
            '@': resolve(__dirname, './src'),
            '@routes': resolve(__dirname, './src/routes'),
            '@pages': resolve(__dirname, './src/pages'),
            '@utils': resolve(__dirname, './src/utils'),
        }
    },
    base: './',
});
