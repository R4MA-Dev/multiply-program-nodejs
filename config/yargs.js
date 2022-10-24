const colors = require("colors")

const argv = require('yargs')
    .option('b',{
        alias : "base",
        type : "number",
        demandOption: true,
        describe : "La base de la tabla de multiplicar"
    })
    .check((argv, options)=>{
        if(isNaN(argv.b)){
            throw colors.red("La base tiene que ser un numero")
        }
        else if(argv.b <= 0){
            throw colors.red("La base debe ser mayor a 0")
        }
        return true
    })
    .option('h',{
        alias : "hasta",
        type : "number",
        demandOption : true,
        describe : "Hasta cuanto se va a multiplicar la base"
    })
    .check((argv, options)=>{
        if(isNaN(argv.h)){
            throw colors.red("El hasta tiene que ser un numero")
        }
        else if(argv.h <= 0){
            throw colors.red("El hasta debe ser mayor a 0")
        }
        return true
    })
    .option('l',{
        alias : "listar",
        type : "boolean",
        default : false,
        describe : "Mostrar la tabla en consola"
    })
    .argv

module.exports = argv;