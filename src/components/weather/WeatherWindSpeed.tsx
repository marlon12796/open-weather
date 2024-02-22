import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { WeatherCompass, type WeatherCompassProps } from './WeatherCompass';
export const WeatherWindSpeed = ({ speed, deg }: WeatherCompassProps) => {
  return (
    <Card className="order-7 flex h-48 flex-col justify-between">
      <CardHeader className="[padding-block-end:0]">
        <CardTitle className="flex flex-row gap-2 items-center">
          <i>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 stroke-black dark:stroke-white"
            >
              <path
                d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                opacity="0.4"
                d="M2 12H18.5C20.42 12 22 10.43 22 8.5C22 6.58 20.42 5 18.5 5C16.58 5 15 6.57 15 8.5V9"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 9.00012H9.31C10.8 9.00012 12 7.79012 12 6.31012C12 4.82012 10.79 3.62012 9.31 3.62012C7.82 3.62012 6.62 4.83012 6.62 6.31012V6.69012"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          Wind Speed
        </CardTitle>
      </CardHeader>
      <CardContent className="flex justify-center p-0">
        <WeatherCompass speed={speed} deg={deg} />
      </CardContent>
    </Card>
  );
};
