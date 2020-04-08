module.exports = {
  title: 'Code',
  handle: 'code',
  status: 'wip',
  default: 'default',
  context: {
    code: {
      type: 'none',
      code: 'brew cask install docker'
    }
  },
  variants: [
    {
      name: 'default',
      label: 'Default'
    },
    {
      name: 'php',
      label: 'PHP',
      context: {
        code: {
          modifiers: ['php'],
          code: 'echo $var === true ? "Yes" : "No"'
        }
      }
    },
    {
      name: 'js',
      label: 'JavaScript',
      context: {
        code: {
          modifiers: ['js'],
          code: 'fs.readFileSync(`${path}/${file}`)'
        }
      }
    },
    {
      name: 'cli',
      label: 'Command Line',
      context: {
        code: {
          modifiers: ['cli'],
          code: 'php artisan migrate:fresh --seed'
        }
      }
    }
  ]
}
