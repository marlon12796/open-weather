import React, { forwardRef } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

export const TooltipButton = forwardRef<
  HTMLButtonElement,
  {
    onClick: () => void;
    children: React.ReactNode;
    content: string;
  }
>(({ onClick, children, content }, ref) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          ref={ref}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          onClick={onClick}
          aria-label={content}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p>{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
});

TooltipButton.displayName = 'TooltipButton';
