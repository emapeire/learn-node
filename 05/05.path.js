const path = require('node:path')

// separator for the current platform
console.log(path.sep)

// join paths
const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

// get the base name
const base = path.basename(filePath)
console.log(base)

// get the extention
const extention = path.extname(filePath)
console.log(extention)
