// WeatherHeader.jsx
import { Weather } from '@/app/types/weather';
import { Button } from '@/components/ui/button';
interface WeatherHeaderProps {
  weather: Weather;
  defaultLocation?: boolean;
  setFavorite: () => void;
  setDefaultLocation: () => void;
  addedToFavorites: boolean;
  defaultLocationState: boolean;
  currentDefaultLocation: string;
}
const WeatherHeader = ({
  weather,
  defaultLocation,
  setFavorite,
  setDefaultLocation,
  addedToFavorites,
  defaultLocationState,
  currentDefaultLocation,
}: WeatherHeaderProps) => {
  return (
    <header className="flex flex-col items-center pt-6 pb-4">
      <h1 className="text-center text-3xl text-balance leading-tight mt-2 tracking-tighter md:text-6xl lg:leading-[1.1]">
        {weather.location.name}
      </h1>
      <h2 className="text-center text-xl leading-tight tracking-tighter mt-3 mb-4 md:text-2xl opacity-75">
        {weather.location.country}
      </h2>

      {!defaultLocation && (
        <div className="flex gap-2">
          {defaultLocationState === false && (
            <Button variant="secondary" onClick={setFavorite}>
              {addedToFavorites ? <span>Remove from favorites</span> : <span>Add to favorites</span>}
            </Button>
          )}

          {!defaultLocationState && currentDefaultLocation !== `${weather.location.lat},${weather.location.lon}` ? (
            <Button variant="secondary" onClick={setDefaultLocation}>
              Set as default location
            </Button>
          ) : null}
        </div>
      )}
    </header>
  );
};

export default WeatherHeader;
