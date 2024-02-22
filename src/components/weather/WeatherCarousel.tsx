import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Card, CardContent, CardDescription } from '@/components/ui/card';

import Image from 'next/image';
import { Weather } from '@/app/types/weather';
export const WeatherCarousel = ({ weather }: { weather: Weather }) => {
  return (
    <section className="w-full [padding-block-start:0.5rem]">
      <Carousel className="w-[95%] [margin-inline:auto]">
        <CarouselContent>
          {weather.forecast.forecastday[0].hour.map((hour: any, index: any) => (
            <CarouselItem key={index} className="basis-1/8">
              <Card className="flex flex-col items-center justify-center">
                <CardContent className="flex flex-col items-center justify-center p-4">
                  <span>{hour.time.split(' ')[1]}</span>
                  <Image
                    src={`https:${hour.condition.icon}`}
                    className="w-16"
                    alt="Hour condition icon"
                    width={64}
                    height={64}
                  />

                  <CardDescription>{hour.temp_c}°C</CardDescription>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
