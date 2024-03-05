// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const App = () => {
//   const [weather, setWeather] = useState()

//   useEffect(() => {
//     axios.get('http://api.weatherapi.com/v1/current.json?key=38fd0d2603404d97bc420752231301&q=Tashkent&aqi=no')
//     .then(response => {
//       // console.log(data.data.location.localtime)
//       setWeather(response.data)
//     })
//     .catch(err => console.log(err))
    
//   }, [])

//   return (
//     <>
//       <h1>{weather.location.country}</h1>
//       <h2>{weather.location.name}</h2>
//       <img src={weather.current.condition.icon} alt="" srcset="" />
//       <p>{weather.location}</p>
//     </>
//   )
// }

// export default App
// import React, { useEffect, useState } from 'react';

// const App = () => {
//   const [weather, setWeather] = useState(null);

//   useEffect(() => {
//     const fetchWeather = async () => {
//       try {
//         const response = await fetch('https://api.weatherapi.com/v1/current.json?key=38fd0d2603404d97bc420752231301&q=Tashkent&aqi=no');
//         const data = await response.json();
//         setWeather(data);
//       } catch (error) {
//         console.error('Error fetching weather data:', error);
//       }
//     };

//     fetchWeather();
//   }, []);

//   return (
//     <div>
//       {weather ? (
//         <>
//           <h1>{weather.location.country}</h1>
//           <h2>{weather.location.name}</h2>
//           <p>Temperature: {weather.current.temp_c}<sup>o</sup> C</p>
//           <p>Condition: {weather.current.condition.text}</p>
//           <img src={weather.current.condition.icon} alt='' />
//         </>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './Styles/App.scss'

const WeatherApp = () => {
  const [city, setCity] = useState('Tashkent');
  const [weatherData, setWeatherData] = useState();

  const API_KEY = '38fd0d2603404d97bc420752231301';

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFetchWeather = async () => {
    try {
      const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
      );
      if (!response.ok) {
        throw new Error('Weather data not found');
      }
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      alert('Sorry! But there is not as that country or capital. Please enter correct form, another way', error.message);
    }
  };

  return (
    <div className='WeatherApp'>
      <label>
        Enter city name:
        <input type="text" value={city} onChange={handleInputChange} />
      </label>
      <button onClick={handleFetchWeather}>Get Weather</button>

      {weatherData && (
        <div>
          <h1>{weatherData.location.country}</h1>
          <h2>{weatherData.location.name}</h2>
          <p>Temperature: {weatherData.current.temp_c}<sup>o</sup>C</p>
          <p>Condition: {weatherData.current.condition.text}</p>
          <img src={weatherData.current.condition.icon} alt='' />
        </div>
      )}
    </div>
  );
};

export default WeatherApp;