const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://booking-com.p.rapidapi.com/v1/car-rental/search',
  params: {
    currency: 'USD',
    drop_off_latitude: '6.9271',
    sort_by: 'recommended',
    drop_off_datetime: '2023-09-23 14:00:00',
    from_country: 'it',
    pick_up_latitude: '6.9271',
    locale: 'en-gb',
    pick_up_datetime: '2023-09-21 16:00:00',
    drop_off_longitude: '79.8612',
    pick_up_longitude: '79.8612'
  },
  headers: {
    'X-RapidAPI-Key': 'eb62a4e22cmsh6fa4648e0b05b79p1e8afdjsnfdac33378d64',
    'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
  }
};

const getVehicles = async () => {
    try {
        const response = await axios.request(options);
        return response.data.search_results;
    } catch (error) {
        console.error(error);
    }
}

module.exports = getVehicles;