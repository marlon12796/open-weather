import { WeatherView } from '@/components/WeatherView';
import { cookies } from 'next/headers';

const getWeather = async (city: string) => {
  const url = `https://open-weather13.p.rapidapi.com/forecast.json?q=${city}&days=3`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.API_KEY || '',
      'X-RapidAPI-Host': process.env.API_HOST || '',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};

const City = async ({ searchParams }: { searchParams: { query: string } }) => {
  const city = searchParams?.query || 'London';
  const weather = await getWeather(city);

  const defaultLocationStored = cookies().get('defaultLocation')?.value;

  if (city !== defaultLocationStored) {
    return <WeatherView weather={weather} />;
  }
  return <WeatherView weather={weather} defaultLocation />;
};

export default City;
