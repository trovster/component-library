import 'alpinejs'

const hljs = require('highlight.js')

document.addEventListener('DOMContentLoaded', (event) => {
  document.querySelectorAll('pre.code code').forEach((block) => {
    hljs.highlightBlock(block)
  })
})
