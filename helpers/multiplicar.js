const fs = require('node:fs')
const colors = require("colors")

const crearArchivo = async(base, listar, hasta) => {
    try {
        let salida = ""
        let consola = ""

        for(let i = 1; i <= hasta; i++){
            let resultado = base * i

            salida += `     ${base} x ${i} = ${resultado} \n`
            consola += `     ${base} ${"x".white} ${i} ${"=".white} ${resultado} \n`
        }

        if(listar === true){
            console.log(colors.yellow("======================="))
            console.log(colors.yellow(`     Tabla del ${base}`))
            console.log(colors.yellow("======================="))

            console.log(colors.yellow(consola))
        }

        fs.mkdirSync("./salida")
        const nombreArchivo = `tabla-${base}.txt`
        fs.writeFileSync(`./salida/${nombreArchivo}`, salida)

        return nombreArchivo

    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo : crearArchivo
}