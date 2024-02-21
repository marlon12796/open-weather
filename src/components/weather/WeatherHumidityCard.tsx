import React from 'react';
import { BsDroplet } from 'react-icons/bs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Weather } from '@/app/types/weather';
export const WeatherHumidityCard = ({ weather }: { weather: Weather }) => {
  return (
    <Card className="flex flex-col items-center justify-center">
      <CardHeader>
        <CardTitle className="flex flex-col items-center justify-center gap-2">
          <BsDroplet className="w-10 h-10" />
          {weather.forecast.forecastday[0].day.avghumidity}%
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>Humidity</CardDescription>
      </CardContent>
    </Card>
  );
};
