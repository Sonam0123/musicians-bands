const {sequelize} = require('./db');
const {Band, Musician} = require('./index')

describe('Band and Musician Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({
            name: 'Test Band',
            password: 'test'
        })
        expect(testBand.name).toBe('Test Band');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusician = await Musician.create({
            name: 'Test Musician',
            age: 20
        })
        expect(testMusician.name).toBe('Test Musician');

    })
    
    test('can associate a Band with a Musician', async () => {
        const testBand = await Band.create({
            name: 'Test Band',
            password: 'test'
        })
        const testMusician = await Musician.create({
            name: 'Test Musician',
            age: 20
        })
        await testBand.addMusician(testMusician);
        const musicians = await testBand.getMusicians();
        expect(musicians[0].name).toBe('Test Musician');
    })
    //Write a test to add multiple musicians to a band. In the test:
    test('can associate a Band with multiple Musicians', async () => {
        const testBand = await Band.create({
            name: 'Test Band',
            password: 'test'
        })
        const testMusician1 = await Musician.create({
            name: 'Test Musician 1',
            age: 20
        })
        const testMusician2 = await Musician.create({
            name: 'Test Musician 2',
            age: 20
        })
        await testBand.addMusician(testMusician1);
        await testBand.addMusician(testMusician2);
        const musicians = await testBand.getMusicians();
        console.log(musicians)
        expect(musicians[0].name).toBe('Test Musician 1');
        expect(musicians[1].name).toBe('Test Musician 2');
    })
})