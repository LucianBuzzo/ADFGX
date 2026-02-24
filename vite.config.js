const reactRefresh = require('@vitejs/plugin-react-refresh')

/**
 * https://vitejs.dev/config/
 * @type { import('vite').UserConfig }
 */
module.exports = {
  plugins: [reactRefresh()],
  server: {
    host: '0.0.0.0',
    hmr: {
      port: 443,
    },
  },
}
