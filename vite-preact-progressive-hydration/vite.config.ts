import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import eslint from 'vite-plugin-eslint'
import checker from 'vite-plugin-checker'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  if (mode === 'production') {
    return {
      plugins: [
        preact(),
        eslint(),
        checker({
          typescript: true,
          eslint: {
            lintCommand: 'eslint "**/*.{ts,tsx}"',
          },
        }),
      ],
    }
  }

  return {
    plugins: [
      preact(),
      eslint(),
    ],
  }
})
