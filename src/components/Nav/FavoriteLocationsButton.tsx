import { useState } from 'react';
import Link from 'next/link';

import { TooltipButton } from './TooltipButton';

import { getCookie } from '@/lib/getCookie';

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

import { Card } from '@/components/ui/card';

import { Heart, MapPin } from 'lucide-react';

export const FavoriteLocationsButton = () => {
  const [openModal, setOpenModal] = useState(false);
  const favoriteLocations = getCookie('favorites');
  const favoriteLocationsArray = favoriteLocations ? JSON.parse(favoriteLocations) : [];

  return (
    <Dialog open={openModal} onOpenChange={setOpenModal}>
      <DialogTrigger asChild >
        <TooltipButton onClick={() => setOpenModal(true)} content="Favorite locations">
          <Heart className="h-[1.2rem] w-[1.2rem]" />
        </TooltipButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Favorite Locations</DialogTitle>
        </DialogHeader>

        <div id="results" className="flex flex-col gap-2">
          {favoriteLocationsArray.length === 0 ? <p>No favorite locations. Add one to see it here!</p> : null}
          {favoriteLocationsArray.map((city: any) => (
            <Link
              href={`/city?query=${city.name}`}
              key={city}
              onClick={() => {
                setOpenModal(false);
              }}
            >
              <Card className="p-3 flex justify-between items-center">
                <div>
                  <b className="flex items-center gap-2">
                    <MapPin className="h-[1.2rem] w-[1.2rem]" /> {city.name}
                  </b>

                  <span className="opacity-75">{city.country}</span>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
