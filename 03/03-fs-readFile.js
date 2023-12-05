const fs = require('node:fs')

const text02 = fs.readFile('./02/02-file.txt', 'utf-8')

console.log(text02)

console.log('------------------')

const text03 = fs.readFile('./03/03-file.txt', 'utf-8')

console.log(text03)
