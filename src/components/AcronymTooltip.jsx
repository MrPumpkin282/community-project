import React from 'react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export default function AcronymTooltip({ acronym, fullForm }) {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="underline decoration-dotted decoration-navy-400 cursor-help font-semibold text-navy-900">
            {acronym}
          </span>
        </TooltipTrigger>
        <TooltipContent className="bg-navy-900 text-white text-xs px-2.5 py-1 rounded shadow-md border border-navy-700">
          <p>{fullForm}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
