import { crearArchivo } from './helpers/multiplicar.js'
import { argv }  from "./config/yargs.js"
import colors from "colors"

console.clear()

const base = argv.base
const listar = argv.listar
const hasta = argv.hasta

crearArchivo(base, listar, hasta)
    .then(nombreArchivo => console.log(`${nombreArchivo} ha sido creado con exito`.green))
    .catch(err => console.log(colors.red(err)))
