module.exports = function (pool) {

    async function totalTripCount() {
        // return the total number of trips made
        const totalTrips = await pool.query('select * from trips')
        return totalTrips.rowCount
    }

    async function findAllRegions() {
        //find all the regions
        const showRegions = await pool.query('select name from region')
        return showRegions.rows
    }

    async function findTaxisForRegion(region) {
        //find all the taxis for a given region - use region name as look up
        const taxisByRegion = await pool.query('select reg_no from taxi join region on taxi.region_id = region.id where region.name = $1', [region])
        return taxisByRegion.rows
    }

    async function findTripsByRegNumber(regNo) {
        //	Find all the trips made by a given taxi - use reg number as look up
        const tripsByTaxi = await pool.query('select * from trips join taxi on trips.taxi_id = taxi.id where taxi.reg_no = $1', [regNo])
        return tripsByTaxi.rowCount
    }

    async function findTripsByRegion(region) {
        //Find all the trips made for a given region - use the region name as lookup
        const tripsByRegion = await pool.query('select * from trips join taxi on trips.taxi_id = taxi.id join region on taxi.region_id = region.id where region.name = $1', [region])
        return tripsByRegion.rowCount
    }

    async function findIncomeByRegNumber(regNo) {
        //List the income for each taxi - use reg number in this query
        const incomeByReg = await pool.query('select sum(fare) as income from trips join routes on trips.route_id = routes.id join taxi on trips.taxi_id = taxi.id where taxi.reg_no = $1', [regNo])
        return incomeByReg.rows[0].income
    }

    async function findTotalIncomePerTaxi() {
        //find the total income per taxi
        const incomePerTaxi = await pool.query('select sum(fare) from trips join routes on trips.route_id = routes.id join taxi on trips.taxi_id = taxi.id group by reg_no')
        return incomePerTaxi.rows[0].sum
    }

    async function findTotalIncome() {
        //Find the total amount received in income from all the taxis (one amount)
        const trips = await pool.query('select * from trips')
        const allTrips = trips.rowCount
        const taxiIncome = await pool.query('select sum(fare*$1) from trips join routes on trips.route_id = routes.id join taxi on trips.taxi_id = taxi.id', [allTrips])
        return taxiIncome.rows[0].sum
    }

    async function findTotalIncomeByRegion() {
        //Find the total amount income for each of the regions
        const incomeByRegion = await pool.query('select sum(fare) from trips join routes on trips.route_id = routes.id join taxi on trips.taxi_id = taxi.id join region on taxi.region_id = region_id group by region.name')
        return incomeByRegion.rows
    }
    return {
        totalTripCount,
        findAllRegions,
        findTaxisForRegion,
        findTripsByRegNumber,
        findTripsByRegion,
        findIncomeByRegNumber,
        findTotalIncomePerTaxi,
        findTotalIncome,
        findTotalIncomeByRegion
    }
}