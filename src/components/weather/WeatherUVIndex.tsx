import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Progress } from '../ui/Progress';

export const WeatherUVIndex = ({ uvIndexForToday }: { uvIndexForToday: number }) => {
  const uvIndex = uvIndexForToday > 10 ? 9.5 : uvIndexForToday;
  return (
    <Card className="order-8 flex h-48 flex-col justify-between">
      <CardHeader className="">
        <CardTitle className="flex flex-row gap-2 items-center">
          <i>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 stroke-black dark:stroke-white"
            >
              <path
                d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </i>
          UV Index
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <p className="inline-flex gap-2">
          {Math.round(uvIndex)}
          <span>
            {uvIndexForToday <= 2
              ? 'Low'
              : uvIndexForToday <= 5
              ? 'Moderate'
              : uvIndexForToday <= 7
              ? 'High'
              : 'Very High'}
          </span>
        </p>
        <Progress aria-label="UV Index" value={uvIndex * 10} className="grid items-center" />
      </CardContent>
      <CardFooter>
        <p>
          {uvIndexForToday <= 2
            ? 'No protection needed.'
            : uvIndexForToday <= 5
            ? 'Wear sunscreen.'
            : 'Take precautions.'}
        </p>
      </CardFooter>
    </Card>
  );
};
