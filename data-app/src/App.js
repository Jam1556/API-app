import './App.css';
import { useState } from "react";
import { useEffect } from 'react';
import Button from './components/button';

const  App = () => {
  const [weather, WeatherTime] = useState('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={0b038fc24ee3faefb17b8079969e0a06
}')

  const getWeather = async() => {
    const response = await fetch('')
    const data = await response.json()
    WeatherTime(data)
  }
  useEffect(() => {
    getWeather()
  })
  
  
  

  <h1>API App</h1>
  return (
    <>
    <div className="App">
      <Button />
    </div>
    </>
  );
}

export default App;
