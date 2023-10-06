const axios = require("axios");


export const getRooms = async (hotel_id, checkin_date, checkout_date, adults_number) => {
  const options = {
    method: 'GET',
    url: 'https://booking-com.p.rapidapi.com/v1/hotels/room-list',
    params: {
      hotel_id: hotel_id,
      currency: 'USD',
      checkout_date: checkout_date,
      locale: 'en-gb',
      checkin_date: checkin_date,
      adults_number_by_rooms: adults_number,
      units: 'metric'
    },
    headers: {
      'X-RapidAPI-Key': 'eb62a4e22cmsh6fa4648e0b05b79p1e8afdjsnfdac33378d64',
      'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
      return response.data[0].rooms;
  } catch (error) {
    console.error(error);
  }
}