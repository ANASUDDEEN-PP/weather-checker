// DisplayWeather.tsx

import React, { useEffect, useState } from 'react';
import getData from '@/utils/getData';
import DisplayStyle from './display.module.css';
import { Weather } from '../../models/weather';

interface DisplayWeatherProps {
  place: string;
}

const DisplayWeather: React.FC<DisplayWeatherProps> = ({ place }) => {
  const [weatherData, setWeatherData] = useState<Weather | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getData(place);
        setWeatherData(data.weather);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchData();
  }, [place]);

  return (
    <div className={DisplayStyle.mainContainer}>
      <h1 className={DisplayStyle.weather}>
        {weatherData !== null ? `${weatherData.main.temp}°C` : 'Loading...'}
      </h1>
    </div>
  );
}

export default DisplayWeather;
