const axios = require("axios");
// 7.2906
// 80.6337



const getHotels = async (longitude, latitude) => {
    const options = {
        method: 'GET',
        url: 'https://booking-com.p.rapidapi.com/v1/hotels/search-by-coordinates',
        params: {
            units: 'metric',
            room_number: '1',
            longitude: longitude,
            latitude: latitude,
            filter_by_currency: 'AED',
            order_by: 'class_descending',
            locale: 'en-gb',
            checkout_date: '2023-09-30',
            adults_number: '2',
            checkin_date: '2023-09-29',
            children_ages: '5,0',
            include_adjacency: 'true',
            children_number: '2',
            page_number: '0',
            categories_filter_ids: 'class::2,class::4,free_cancellation::1'
        },
        headers: {
            'X-RapidAPI-Key': 'eb62a4e22cmsh6fa4648e0b05b79p1e8afdjsnfdac33378d64',
            'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data.result;
    } catch (error) {
        console.error(error);
    }
}

module.exports = getHotels;