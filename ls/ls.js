const fs = require('node:fs')

fs.readdir('.', (err, files) => {
  if (err) console.error('Error reading the directory', err)

  files.forEach((file) => {
    console.log(file)
  })
})
