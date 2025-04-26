import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
        plugins: [sveltekit()],
        test: {
                include: ['src/**/*.{test,spec}.{js,ts}'],
                environment: 'jsdom',
                globals: true
        },
        server: {
                host: '0.0.0.0',
                port: 12000,
                strictPort: true,
                cors: true,
                headers: {
                        'Access-Control-Allow-Origin': '*'
                },
                fs: {
                        allow: ['.']
                },
                allowedHosts: ['work-1-hlmgupnkykgvjrkj.prod-runtime.all-hands.dev', 'work-2-hlmgupnkykgvjrkj.prod-runtime.all-hands.dev']
        }
});