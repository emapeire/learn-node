const fs = require('node:fs/promises')

console.log('Reading the first file...')
fs.readFile('./file-system/file-system.txt', 'utf-8').then((text) => {
  console.log(text)
})

console.log('Doing stuffs...')

console.log('Reading the second file...')
fs.readFile('./read-file/read-file.txt', 'utf-8').then((text) => {
  console.log(text)
})
