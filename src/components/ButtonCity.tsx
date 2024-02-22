import React from 'react';
import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { Search } from 'lucide-react';

export const ButtonCitySubmit = () => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="sm" className="flex items-center gap-2 px-3">
      <Search className="h-[1.2rem] w-[1.2rem]" />
      {pending ? 'Searching...' : 'Search'}
    </Button>
  );
};
