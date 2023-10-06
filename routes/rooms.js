const express = require("express");
const { getRooms } = require("../source/roomSource");
const router = express.Router();

router.get("/rooms", async (req, res) => {
    const hotel_id = req.query.hid.toString();
    const checkin_date = req.query.cid.toString();
    const checkout_date = req.query.cod.toString();
    const adults_number = req.query.an.toString();
    const data = await getRooms(hotel_id, checkin_date, checkout_date, adults_number);
    res.send(data);
})

router.post("/rooms", async (req, res) => {
    // Call to the database handler MS.
})

module.exports = router;