import { ServerApp } from "./presentation/server-app";

describe('App', () => {

    test('should call Server.run with values', async () => {

        const serverRunMock = jest.fn();
        
        ServerApp.run = serverRunMock;
        process.argv = ['node', 'app.ts', '-b', '5', '-l', '10', '-s', '-n', 'table-destination', '-d', './test-filename'];

        await import('./app');

        expect(serverRunMock).toHaveBeenCalledWith({
            base: 5,
            limit: 10,
            showTable: true,
            fileName: 'table-destination',
            destination: './test-filename'
        });


    });
});