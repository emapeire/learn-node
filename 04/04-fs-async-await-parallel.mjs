import { readFile } from 'node:fs/promises'

Promise.all([
  readFile('./02/02-file.txt', 'utf-8'),
  readFile('./03/03-file.txt', 'utf-8')
]).then(([firstText, secondText]) => {
  console.log('first file', firstText)
  console.log('second file', secondText)
})
