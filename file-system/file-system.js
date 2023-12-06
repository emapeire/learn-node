const fs = require('node:fs')

const stats = fs.statSync('./file-system/file-system.txt')

console.log(
  stats.isFile(),
  stats.isDirectory(),
  stats.isSymbolicLink(),
  stats.size
)
