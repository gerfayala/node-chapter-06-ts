
import fs from 'fs';



export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
    fileContent : string;
    path?       : string;
    fileName    : string;
}


export class SaveFile implements SaveFileUseCase{

    constructor(
        /**
         * repositoru: Storage Repository
         * 
         * 
         * 
         * */
    ){}

    //Metodos

    execute({fileContent, path = 'outputs', fileName = 'table'}: SaveFileOptions ): boolean{
        

        try {
            fs.mkdirSync(path, {recursive: true});


             fs.writeFileSync(`${path}/${fileName}.txt`, fileContent);
       

        return true;
            
        } catch (error) {
            console.log(error);
            return false;
        }

        
    }

}