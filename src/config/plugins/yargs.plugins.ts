
import yargs from 'yargs'
import {hideBin} from 'yargs/helpers'



export const yarg = yargs(hideBin(process.argv))
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Es la base de la tabla de multiplicar'
})
.option('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Es el limite de la tabla de multiplicar',
})
.option('s', {
    alias: 'show',
    type: 'boolean',
    default: false,
    describe: 'Muestra la tabla de multiplicar en consola',
}).option('n', {
    alias: 'name',
    type: 'string',
    default: 'table',
    describe: 'Nombre del Archivo a guardar',
}).option('d', {
    alias: 'destination',
    type: 'string',
    default: './outputs',
    describe: 'Destino del archivo a guardar',
})
.check((argv, options) => {
    if(isNaN(argv.b)){
        throw 'La base tiene que ser un número'
    }
    if(isNaN(argv.l)){
        throw 'El limite tiene que ser un número'
    }
    if(argv.l < 1){
        throw 'El limite tiene que ser mayor a 0'
    }
    return true
})
.parseSync();






