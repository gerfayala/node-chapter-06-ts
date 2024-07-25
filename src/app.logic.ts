import { writeFileSync } from 'fs';

import {yarg} from './config/plugins/yargs.plugins'

const {b, s, l} = yarg;



let output = '';
const table = b;

let hedaerMessage = ''

hedaerMessage = `
============================
    Tabla del ${table}     
============================
`

    for (let i = 1; i <= l; i++) {
       output += `${table} x ${i} = ${table * i}\n`;
    }
    if(s){
        console.log(hedaerMessage);
        console.log(output);
    }else{
        console.log('Tabla creada');
    }
    
writeFileSync(`Tabla del ${table}`, hedaerMessage + output);
