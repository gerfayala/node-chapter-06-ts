// import {yarg} from './yargs.plugins.ts'



const runCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args];
    const { yarg } = await import('./yargs.plugins');

    return yarg;        
}  




describe('Test yargs plugin', () => {

    const oiriginalArgv = process.argv;

    beforeEach(() => {
        process.argv = oiriginalArgv;
        jest.resetModules();
        
    });


    test('should return default values', async() => {
        
        
        const argv = await runCommand(['-b', '5']);

        expect(argv).toEqual(expect.objectContaining({
            b: 5,
            l: 10,
            s: false,
            n: 'table',
            d: './outputs',
        })
        
        );
    });


    test('should return custom values', async () => {
        
        const argv = await runCommand(['-b', '10', '-l', '20', '-s', '-n', 'custom-name', '-d', './custom-dir']);



        expect(argv).toEqual(expect.objectContaining({
            b: 10,
            l: 20,
            s: true,
            n: 'custom-name',
            d: './custom-dir',
        })
        
        );
    });


});
