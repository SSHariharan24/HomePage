import React from 'react';

const GigPagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange,
  onPrevPage,
  onNextPage
}) => {
  return (
    <section className="mt-8 flex justify-center">
      <nav className="inline-flex rounded-md shadow">
        <button 
          onClick={onPrevPage}
          disabled={currentPage === 1}
          className={`px-3 py-2 rounded-l-md border border-gray-300 ${
            currentPage === 1 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Previous
        </button>
        
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`px-3 py-2 border-t border-b border-gray-300 ${
              currentPage === number
                ? 'bg-indigo-50 text-indigo-600 font-medium'
                : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            {number}
          </button>
        ))}
        
        <button 
          onClick={onNextPage}
          disabled={currentPage === totalPages}
          className={`px-3 py-2 rounded-r-md border border-gray-300 ${
            currentPage === totalPages
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          Next
        </button>
      </nav>
    </section>
  );
};

export default GigPagination;