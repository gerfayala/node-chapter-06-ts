import { CreateTable } from "./create-table.use-case";


describe('CreateTableUseCase', () => {
    test('should create table with default values', () => {
        
        const createTable = new CreateTable();
        
        const table = createTable.execute({ base: 2 });
        const rows = table.split('\n').length;


        expect(createTable).toBeInstanceOf(CreateTable);
        expect(table).toContain('2 x 1 = 2');
        expect(table).toContain('2 x 10 = 20');
        expect(rows).toBe(10);

    });

    test('should create table with custom values', () => {
        
        const options = {
            base: 8,
            limit: 20
        }

        const createTable = new CreateTable();
        const table = createTable.execute(options);
        const rows = table.split('\n').length;


        expect(table).toContain('8 x 1 = 8');
        expect(table).toContain('8 x 5 = 40');
        expect(table).toContain('8 x 10 = 80');
        expect(table).toContain('8 x 15 = 120');
        expect(table).toContain('8 x 20 = 160');

        expect(rows).toBe(options.limit);

    });

});
