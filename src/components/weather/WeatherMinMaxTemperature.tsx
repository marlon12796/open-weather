import React from 'react';
import { BsThermometer } from 'react-icons/bs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Weather } from '@/app/types/weather';

export const WeatherMinMaxTemperature = ({ weather }: { weather: Weather }) => {
  return (
    <Card className="flex flex-col items-center justify-center">
      <CardHeader>
        <CardTitle className="flex flex-col items-center justify-center gap-2  text-base sm:text-xl">
          <BsThermometer className="w-10 h-10" />
          {weather.forecast.forecastday[0].day.maxtemp_c} / {weather.forecast.forecastday[0].day.mintemp_c}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>ºC Max/Min</CardDescription>
      </CardContent>
    </Card>
  );
};
