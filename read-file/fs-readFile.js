const fs = require('node:fs')

console.log('Reading the first file...')
fs.readFile('./fyle-system/file-system.txt', 'utf-8', (_err, text) => {
  console.log(text)
})

console.log('Doing stuffs...')

console.log('Reading the second file...')
fs.readFile('./read-file/read-file.txt', 'utf-8', (_err, text) => {
  console.log(text)
})
