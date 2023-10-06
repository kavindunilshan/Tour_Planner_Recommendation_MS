const express = require("express");
const getVehicles = require("../source/vehicleSource");
const router = express.Router();

router.get("/vehicles", async (req, res) => {
    const latitude = req.query.lat.toString();
    const longitude = req.query.long.toString();
    const startDate = req.query.sd.toString();
    const endDate = req.query.ed.toString();
    const data = await getVehicles(longitude, latitude, startDate, endDate);
    res.send(data);
})

router.post("/vehicles", async (req, res) => {
    // Call to the database handler MS.
})

module.exports = router;