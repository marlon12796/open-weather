import React from 'react';

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
export const WeatherFeelsLike = ({ feels_like, current_temp }: { feels_like: number; current_temp: number }) => {
  return (
    <Card className="order-6 flex h-48 flex-col justify-between gap-2 p-[1.25em] ">
      <CardHeader className="grow-[2] p-0 ">
        <CardTitle className="flex flex-row gap-2 items-center  text-base sm:text-xl">
          <i>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z" />
            </svg>
          </i>
          Feels like
        </CardTitle>
      </CardHeader>
      <CardContent className="grow p-0">
        <p>{Math.floor(feels_like)}&deg;</p>
      </CardContent>
      <CardFooter className="grow-[3] p-0">
        <p className="[text-wrap:balance]">
          {feels_like < current_temp
            ? 'Feels colder than the actual temperature.'
            : feels_like > current_temp
            ? 'Feels warmer than the actual temperature.'
            : 'Feels like the actual temperature.'}
        </p>
      </CardFooter>
    </Card>
  );
};
