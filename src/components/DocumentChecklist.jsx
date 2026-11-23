import React, { useState } from 'react';
import { FileCheck, Printer, CheckSquare, Square, AlertCircle } from 'lucide-react';
import { DOCUMENT_CHECKLISTS } from '../data/documents';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TricolorCardTop } from './TricolorElements';

export default function DocumentChecklist({ sectionKey }) {
  const checklistData = DOCUMENT_CHECKLISTS[sectionKey];

  const [checkedState, setCheckedState] = useState({});

  if (!checklistData) return null;

  const toggleCheck = (id) => {
    setCheckedState((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handlePrint = () => {
    window.print();
  };

  const checkedCount = Object.values(checkedState).filter(Boolean).length;
  const totalCount = checklistData.items.length;

  return (
    <div className="card-accent my-8 border-navy-200 relative overflow-hidden">
      {/* Decorative Tricolor Top Accent */}
      <TricolorCardTop height="h-[3px]" />
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-navy-100">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-navy-600 text-white flex items-center justify-center shrink-0 shadow-sm">
            <FileCheck className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-navy-800">
              Document Checklist: {checklistData.category}
            </h3>
            <div className="flex items-center gap-2 mt-0.5">
              <Badge variant="secondary" className="text-[11px] font-normal py-0 px-2 bg-navy-50 text-navy-700">
                {checkedCount} of {totalCount} items prepared
              </Badge>
            </div>
          </div>
        </div>

        <Button
          onClick={handlePrint}
          variant="outline"
          size="sm"
          className="text-xs font-semibold text-navy-700 bg-white border-navy-200 hover:bg-navy-50 shadow-sm self-start sm:self-auto gap-1.5"
          title="Print checklist for your DLSA visit"
        >
          <Printer className="w-3.5 h-3.5 text-navy-600" />
          Print this checklist
        </Button>
      </div>

      <div className="space-y-2 mb-4">
        {checklistData.items.map((item) => {
          const isChecked = !!checkedState[item.id];
          return (
            <label
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              className={`flex items-start gap-3 p-3 rounded-lg border transition-colors cursor-pointer select-none ${
                isChecked
                  ? 'bg-forest-50/70 border-forest-200 text-forest-900'
                  : 'bg-white border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <div className="mt-0.5 shrink-0 text-navy-600">
                {isChecked ? (
                  <CheckSquare className="w-4 h-4 text-forest-600" />
                ) : (
                  <Square className="w-4 h-4 text-gray-400" />
                )}
              </div>
              <div className="flex-1 text-xs sm:text-sm">
                <span className={isChecked ? 'line-through opacity-80' : 'font-medium'}>
                  {item.name}
                </span>
                {item.required && (
                  <Badge variant="outline" className="ml-2 text-[10px] px-1.5 py-0 bg-amber-50 text-amber-800 border-amber-300 font-semibold">
                    Mandatory
                  </Badge>
                )}
              </div>
            </label>
          );
        })}
      </div>

      <div className="flex items-start gap-2 text-[11px] text-gray-500 bg-navy-50/60 p-3 rounded-lg border border-navy-100">
        <AlertCircle className="w-4 h-4 text-navy-500 shrink-0 mt-0.5" />
        <span>
          <strong>Note:</strong> These are commonly required documents. Please confirm the exact
          list with your District Legal Services Authority (DLSA), as specific requirements may vary
          by state regulation.
        </span>
      </div>
    </div>
  );
}
