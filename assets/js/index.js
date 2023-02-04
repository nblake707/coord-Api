// get the five day forecast results

// api call to the geolocation api
const apiKey = '4ea744d07dc3e241ec2aaac49a723f55';
const city = 'new+york';

fetchGeoLocation();

function fetchGeoLocation () {
    const queryUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`;

    fetch(queryUrl)
    .then(res => res.json())
    .then(data => {
        let lat = data[0].lat;
        let lon = data[0].lon;
        fetchFiveDayWeather(lat, lon);
    });
}

function fetchFiveDayWeather (lat, lon) {
    const queryUrl = `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    fetch(queryUrl)
    .then(res => res.json())
    .then(data => displayFiveDay(data))
}

function displayFiveDay (data) {
    // decide which time of day I want to grab
    let fiveDayEl = document.querySelector('#five-day');
    // data.list is an array of objects
    fiveDayEl.innerHTML = `I am the data

    Data here: .........${JSON.stringify(data.list)}
    
    `;

    // check to see the value of the dt_time key and if it matches
      // if it matches then we grab that one 

      for(let weather of data.list) {
        // this locates
         weather.dt_txt.includes('12:00') && console.log(weather.dt_txt);

        // if (weather.dt_txt.includes('12:00')) {
        //     console.log(weather.dt_txt)
        //     // call method responsible for looking through the object and displaying contents
        // }
      }
}