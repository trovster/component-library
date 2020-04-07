module.exports = {
  host: 'example.test',
  proxy: {
    target: 'http://example.test'
  },
  port: 80,
  files: [
    'build/**/*.css',
    'build/**/*.js'
  ],
  ui: {
    enabled: false
  },
  notify: false,
  open: false
}
