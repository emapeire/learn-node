import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./file-system/file-system.txt', 'utf-8'),
  readFile('./read-file/read-file.txt', 'utf-8')
]).then(([firstText, secondText]) => {
  console.log('first file', firstText)
  console.log('second file', secondText)
})
