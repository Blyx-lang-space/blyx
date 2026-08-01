'use client';

import React, { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';

interface SearchProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
}

export function Search({ placeholder = 'Search Blyx documentation & packages...', onSearch }: SearchProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    if (onSearch) {
      onSearch(val);
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div className="relative w-full max-w-xl">
      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748b]">
        <SearchIcon className="w-5 h-5" />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 bg-[#0f141d] text-[#f8fafc] placeholder-[#64748b] border border-[#00f2fe]/20 rounded-xl text-sm focus:outline-none focus:border-[#00f2fe] focus:ring-1 focus:ring-[#00f2fe] transition-all"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#64748b] hover:text-[#f8fafc]"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
