const axios = require("axios");

const getVehicles = async (latitude, longitude, startDate, endDate) => {
    const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/car-rental/search',
  params: {
    currency: 'USD',
    drop_off_latitude: latitude,
    sort_by: 'recommended',
    drop_off_datetime: `${endDate} 14:00:00`,
    from_country: 'it',
    pick_up_latitude: latitude,
    locale: 'en-gb',
    pick_up_datetime: `${startDate} 16:00:00`,
    drop_off_longitude: longitude,
    pick_up_longitude: longitude
  },
  headers: {
    'X-RapidAPI-Key': 'eb62a4e22cmsh6fa4648e0b05b79p1e8afdjsnfdac33378d64',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};
    try {
        const response = await axios.request(options);
        return response.data.search_results;
    } catch (error) {
        console.error(error);
    }
}

module.exports = getVehicles;