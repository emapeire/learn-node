const fs = require('node:fs')

const text = fs.readFileSync('./02/file.txt', 'utf-8')

console.log(text)
