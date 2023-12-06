const fs = require('node:fs')

const stats = fs.statSync('./02/02.file.txt')

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
)
