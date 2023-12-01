import React, { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')  // Current location will show and he weather as well
  const key = process.env.API_KEY
  const url = async () => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Manchester&appid=0b038fc24ee3faefb17b8079969e0a06`)
    const data = await response.json()
    setData(data)
  }
  
//   function weather() {
//   const searchLocation = (event) => {
//     if (event.key === 'Enter') {
//       data.get(url).then((response) => {
//         setData(response.data)
//         console.log(response.data)
//       })
//       setLocation('')
//     }
//   }
// }
useEffect(() =>{
  url()
},[])
  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={event => setLocation(event.target.value)}  // Should search and get the weather of for a location
          // onKeyPress={searchLocation}
          placeholder='Enter Location'
          type="text" />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined &&
          <div className="bottom">
            <div className="feels">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity">
              {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
              <p>Wind Speed</p>
            </div>
          </div>
        }



      </div>
    </div>
  );
}

export default App;