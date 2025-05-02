import React from 'react';
import { FiSearch, FiBriefcase, FiUser, FiMessageSquare, FiStar, FiDollarSign, FiClock, FiFilter } from 'react-icons/fi';
import { useState } from 'react';
const GigConnectPlatform = () => {
  // Sample data
  const allGigs = [
    {
        id: 1,
        title: 'Website Development',
        description: 'Need a responsive website for my small business using React and Node.js',
        skills: ['React', 'Node.js', 'MongoDB'],
        price: '$500-$1000',
        duration: '2-4 weeks',
        rating: 4.8,
        reviews: 42,
        client: 'TechSolutions Inc.',
        verified: true
      },
      {
        id: 2,
        title: 'Mobile App Design',
        description: 'Looking for a UI/UX designer to create wireframes and prototypes for a fitness app',
        skills: ['Figma', 'UI/UX', 'Prototyping'],
        price: '$300-$600',
        duration: '1-2 weeks',
        rating: 4.5,
        reviews: 28,
        client: 'HealthFit',
        verified: false
      },
      {
        id: 3,
        title: 'Content Writing',
        description: 'Need blog articles about digital marketing trends (1000 words each)',
        skills: ['Content Writing', 'SEO', 'Digital Marketing'],
        price: '$50-$100',
        duration: '3-5 days',
        rating: 4.7,
        reviews: 35,
        client: 'MarketingPro',
        verified: true
      },
      // Page 2 gigs
      {
        id: 4,
        title: 'Social Media Management',
        description: 'Need someone to manage Instagram and Facebook accounts for a beauty brand',
        skills: ['Social Media', 'Content Creation', 'Marketing'],
        price: '$400-$800',
        duration: '1 month',
        rating: 4.6,
        reviews: 31,
        client: 'Glamour Cosmetics',
        verified: true
      },
      {
        id: 5,
        title: 'Data Analysis',
        description: 'Analyze sales data and create visualizations for quarterly report',
        skills: ['Python', 'Pandas', 'Data Visualization'],
        price: '$600-$1200',
        duration: '3 weeks',
        rating: 4.9,
        reviews: 47,
        client: 'AnalyticsPro',
        verified: true
      },
      {
        id: 6,
        title: 'Logo Design',
        description: 'Create a modern logo for a new tech startup',
        skills: ['Illustrator', 'Logo Design', 'Branding'],
        price: '$200-$500',
        duration: '1-2 weeks',
        rating: 4.4,
        reviews: 23,
        client: 'StartUpVision',
        verified: false
      },
      // Page 3 gigs
      {
        id: 7,
        title: 'SEO Optimization',
        description: 'Improve website SEO and increase organic traffic',
        skills: ['SEO', 'Keyword Research', 'Google Analytics'],
        price: '$350-$700',
        duration: '2-3 weeks',
        rating: 4.7,
        reviews: 38,
        client: 'DigitalGrowth',
        verified: true
      },
      {
        id: 8,
        title: 'Video Editing',
        description: 'Edit promotional videos for YouTube channel',
        skills: ['Premiere Pro', 'After Effects', 'Video Editing'],
        price: '$250-$600',
        duration: '1 week',
        rating: 4.5,
        reviews: 29,
        client: 'MediaCreators',
        verified: true
      }
  ];
  const [currentPage, setCurrentPage] = useState(1);
  const gigsPerPage = 3; // Number of gigs to show per page

  // Calculate current gigs to display
  const indexOfLastGig = currentPage * gigsPerPage;
  const indexOfFirstGig = indexOfLastGig - gigsPerPage;
  const currentGigs = allGigs.slice(indexOfFirstGig, indexOfLastGig);
  const totalPages = Math.ceil(allGigs.length / gigsPerPage);
  console.log(allGigs.slice(indexOfFirstGig, indexOfLastGig));
  

  // Change page
  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  // Handle previous page
  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Handle next page
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <FiBriefcase className="h-6 w-6 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">GigConnect</span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Discover</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Messages</a>
              <a href="#" className="text-gray-600 hover:text-indigo-600 font-medium">Profile</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition">
                Post a Gig
              </button>
              <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                <FiUser className="text-gray-600" />
              </div>
            </div>
          </div>
          <button className="md:hidden text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        {/* Hero Section */}
        <section className="bg-white rounded-lg shadow p-6 mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Find Your Next Gig Opportunity</h1>
          <p className="text-gray-600 mb-6">Connect with clients and grow your freelance business</p>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search for gigs (e.g., 'React developer', 'Graphic design')"
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition whitespace-nowrap">
              Search Gigs
            </button>
          </div>
        </section>

        {/* Filters */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-xl font-semibold text-gray-800">Available Gigs</h2>
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center px-3 py-2 bg-white border border-gray-300 rounded-md text-sm hover:bg-gray-50">
                <FiFilter className="mr-2" />
                Filter
              </button>
              <select className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm focus:ring-indigo-500 focus:border-indigo-500">
                <option>Sort by: Newest</option>
                <option>Sort by: Highest Paying</option>
                <option>Sort by: Best Match</option>
              </select>
            </div>
          </div>
        </section>

        {/* Gig Listings */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Gig (matches your PPT design) */}
          {/* <div className="bg-white rounded-lg shadow overflow-hidden border-l-4 border-indigo-600">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Website Development</h3>
                  <p className="text-sm text-gray-500">TechSolutions Inc.</p>
                </div>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  Verified
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">Need a responsive website for my small business using React and Node.js</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">React</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Node.js</span>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">MongoDB</span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <FiStar className="text-yellow-400 mr-1" />
                  <span className="text-sm text-gray-600">4.8 (42 reviews)</span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FiClock className="mr-1" />
                  <span>2-4 weeks</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
              <div className="flex items-center">
                <FiDollarSign className="text-gray-600 mr-1" />
                <span className="font-medium">$500-$1000</span>
              </div>
              <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                View Details
              </button>
            </div>
          </div> */}

          {/* Other Gigs */}
          {currentGigs.map((gig) => (
            <div key={gig.id} className="bg-white rounded-lg shadow overflow-hidden hover:shadow-md transition border-l-4 border-indigo-600">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">{gig.title}</h3>
                    <p className="text-sm text-gray-500">{gig.client}</p>
                  </div>
                  {gig.verified && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Verified
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 mb-4">{gig.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {gig.skills.map((skill, index) => (
                    <span key={index} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <FiStar className="text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{gig.rating} ({gig.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FiClock className="mr-1" />
                    <span>{gig.duration}</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                <div className="flex items-center">
                  <FiDollarSign className="text-gray-600 mr-1" />
                  <span className="font-medium">{gig.price}</span>
                </div>
                <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Pagination */}
             {/* Updated Pagination with working buttons */}
      <section className="mt-8 flex justify-center">
        <nav className="inline-flex rounded-md shadow">
          <button 
            onClick={handlePrevious}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium ${
              currentPage === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Previous
          </button>
          
          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
            <button
              key={number}
              onClick={() => paginate(number)}
              className={`px-3 py-2 border-t border-b border-gray-300 text-sm font-medium ${
                currentPage === number 
                  ? `text-[#4361ee] bg-indigo-50` 
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {number}
            </button>
          ))}
          
          <button 
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium ${
              currentPage === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Next
          </button>
        </nav>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">GigConnect</h3>
              <p className="text-sm text-gray-500">Connecting talent with opportunity in the gig economy.</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">For Freelancers</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Browse Gigs</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Profile Setup</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Get Verified</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">For Clients</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Post a Gig</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Find Talent</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Payment Options</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wider mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">About Us</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Contact</a></li>
                <li><a href="#" className="text-sm text-gray-500 hover:text-gray-800">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500 text-center">
            © 2023 GigConnect. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GigConnectPlatform;