'use server';
import { cookies } from 'next/headers';
export const getWeather = async () => {
  const city = cookies().get('defaultLocation')?.value || 'London';
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=3`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-host': process.env.API_HOST || '',
      'x-rapidapi-key': process.env.API_KEY || '',
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Error during request.');

    const result = await response.json();
    return result;
  } catch (error: any) {
    console.error(error);
    throw new Error(error.message);
  }
};
