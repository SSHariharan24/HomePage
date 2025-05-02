// GigCard.jsx
import React from 'react';
import { FiStar, FiDollarSign, FiClock, FiCheckCircle } from 'react-icons/fi';

const colorSchemes = {
  development: {
    border: 'border-blue-600',
    bg: 'bg-blue-50',
    text: 'text-blue-800',
    hover: 'hover:bg-blue-100'
  },
  design: {
    border: 'border-purple-600',
    bg: 'bg-purple-50',
    text: 'text-purple-800',
    hover: 'hover:bg-purple-100'
  },
  writing: {
    border: 'border-green-600',
    bg: 'bg-green-50',
    text: 'text-green-800',
    hover: 'hover:bg-green-100'
  },
  marketing: {
    border: 'border-yellow-600',
    bg: 'bg-yellow-50',
    text: 'text-yellow-800',
    hover: 'hover:bg-yellow-100'
  },
  data: {
    border: 'border-red-600',
    bg: 'bg-red-50',
    text: 'text-red-800',
    hover: 'hover:bg-red-100'
  },
  default: {
    border: 'border-indigo-600',
    bg: 'bg-indigo-50',
    text: 'text-indigo-800',
    hover: 'hover:bg-indigo-100'
  }
};

const GigCard = ({ gig }) => {
  const colors = colorSchemes[gig.category?.toLowerCase()] || colorSchemes.default;

  return (
    <article className={`bg-white rounded-lg  shadow overflow-hidden hover:shadow-md transition border-l-4 ${colors.border}`}>
      <div className={`p-6 rounded-lg ${colors.bg}`}>
        {/* Header */}
        <div className="flex justify-between items-start mb-4 ">
          <div>
            <h2 className="text-lg font-bold text-gray-800">{gig.title}</h2>
            <p className="text-sm text-gray-500">{gig.client}</p>
          </div>
          {gig.verified && (
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white  ${colors.text}`}>
              <FiCheckCircle className="mr-1" />
              Verified
            </span>
          )}
        </div>
        
        {/* Body */}
        <p className="text-gray-600 mb-4">{gig.description}</p>
        
        {/* Skills */}
        <div className="flex flex-wrap gap-2 mb-4">
          {gig.skills.map((skill) => (
            <span 
              key={skill}
              className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white text-black `}
            >
              {skill}
            </span>
          ))}
        </div>
        
        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <FiStar className="text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600">
              {gig.rating} <span className="sr-only">out of 5</span> 
              <span aria-hidden="true">({gig.reviews} reviews)</span>
            </span>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <FiClock className="mr-1" />
            <span>{gig.duration}</span>
          </div>
        </div>
      </div>
      
      {/* Card Footer */}
      <div className={`px-6 py-4 flex justify-between items-center `}>
        <div className="flex items-center">
          <FiDollarSign className={`${colors.text} mr-1`} />
          <span className={`font-medium ${colors.text}`}>{gig.priceDisplay}</span>
        </div>
        <button 
          className={`${colors.text} hover:${colors.text.replace('800', '900')} font-medium hover:underline focus:outline-none focus:ring-2 focus:${colors.border.replace('600', '500')} rounded ${colors.bg}`}
        >
          View Details
        </button>
      </div>
    </article>
  );
};

export default GigCard;