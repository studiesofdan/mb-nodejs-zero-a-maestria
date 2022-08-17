const path = require('path')

// path absoluto
console.log(path.resolve('file.txt'))

// formar path
const midFolder = "relatorios"
const filename = "dan.txt"

const finalPath = path.join("/", 'arquivos', midFolder, filename)
console.log(finalPath)