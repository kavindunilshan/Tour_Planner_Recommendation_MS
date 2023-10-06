const express = require("express");
const getHotels = require("../source/hotelSource");
const router = express.Router();

router.get("/hotels", async (req, res) => {
    const latitude = req.query.lat.toString();
    const longitude = req.query.long.toString();
    const data = await getHotels(longitude, latitude);
    res.send(data);
})

router.post("/hotels", async (req, res) => {
    // Call to the database handler MS.
})

module.exports = router;