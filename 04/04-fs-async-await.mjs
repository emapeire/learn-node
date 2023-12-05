import { readFile } from 'node:fs/promises'

console.log('Reading the first file...')
const firstText = await readFile('./02/02-file.txt', 'utf-8')
console.log('first file', firstText)

console.log('Doing stuffs...')

console.log('Reading the second file...')
const secondText = await readFile('./03/03-file.txt', 'utf-8')
console.log('second file', secondText)
