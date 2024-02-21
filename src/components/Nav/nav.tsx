'use client';

import { ModeToggle } from '@/components/ModeToggle';
import Link from 'next/link';
import Image from 'next/image';

import { FavoriteLocationsButton } from './FavoriteLocationsButton';
import { SearchCityButton } from './SearchCityButton';
import { GeoLocationButton } from './GeoLocationButton';

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-3 px-4">
      <div className="flex items-center gap-2">
        <Image src="/favicon.png" alt="Wethr" width={32} height={32} />
        <Link href="/" className="text-xl font-bold hidden sm:block">
          Weather
        </Link>
      </div>

      <div className="flex items-center gap-4">
        <GeoLocationButton />
        <SearchCityButton />
        <FavoriteLocationsButton />
        <ModeToggle />
      </div>
    </nav>
  );
};
