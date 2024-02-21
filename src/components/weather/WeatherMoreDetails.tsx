import { CardData } from '../CardData';

export const WeatherMoreDetails = ({
  moreDetails,
}: {
  moreDetails: {
    data: number | string;
    unit: string;
    description: string;
  }[];
}) => {
  return (
    <section className="mt-4 mb-4 w-full">
      <h2 className="text-xl leading-tight tracking-tighter mt-3 mb-4 md:text-2xl">More details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:grid-cols-4 w-full">
        {moreDetails.map((detail, index) => (
          <CardData key={index} data={detail.data} unit={detail.unit} description={detail.description} />
        ))}
      </div>
    </section>
  );
};
