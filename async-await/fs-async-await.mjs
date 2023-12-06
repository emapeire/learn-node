import { readFile } from 'node:fs/promises'

console.log('Reading the first file...')
const firstText = await readFile('./file-system/file-system.txt', 'utf-8')
console.log('first file', firstText)

console.log('Doing stuffs...')

console.log('Reading the second file...')
const secondText = await readFile('./read-file/read-file.txt', 'utf-8')
console.log('second file', secondText)
