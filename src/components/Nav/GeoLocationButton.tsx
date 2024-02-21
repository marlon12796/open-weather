import { useRouter } from 'next/navigation';
import { MapPin } from 'lucide-react';

import { useToast } from '@/components/ui/use-toast';
import { TooltipButton } from './TooltipButton';

export const GeoLocationButton = () => {
  const router = useRouter();
  const { toast } = useToast();

  const getLatLng = () => {
    if ('geolocation' in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        router.push(`/city?query=${latitude},${longitude}`);
      });
    } else {
      toast({
        title: 'Error',
        description: 'Sorry. Geolocation is not supported by your browser.',
        variant: 'destructive',
      });
    }
  };

  return (
    <TooltipButton onClick={getLatLng} content="Find my location">
      <MapPin className="h-[1.2rem] w-[1.2rem]" />
    </TooltipButton>
  );
};
