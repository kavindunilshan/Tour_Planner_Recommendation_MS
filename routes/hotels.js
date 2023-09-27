const express = require("express");
const getHotels = require("../source/hotelSource");
const router = express.Router();

router.get("/hotels", async (req, res) => {
    const data = await getHotels();
    res.send(data);
})

module.exports = router;