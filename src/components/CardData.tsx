import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const CardData = ({
  data,
  unit,
  description,
}: {
  data: string | number;
  unit?: string;
  description: string;
}) => {
  return (
    <Card>
      <CardHeader className="">
        <CardTitle className="flex flex-col items-center justify-center gap-2  text-base sm:text-xl">
          {data} {unit}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
