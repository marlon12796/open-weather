import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
export const WeatherPressure = ({ pressure }: { pressure: number }) => {
  return (
    <Card className="order-5  flex h-48 flex-col justify-between p-[1.2em] gap-2">
      <CardHeader className="gow-[2] p-0">
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
              <path d="m12 14 4-4" />
              <path d="M3.34 19a10 10 0 1 1 17.32 0" />
            </svg>
          </i>
          Pressure
        </CardTitle>
      </CardHeader>
      <CardContent className="grow-[1] p-0">
        <p>{pressure} hPa</p>
      </CardContent>
      <CardFooter className="grow-[3] p-0">
        <p className="[text-wrap:balance]">
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
