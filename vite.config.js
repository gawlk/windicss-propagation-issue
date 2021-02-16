import components from 'vite-plugin-components'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import windiCSS from 'vite-plugin-windicss'

/**
 * @type {import('vite').UserConfig}
 */
export default {
  resolve: {
    alias: {
      '/src/': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [vue(), ...windiCSS(), components()],
}
