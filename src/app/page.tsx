import { WeatherView } from '@/components/WeatherView';
import { getWeather } from '@/lib/weather/getWeather';

const Home = async () => {
  const weather = await getWeather();
  return <WeatherView weather={weather} defaultLocation />;
};

export default Home;
