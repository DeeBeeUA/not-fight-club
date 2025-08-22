import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                registration: resolve(__dirname, 'index.html'),
                home: resolve(__dirname, 'home.html'),
                settings: resolve(__dirname, 'settings.html'),
                character: resolve(__dirname, 'character.html'),
                battle: resolve(__dirname, 'battle.html'),
                // nested: resolve(__dirname, 'nested/index.html'),
            },
        },
    },
    base: '/not-fight-club/',
})