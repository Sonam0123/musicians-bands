const {sequelize} = require('./db');
const {Band, Musician, Song} = require('./index')

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
        const testBand = await Band.create({
            name: 'Test Band',
            password: 'test'
        })
        expect(testBand.name).toBe('Test Band');
    })

    test('can create a Musician', async () => {
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
   
    test('can get all Bands with their Musicians', async () => {

        await sequelize.sync({ force: true });
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
        const bands = await Band.findAll();
        const musicians = await bands[0].getMusicians();
        expect(musicians[0].name).toBe('Test Musician 1');
        expect(musicians[1].name).toBe('Test Musician 2');
    })

    test('can associate a Band with multiple Songs', async () => {
        const testBand = await Band.create({
            name: 'Test Band',
            password: 'test'
        })
        const testSong1 = await Song.create({
            title: 'Test Song 1',
            year: 2020
        })
        const testSong2 = await Song.create({
            title: 'Test Song 2',
            year: 2020
        })
        await testBand.addSong(testSong1);
        await testBand.addSong(testSong2);
        const songs = await testBand.getSongs();
        expect(songs[0].title).toBe('Test Song 1');
        expect(songs[1].title).toBe('Test Song 2');
    })

})
