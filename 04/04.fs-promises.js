const fs = require('node:fs/promises')

console.log('Reading the first file...')
fs.readFile('./02/02.file.txt', 'utf-8').then((text) => {
  console.log(text)
})

console.log('Doing stuffs...')

console.log('Reading the second file...')
fs.readFile('./03/03.file.txt', 'utf-8').then((text) => {
  console.log(text)
})
