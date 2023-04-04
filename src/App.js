import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useState } from 'react';
import { FaCloudflare, FaHome, FaTemperatureHigh, FaTemperatureLow, FaTint, FaWind, IconName } from "react-icons/fa";

function App() {
  const [current, setCurrent] = useState({})
  const [location, setLocation] = useState({})
  const [text, setText] = useState({})
  const [term, setTerm] = useState()
  const [error, setError] = useState(false)

  const getWeather = (searched) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: `${searched}` },
      headers: {
        'X-RapidAPI-Key': 'f3cf1ed102msh62d85265071397ap1d76c3jsn12c38859b41b',
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
      setCurrent(response.data.current)
      setLocation(response.data.location)
      setText(response.data.current.condition)
    }).catch(function (error) {
      console.error(error);
      setError(true)
    });
  }
  return (
    <>
      <div className='text-4xl mt-7 text-center'>Weather Report</div>
      <div className='h-fit'>
        <input className=' w-1/2 h-[35px] border mt-36 mb-16 ml-[350px] text-center text-2xl border-black rounded-l-lg' placeholder='Enter the City Name' type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
        <button className='border border-black h-[35px] mb-6 pt-[6px] w-[40px] rounded-r-lg' onClick={() => getWeather(term)}>🔎</button>
      </div>
      {error ? <div className='text-3xl text-center'> No Result found for this Search</div> : <div className='mt-5'>
        <div className='flex p-2 m-5 justify-evenly'>
          <div className='text-center p-2 items-center flex flex-col border shadow-lg w-[250px] h-[100px]'>
            <h1 className='text-2xl'>Country</h1>
            <div className='p-2'><FaHome /></div>
            <div>{location.country}</div>
          </div>
          <div className='text-center items-center p-2  flex flex-col border shadow-lg w-[250px] h-[100px]'>
            <h1 className='text-2xl'>Temperature</h1>
            <div className='p-2'><FaTemperatureLow /></div>
            <div>{current.temp_c}°C</div>
          </div>
          <div className='text-center p-2 items-center flex flex-col border shadow-lg w-[250px] h-[100px]'>
            <h1 className='text-2xl'>Wind Speed</h1>
            <div className='p-2'><FaWind /></div>
            <div>{current.wind_kph}km/hr</div>
          </div>
        </div>
        <div className='flex p-2 m-5 justify-evenly'>
          <div className='text-center p-2 items-center border flex flex-col shadow-lg w-[250px] h-[100px]'>
            <h1 className='text-2xl'>Feels like</h1>
            <div className='p-2'><FaTemperatureHigh /></div>
            <div>{current.feelslike_c}°C</div>
          </div>
          <div className='text-center p-2 items-center flex flex-col border shadow-lg w-[250px] h-[100px]'>
            <h1 className='text-2xl'>Humidity</h1>
            <div className='p-2'><FaTint /></div>
            <div>{current.humidity}</div>
          </div>
          <div className='text-center p-2 items-center flex flex-col border shadow-lg w-[250px] h-[100px]'>
            <h1 className='text-2xl'>Forecast</h1>
            <div className='p-2'><FaCloudflare /></div>
            <div>{text.text}</div>
          </div>
        </div>
      </div>}

    </>
  );
}

export default App;
