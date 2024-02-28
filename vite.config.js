import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
     plugins: [
        laravel({
            input: 'resources/js/app.js',
            ssr: 'resources/js/ssr.js',
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
       
    ],
    // build: {
    //     rollupOptions: {
    //       output: {
    //         manualChunks(id) {
    //           if (id.includes('node_modules')) {
    //             return 'vendor'; // Agrupa todos os módulos de node_modules em um chunk separado
    //           }
    //         },
    //         chunkSizeWarningLimit: 2000 * 1024, // Define o limite de tamanho do chunk para 1 MB
    //       },
    //     },
    //   },
});
