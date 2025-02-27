const axios = require('axios');

async function getAttempt() {
    try {
        const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?q=helsinki&appid=d77023c2afdf0dcec2db09c3eef2b8bb&units=metric');
        console.log(response);
    } catch (error) {
        console.log(error);
    }
};

getAttempt()