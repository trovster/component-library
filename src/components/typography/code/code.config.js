module.exports = {
  order: 3,
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
          code: `echo $var === true ? "Yes" : "No"

class Factory
{
    function list(int $count = 10);
}`
        }
      }
    },
    {
      name: 'js',
      label: 'JavaScript',
      context: {
        code: {
          modifiers: ['js'],
          code: `const json = (str) => JSON.stringify(str)

if (a === b) {
  return false
}

return true`
        }
      }
    },
    {
      name: 'css',
      label: 'CSS',
      context: {
        code: {
          modifiers: ['css'],
          code: `.text-lg {
    font-size: 24px;
}
.text-grey-500 {
    color: #ccc;
}`
        }
      }
    },
    {
      name: 'html',
      label: 'HTML',
      context: {
        code: {
          modifiers: ['html'],
          code: `<!DOCTYPE html>
<title>Title</title>
<body>
  <h1 class="text-lg color-gray-500">Title</h1>
  <!-- here goes the rest of the page -->
</body>`
        }
      }
    },
    {
      name: 'cli',
      label: 'Command Line',
      context: {
        code: {
          modifiers: ['cli'],
          code: `brew cask install docker
php artisan migrate:fresh --seed`
        }
      }
    }
  ]
}
