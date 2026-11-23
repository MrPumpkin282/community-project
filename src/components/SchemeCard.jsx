import React from 'react';
import { ExternalLink, CheckCircle } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TricolorCardTop } from './TricolorElements';

export default function SchemeCard({
  title,
  description,
  link,
  linkLabel,
  lastVerified = 'November 2026',
}) {
  return (
    <Card className="flex flex-col h-full justify-between border-navy-100 bg-gradient-to-br from-navy-50/60 to-white shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
      {/* Decorative Tricolor Top Accent */}
      <TricolorCardTop height="h-[2.5px]" className="opacity-90" />
      <CardHeader className="p-5 sm:p-6 pb-2">
        <CardTitle className="font-semibold text-navy-800 text-base leading-snug">
          {title}
        </CardTitle>
      </CardHeader>

      <CardContent className="p-5 sm:p-6 pt-0 text-sm text-gray-600 leading-relaxed flex-1">
        <p>{description}</p>
      </CardContent>

      <CardFooter className="p-5 sm:p-6 pt-3 border-t border-navy-100/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-auto">
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-navy-600 hover:text-navy-800 transition-colors"
          >
            {linkLabel || 'View Official Document'}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span />
        )}

        <Badge
          variant="outline"
          className="inline-flex items-center gap-1 text-[11px] font-normal text-gray-500 bg-white border-gray-200"
        >
          <CheckCircle className="w-3 h-3 text-forest-600 shrink-0" />
          <span>Last verified: {lastVerified}</span>
        </Badge>
      </CardFooter>
    </Card>
  );
}
