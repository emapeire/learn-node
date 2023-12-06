// entry process
console.log(process.argv)

// current working directory
console.log(process.cwd())

// listen event process
process.on('exit', (code) => {
  console.log('exit code', code)
})

// exit process
process.exit(1)
