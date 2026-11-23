import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Phone } from 'lucide-react';
import { SEARCH_INDEX } from '../data/searchIndex';
import { useLanguage } from '../context/LanguageContext';
import { Badge } from '@/components/ui/badge';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();
  const { t } = useLanguage();

  useEffect(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      setResults([]);
      return;
    }

    const matched = SEARCH_INDEX.filter((item) => {
      const inTitle = item.title.toLowerCase().includes(trimmed);
      const inSummary = item.summary.toLowerCase().includes(trimmed);
      const inKeywords = item.keywords.some((kw) => kw.toLowerCase().includes(trimmed));
      return inTitle || inSummary || inKeywords;
    }).slice(0, 7);

    setResults(matched);
    setIsOpen(true);
  }, [query]);

  // Click outside to close
  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false);
        setMobileExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (item) => {
    setIsOpen(false);
    setQuery('');
    setMobileExpanded(false);
    if (item.url.startsWith('tel:')) {
      window.location.href = item.url;
    } else {
      navigate(item.url);
    }
  };

  return (
    <div ref={searchRef} className="relative">
      {/* Desktop Search Input */}
      <div className="hidden md:flex items-center relative">
        <Search className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.trim() && setIsOpen(true)}
          placeholder={t('search_placeholder')}
          className="w-48 lg:w-64 pl-9 pr-7 py-1.5 text-xs bg-gray-50 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-navy-400 focus:bg-white focus:w-72 transition-all duration-200"
          aria-label="Search portal"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute right-2.5 text-gray-400 hover:text-gray-600"
            aria-label="Clear search"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Mobile Search Icon Toggle */}
      <div className="md:hidden flex items-center">
        {!mobileExpanded ? (
          <button
            onClick={() => setMobileExpanded(true)}
            className="p-1.5 text-gray-600 hover:bg-gray-100 rounded-lg"
            aria-label="Open search"
          >
            <Search className="w-5 h-5" />
          </button>
        ) : (
          <div className="fixed inset-x-0 top-0 bg-white border-b border-gray-200 p-3 z-50 flex items-center gap-2 shadow-md">
            <Search className="w-4 h-4 text-gray-400 shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('search_placeholder')}
              className="flex-1 text-sm bg-transparent border-none focus:outline-none"
            />
            <button
              onClick={() => {
                setMobileExpanded(false);
                setQuery('');
              }}
              className="p-1 text-gray-500 hover:text-gray-800"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Search Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden z-50 max-h-96 overflow-y-auto">
          <div className="p-2 bg-gray-50 border-b border-gray-100 flex items-center justify-between text-[11px] font-semibold text-gray-500 uppercase tracking-wider">
            <span>Search Results ({results.length})</span>
            <span className="text-[10px] text-gray-400">Esc to close</span>
          </div>
          <div className="divide-y divide-gray-100">
            {results.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item)}
                className="w-full text-left p-3 hover:bg-navy-50/70 transition-colors flex items-start gap-2.5 group"
              >
                {item.category === 'Helpline' ? (
                  <div className="w-7 h-7 rounded-lg bg-saffron-100 text-saffron-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                ) : (
                  <div className="w-7 h-7 rounded-lg bg-navy-100 text-navy-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Search className="w-3.5 h-3.5" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="font-semibold text-navy-800 text-xs truncate group-hover:text-navy-600">
                      {item.title}
                    </span>
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0 bg-gray-50 text-gray-600 font-medium">
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-[11px] text-gray-500 line-clamp-1">{item.summary}</p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-navy-600 transition-colors shrink-0 mt-1.5" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* No results message */}
      {isOpen && query.trim() && results.length === 0 && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-50 text-center">
          <p className="text-xs text-gray-600 mb-1">No matching schemes or pages found.</p>
          <p className="text-[11px] text-gray-400">
            Try searching for &ldquo;farmer&rdquo;, &ldquo;women&rdquo;, &ldquo;15100&rdquo;, &ldquo;DLSA&rdquo;, or &ldquo;RTI&rdquo;.
          </p>
        </div>
      )}
    </div>
  );
}
