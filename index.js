const { crearArchivo } = require('./helpers/multiplicar.js')
const argv = require("./config/yargs.js")
const colors = require("colors")

console.clear()


//console.log(argv)


const base = argv.base
const listar = argv.listar
const hasta = argv.hasta

crearArchivo(base, listar, hasta)
    .then(nombreArchivo => console.log(`${nombreArchivo} ha sido creado con exito`.green))
    .catch(err => console.log(colors.red(err)))
