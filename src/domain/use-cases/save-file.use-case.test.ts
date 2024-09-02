import fs from 'fs';

import { SaveFile } from "./save-file.use-case";


describe('SaveFileUseCase', () => {


        const customOption = {
            fileContent: 'custom-content',
            path: 'custom/file-destination',
            fileName: 'custom-table-name',
        }
    
        const customFilePath = `${customOption.path}/${customOption.fileName}.txt`;
    


    afterEach(() => {
        const outputsExists = fs.existsSync('outputs');
        if(outputsExists){
            fs.rmdirSync('outputs', {recursive: true});
        }

        const customOutputsExists = fs.existsSync(customOption.path);
        if(customOutputsExists){
            fs.rmdirSync(customOption.path, {recursive: true});
        }
    });


    test('should save file with default values', () => {
        
        const saveFile = new SaveFile();
        const filePath = 'outputs/table.txt';
        
        const options = {
            fileContent: 'test content',
        }

        const result = saveFile.execute(options);

        expect(result).toBeTruthy();
        const fileExists = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
        
        expect(result).toBe(true);
        expect(fileExists).toBe(true);
        expect(fileContent).toBe(options.fileContent);
    
    });


    test('should save file with custom values', () => {

        const saveFile = new SaveFile();
            

        const result = saveFile.execute(customOption);
        const fileExists = fs.existsSync(customFilePath);
        const fileContent = fs.readFileSync(customFilePath, { encoding: 'utf8' });

        expect(result).toBeTruthy();
        expect(fileExists).toBeTruthy();
        expect(fileContent).toBe(customOption.fileContent);
        


    });

    test('should return false if directory could not be created', () => {

        const saveFile = new SaveFile();
        const mkdirSpy = jest.spyOn(fs, 'mkdirSync').mockImplementation(() => { throw new Error('This is custom error message from testing') });

        const result = saveFile.execute(customOption);

        expect(result).toBeFalsy();


        mkdirSpy.mockRestore();

    });
        
     test('should return false if file could not be created', () => {

        const saveFile = new SaveFile();
        const writeFileSpy = jest.spyOn(fs, 'writeFileSync').mockImplementation(() => { throw new Error('This is custom error message from testing') });

        const result = saveFile.execute({fileContent: 'test content'});

         expect(result).toBe(false);
         
         writeFileSpy.mockRestore();

    });
        
        
});