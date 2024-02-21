// utils/getMoreDetails.js

import { Weather } from '@/app/types/weather';

export const getMoreDetails = (weather: Weather) => [
  {
    data: weather.current.pressure_mb,
    unit: 'hPa',
    description: 'Pressure',
  },
  {
    data: weather.current.feelslike_c,
    unit: '°C',
    description: 'Feels like',
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
    data: weather.current.last_updated,
    unit: '',
    description: 'Last time updated',
  },
  {
    data: weather.forecast.forecastday[0].day.maxwind_kph,
    unit: 'km/h',
    description: 'Max wind',
  },
];
