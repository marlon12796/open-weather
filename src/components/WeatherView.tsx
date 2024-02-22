'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getCookie } from '@/lib/getCookie';
import { setCookie } from '@/lib/setCookie';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { BsWind } from 'react-icons/bs';
import { FavoriteLocation } from '@/app/types/favorites';
import { Weather } from '@/app/types/weather';
import WeatherHeader from './weather/WeatherHeader';
import { WeatherCarousel } from './weather/WeatherCarousel';
import { WeatherMinMaxTemperature } from './weather/WeatherMinMaxTemperature';
import { WeatherHumidityCard } from './weather/WeatherHumidityCard';
import { getMoreDetails } from '@/utils/getMoreDetails';
import { WeatherMoreDetails } from './weather/WeatherMoreDetails';

export const WeatherView = ({ weather, defaultLocation }: { weather: Weather; defaultLocation?: boolean }) => {
  const [defaultLocationState, setDefaultLocationState] = useState(false);
  const [addedToFavorites, setAddedToFavorites] = useState(false);
  const [currentDefaultLocation, setCurrentDefaultLocation] = useState('');
  const moreDetails = getMoreDetails(weather);
  const setFavorite = () => {
    setAddedToFavorites(true);
    const favoriteList = [
      ...JSON.parse(getCookie('favorites') || '[]'),
      {
        name: weather.location.name,
        country: weather.location.country,
      },
    ];

    // find if it exists.
    const favorites = JSON.parse(getCookie('favorites') || '[]');
    const favExist = favorites.find((favorite: FavoriteLocation) => favorite.name === weather.location.name);

    if (favExist) {
      // remove it
      setCookie(
        'favorites',
        JSON.stringify(favorites.filter((favorite: FavoriteLocation) => favorite.name !== weather.location.name))
      );
      setAddedToFavorites(false);
      return;
    }

    setCookie('favorites', JSON.stringify(favoriteList));
  };

  const setDefaultLocation = () => {
    setCookie('defaultLocation', `${weather.location.lat},${weather.location.lon}`);
    setDefaultLocationState(true);
  };

  // check if the city is in the favorites
  useEffect(() => {
    const favorites = JSON.parse(getCookie('favorites') || '[]');
    const favExist = favorites.find((favorite: FavoriteLocation) => favorite.name === weather.location.name);

    if (favExist) {
      setAddedToFavorites(true);
      return;
    }
  }, [weather.location.name]);

  // check if the city is the default location
  useEffect(() => {
    const defaultLocation = getCookie('defaultLocation');

    if (defaultLocation) {
      const [lat, lon] = defaultLocation.split(',');
      if (weather.location.lat === Number(lat) && weather.location.lon === Number(lon)) {
        setDefaultLocationState(true);
      }
    }
  }, [weather.location.lat, weather.location.lon]);

  // set the current default location
  useEffect(() => {
    const defaultLocationCookie: any = getCookie('defaultLocation');
    setCurrentDefaultLocation(defaultLocationCookie);
  }, []);

  return (
    <main className="p-4 mx-auto flex max-w-[1150px] flex-col items-center gap-2">
      <WeatherHeader
        weather={weather}
        defaultLocation={defaultLocation}
        setFavorite={setFavorite}
        setDefaultLocation={setDefaultLocation}
        addedToFavorites={addedToFavorites}
        defaultLocationState={defaultLocationState}
        currentDefaultLocation={currentDefaultLocation}
      />

      <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 w-full">
        <Card className="flex flex-col items-center justify-center">
          <CardHeader className="flex flex-col items-center justify-center gap-0">
            <Image
              src={`https:${weather.current.condition.icon}`}
              className="w-10"
              alt="Weather Icon"
              width={64}
              height={64}
            />
            <CardTitle>{weather.current.temp_c}°C</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{weather.current.condition.text}</CardDescription>
          </CardContent>
        </Card>
        <WeatherMinMaxTemperature weather={weather} />
        <WeatherHumidityCard weather={weather} />

        <Card className="flex flex-col items-center justify-center">
          <CardHeader>
            <CardTitle className="flex flex-col items-center justify-center gap-2">
              <BsWind className="w-10 h-10" />
              {weather.current.wind_kph} km/h
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>Wind</CardDescription>
          </CardContent>
        </Card>
      </section>
      <WeatherCarousel weather={weather} />
      <WeatherMoreDetails moreDetails={moreDetails} />
    </main>
  );
};
