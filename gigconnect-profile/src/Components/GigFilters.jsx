import React from 'react';
import { FiFilter } from 'react-icons/fi';

const GigFilters = ({ 
  categories, 
  filters, 
  sortBy, 
  onFilterChange, 
  onSortChange 
}) => {
  return (
    <section className="mb-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Available Gigs ({filters.totalCount})
        </h2>
        
        <div className="flex flex-wrap gap-3">
          {/* Category Filter */}
          <select
            name="category"
            value={filters.category}
            onChange={onFilterChange}
            className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          
          {/* Price Range Filter */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Price:</span>
            <input
              type="number"
              name="minPrice"
              value={filters.minPrice}
              onChange={onFilterChange}
              className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
              placeholder="Min"
            />
            <span>-</span>
            <input
              type="number"
              name="maxPrice"
              value={filters.maxPrice}
              onChange={onFilterChange}
              className="w-20 px-2 py-1 border border-gray-300 rounded-md text-sm"
              placeholder="Max"
            />
          </div>
          
          {/* Verified Only Filter */}
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="verifiedOnly"
              checked={filters.verifiedOnly}
              onChange={onFilterChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">Verified Only</span>
          </label>
          
          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={onSortChange}
            className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="newest">Newest</option>
            <option value="highest-price">Highest Price</option>
            <option value="lowest-price">Lowest Price</option>
            <option value="best-rating">Best Rating</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default GigFilters;