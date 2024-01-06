import { Weather } from "@/modules/app/models/weather";

interface WeatherData {
  weather: Weather;
  place: string;
}

const getData = async (place: string): Promise<WeatherData> => {
  try {
    const API_KEY = "59b74f11fff1baea3d421a56a04128ce";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch weather data for ${place}. Status: ${response.status}`);
    }

    const weatherData: Weather = await response.json();
    console.log(`Weather data for ${place}:`, weatherData);

    const result: WeatherData = { weather: weatherData, place: place };
    return result;
  } catch (error) {
    console.error('Error fetching weather data:', error || error);
    throw error;
  }
};

export default getData;

  