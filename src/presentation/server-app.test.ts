import exp from "constants";
import { ServerApp } from "./server-app";
import { Server } from "http";
import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";
import path from "path";
import { log } from "console";


describe('Test server-app', () => {

    const options = {
            base: 5,
            limit: 10,
            showTable: false,
            fileName: 'table-destination',
            destination: './test-filename'
    };
    
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('should create serverApp instance', () => {
        const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run ).toBe('function');
    });

    test('should run serverApp with options', () => {

        // const logSpy = jest.spyOn(console, 'log');
        // const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        // const safeFileSpy = jest.spyOn(SaveFile.prototype, 'execute');



        

        // ServerApp.run(options);

        // expect(logSpy).toHaveBeenCalledTimes(2);
        // expect(logSpy).toHaveBeenCalledWith('Server is running..');
        // expect(logSpy).toHaveBeenCalledWith('File was created');

        // expect(createTableSpy).toHaveBeenCalledTimes(1);
        // expect(createTableSpy).toHaveBeenCalledWith({
        //     base: options.base, limit: options.limit
        // });


        // expect(safeFileSpy).toHaveBeenCalledTimes(1);
        // expect(safeFileSpy).toHaveBeenCalledWith({
        //     fileContent: expect.any(String),
        //     path: options.destination,
        //     fileName: options.fileName,
        // });
    });

    test('should run with custom values mocked', () => {
        
        const logMock = jest.fn();
        const logErrorMock = jest.fn();
        const createTableMock = jest.fn().mockReturnValue('1 x 2 = 2');
        const saveFileMock = jest.fn().mockReturnValue(true);


        console.log = logMock;
        console.error = logErrorMock;
        CreateTable.prototype.execute = createTableMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options);

        expect(logMock).toHaveBeenCalledWith("Server is running..");
        expect(createTableMock).toHaveBeenCalledWith({ "base": options.base, "limit": options.limit });
        expect(saveFileMock).toHaveBeenCalledWith({
            fileContent: '1 x 2 = 2',
            path: options.destination,
            fileName: options.fileName
        });

        expect(logMock).toHaveBeenCalledWith("File was created");
        expect(logErrorMock).not.toHaveBeenCalled();
        
    });

});
