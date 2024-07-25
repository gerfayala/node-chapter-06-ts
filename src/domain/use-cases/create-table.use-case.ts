





interface CreateTableUseCaseOptions{
    execute: (options: CreateTableOptions) => string;
}


interface CreateTableOptions{
    base: number;
    limit?: number;

}

//Clase

export class CreateTable implements CreateTableUseCaseOptions{

    constructor(    
        /**
         * DI: Depenmdency Injection
         * 
         * 
         * 
         * */
    ){}

    //Metodos

    execute({base, limit = 10}: CreateTableOptions ) {
        
        let outPutMessage = '';

        for(let i = 1; i <= limit; i++){

            outPutMessage += `${base} x ${i} = ${base * i}\n`;
        }

        return outPutMessage;
    }


}