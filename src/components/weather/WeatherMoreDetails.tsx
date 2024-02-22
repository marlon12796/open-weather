import { WeatherDetails } from '@/utils/getMoreDetails';
import { CardData } from '../CardData';
import { WeatherUVIndex } from './WeatherUVIndex';
import { WeatherWindSpeed } from './WeatherWindSpeed';
import { WeatherFeelsLike } from './WeatherFeelsLike';
import { WeatherPressure } from './WeatherPressure';

export const WeatherMoreDetails = ({ moreDetails }: { moreDetails: WeatherDetails[] }) => {
  return (
    <section className="mt-4 mb-4 w-full">
      <h2 className="text-xl leading-tight tracking-tighter mt-3 mb-4 md:text-2xl">More details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 w-full">
        {moreDetails.map((detail, index) => {
          if (detail.description.toLowerCase() === 'uv index')
            return <WeatherUVIndex uvIndexForToday={Number(detail.data) ?? 0} key={index} />;
          if (detail.description.toLowerCase() === 'wind speed') {
            const data = JSON.parse(detail.data.toString()) as { velocity: number; direction: number };
            return (
              <WeatherWindSpeed speed={Number(data?.velocity ?? 0)} deg={Number(data?.direction) ?? 0} key={index} />
            );
          }
          if (detail.description.toLowerCase() === 'feels like') {
            const data = JSON.parse(detail.data.toString()) as { feels_like: number; current_temperature: number };
            return (
              <WeatherFeelsLike
                feels_like={Number(data.feels_like ?? 0)}
                current_temp={Number(data.current_temperature ?? 0)}
                key={index}
              />
            );
          }
          if (detail.description.toLowerCase() === 'pressure')
            return <WeatherPressure pressure={Number(detail.data)} key={index} />;
          return <CardData key={index} data={detail.data} unit={detail.unit} description={detail.description} />;
        })}
      </div>
    </section>
  );
};
