const fs = require('node:fs')

console.log('Reading the first file...')
const firstText = fs.readFileSync('./file-system/file-system.txt', 'utf-8')
console.log(firstText)

console.log('Doing stuffs...')

console.log('Reading the second file...')
const secondText = fs.readFileSync('./read-file/read-file.txt', 'utf-8')
console.log(secondText)
