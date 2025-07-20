'use client';

import { useState } from 'react';
import { Search, Filter, SortAsc, SortDesc, RefreshCw } from 'lucide-react';

interface SearchFilterProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
  onSortChange: (field: string, order: 'asc' | 'desc') => void;
  filters: Record<string, string>;
  onFilterChange: (filters: Record<string, string>) => void;
  onRefresh: () => void;
  sortOptions: { label: string; value: string }[];
  filterOptions: { label: string; value: string; options: { label: string; value: string }[] }[];
}

export default function SearchFilter({
  searchQuery,
  onSearchChange,
  sortBy,
  sortOrder,
  onSortChange,
  filters,
  onFilterChange,
  onRefresh,
  sortOptions,
  filterOptions,
}: SearchFilterProps) {
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterChange = (filterKey: string, value: string) => {
    const newFilters = { ...filters };
    if (value === '') {
      delete newFilters[filterKey];
    } else {
      newFilters[filterKey] = value;
    }
    onFilterChange(newFilters);
  };

  const clearAllFilters = () => {
    onFilterChange({});
    onSearchChange('');
  };

  const activeFilterCount = Object.keys(filters).length + (searchQuery ? 1 : 0);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 mb-6">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B2653] focus:border-transparent"
          />
        </div>

        {/* Sort */}
        <div className="flex items-center gap-2">
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value, sortOrder)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B2653] text-sm"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                Sort by {option.label}
              </option>
            ))}
          </select>
          <button
            onClick={() => onSortChange(sortBy, sortOrder === 'asc' ? 'desc' : 'asc')}
            className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0B2653]"
          >
            {sortOrder === 'asc' ? (
              <SortAsc className="h-4 w-4" />
            ) : (
              <SortDesc className="h-4 w-4" />
            )}
          </button>
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-3 py-2 border rounded-md text-sm font-medium transition-colors ${
            showFilters || activeFilterCount > 0
              ? 'border-[#0B2653] bg-[#0B2653] text-white'
              : 'border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          <Filter className="h-4 w-4" />
          Filters
          {activeFilterCount > 0 && (
            <span className="bg-white text-[#0B2653] rounded-full px-2 py-0.5 text-xs font-bold">
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Refresh */}
        <button
          onClick={onRefresh}
          className="p-2 border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#0B2653]"
        >
          <RefreshCw className="h-4 w-4" />
        </button>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filterOptions.map((filter) => (
              <div key={filter.value}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {filter.label}
                </label>
                <select
                  value={filters[filter.value] || ''}
                  onChange={(e) => handleFilterChange(filter.value, e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0B2653] text-sm"
                >
                  <option value="">All {filter.label}</option>
                  {filter.options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          
          {activeFilterCount > 0 && (
            <div className="mt-4 flex justify-between items-center">
              <span className="text-sm text-gray-600">
                {activeFilterCount} filter{activeFilterCount > 1 ? 's' : ''} applied
              </span>
              <button
                onClick={clearAllFilters}
                className="text-sm text-[#0B2653] hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}