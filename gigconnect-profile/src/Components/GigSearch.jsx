import React from 'react';
import { FiSearch } from 'react-icons/fi';

const GigSearch = ({ searchQuery, onSearchChange, onSearchSubmit }) => {
  return (
    <section className=" container mx-auto pt-30  py-8 mb-8">
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Find Your Next Gig Opportunity</h1>
      <p className="text-gray-600 mb-6">Connect with clients and grow your freelance business</p>
      
      <form onSubmit={onSearchSubmit} className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            name="searchQuery"
            placeholder="Search for gigs (e.g., 'React developer', 'Graphic design')"
            className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            value={searchQuery}
            onChange={onSearchChange}
          />
        </div>
        <button 
          type="submit"
          className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition whitespace-nowrap"
        >
          Search Gigs
        </button>
      </form>
    </section>
  );
};

export default GigSearch;