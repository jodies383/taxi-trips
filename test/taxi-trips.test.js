let assert = require("assert");
let TaxiTrips = require("../taxi-trips");
const pg = require("pg");
const Pool = pg.Pool;

const connectionString = process.env.DATABASE_URL || 'postgresql://codex:pg123@localhost:5432/taxi_trips';

const pool = new Pool({
    connectionString
});

describe('Taxi Trips', function () {

    // beforeEach(async function () {
        
    // });

    it('should find how many trips all the taxis made', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.equal(27, await taxiTrips.totalTripCount());
    

    });

    it('should find all the regions', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([{name: 'Durban'}, {name: 'Cape Town'}, {name: 'Gauteng'}], await taxiTrips.findAllRegions());

    });

    it('should find all the taxis for a region', async function () {
        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual([{reg_no: 'ND 7895'},{reg_no: 'ND 6548'},{reg_no: 'ND 4254'}], await taxiTrips.findTaxisForRegion('Durban'));
        assert.deepStrictEqual([{reg_no: 'CA 213-789'},{reg_no: 'CA 369-889'},{reg_no: 'CA 387-021'}], await taxiTrips.findTaxisForRegion('Cape Town'));
        assert.deepStrictEqual([{reg_no: 'DP 447 GP'},{reg_no: 'AB 631 GP'},{reg_no: 'LP 321 GP'}], await taxiTrips.findTaxisForRegion('Gauteng'));

    })

    it('should find all the trips for a reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        
        assert.deepStrictEqual(3, await taxiTrips.findTripsByRegNumber('LP 321 GP'));
        assert.deepStrictEqual(3, await taxiTrips.findTripsByRegNumber('CA 387-021'));

    });

    it('should find the total number of trips by region', async function () {

        const taxiTrips = TaxiTrips(pool);

        assert.deepStrictEqual(9, await taxiTrips.findTripsByRegion('Cape Town'));
        assert.deepStrictEqual(9, await taxiTrips.findTripsByRegion('Gauteng'));
        assert.deepStrictEqual(9, await taxiTrips.findTripsByRegion('Gauteng'));

    });

    it('find the total income for a given reg number', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual('45.00', await taxiTrips.findIncomeByRegNumber('ND 6548'));
        assert.deepStrictEqual('48.50', await taxiTrips.findIncomeByRegNumber('AB 631 GP'));

    });

    it('find the total income for each taxi', async function () {

        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual([{},{},{}], await taxiTrips.findTotalIncomePerTaxi());

    });

    it('find the total income for all the taxis', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual('8559.00', await taxiTrips.findTotalIncome());
    });
   
    it('find the total amount income for each of the regions', async function () {
        const taxiTrips = TaxiTrips(pool);
        assert.deepStrictEqual({},{},{}, await taxiTrips.findTotalIncomeByRegion());
    });


    after(function () {
        pool.end();
    });

});