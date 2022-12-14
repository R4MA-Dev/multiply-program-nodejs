import fs from "node:fs"
import colors from "colors"

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

        fs.mkdirSync("./salida",{recursive: true})

        const nombreArchivo = `tabla-${base}.txt`
        fs.writeFileSync(`./salida/${nombreArchivo}`, salida)

        return nombreArchivo

    } catch (error) {
        throw error
    }
}

export {crearArchivo}