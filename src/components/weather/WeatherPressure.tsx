import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
export const WeatherPressure = ({ pressure }: { pressure: number }) => {
  return (
    <Card className="order-5  flex h-48 flex-col justify-between">
      <CardHeader>
        <CardTitle className="flex flex-row gap-2 items-center">
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
              <path d="m12 14 4-4" />
              <path d="M3.34 19a10 10 0 1 1 17.32 0" />
            </svg>
          </i>
          Pressure
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{pressure} hPa</p>
      </CardContent>
      <CardFooter>
        <p>
          {pressure < 1000
            ? 'Low pressure. Expect changes in the weather.'
            : pressure >= 1000 && pressure <= 1010
            ? 'Normal pressure. Typical weather conditions.'
            : 'High pressure. Expect stable and clear weather.'}
        </p>
      </CardFooter>
    </Card>
  );
};
