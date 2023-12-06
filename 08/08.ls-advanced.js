const fs = require('node:fs/promises')
const path = require('node:path')
const pico = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls(folder) {
  let files = []
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pico.error(`❌ Error reading the directory: ${folder}`))
    process.exit(1)
  }

  const filePromises = files.map(async (file) => {
    const filePath = path.join(folder, file)
    let stats = null
    try {
      stats = await fs.stat(filePath)
    } catch {
      console.error(`Error reading file: ${filePath}`)
      process.exit(1)
    }

    const isDirectory = stats.isDirectory()
    const fileType = isDirectory ? 'DIR' : 'FILE'
    const fileSize = stats.size.toString().padStart(10)
    const fileModified = stats.mtime.toLocaleString()

    return `${pico.bgCyan(fileType)} ${pico.blue(
      file.padEnd(20)
    )} ${pico.yellow(fileModified)} ${pico.green(fileSize)} bytes`
  })

  const filesInfo = await Promise.all(filePromises)

  filesInfo.forEach((fileInfo) => {
    console.log(fileInfo)
  })
}

ls(folder)
