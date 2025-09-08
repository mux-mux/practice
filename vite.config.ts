import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import { defineConfig } from 'vite';
import * as tsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

const VENDOR_LIBS = ['/react/', '/react-dom/', '/react-router/', '/lodash/', '/tailwind/'];

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
        tsconfigPaths.default(),
        visualizer({
            filename: 'bundle-stats.html',
            open: false,
            gzipSize: true,
            brotliSize: true,
            emitFile: true,
        }),
    ],
    server: {
        open: true,
        port: 3000,
    },
    build: {
        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (
                        id.includes('node_modules') &&
                        VENDOR_LIBS.some((lib) => id.includes(lib))
                    ) {
                        return 'vendor';
                    }
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
