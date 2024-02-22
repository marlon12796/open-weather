// utils/getMoreDetails.js

import { Weather } from '@/app/types/weather';
import { formatDateTime } from './time';
export type WeatherDetails = {
  data: number | string;
  unit: string;
  description: string;
};
export const getMoreDetails = (weather: Weather): WeatherDetails[] => [
  {
    data: formatDateTime(weather.current.last_updated),
    unit: '',
    description: 'Last time updated',
  },
  {
    data: weather.forecast.forecastday[0].day.totalprecip_mm,
    unit: 'mm',
    description: 'Total Precipitation',
  },
  {
    data: weather.forecast.forecastday[0].day.uv,
    unit: 'UV',
    description: 'UV Index',
  },
  {
    data: weather.forecast.forecastday[0].day.avgvis_km,
    unit: 'km',
    description: 'Average Visibility',
  },
  {
    data: weather.current.wind_degree,
    unit: '°',
    description: 'Wind Direction',
  },
  {
    data: weather.current.pressure_mb,
    unit: 'hPa',
    description: 'Pressure',
  },
  {
    data: JSON.stringify({
      feels_like: `${weather.current.feelslike_c}`,
      current_temperature: `${weather.current.temp_c}`,
    }),
    unit: '°C',
    description: 'Feels like',
  },
  {
    data: JSON.stringify({
      direction: weather.current.wind_degree,
      velocity: weather.forecast.forecastday[0].day.maxwind_kph * 0.27778,
    }),
    unit: 'm/s',

    description: 'Wind speed',
  },
];
