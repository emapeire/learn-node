const fs = require('node:fs')

console.log('Reading the first file...')
const firstText = fs.readFileSync('./02/02-file.txt', 'utf-8')
console.log(firstText)

console.log('Doing stuffs...')

console.log('Reading the second file...')
const secondText = fs.readFileSync('./03/03-file.txt', 'utf-8')
console.log(secondText)
