import React, { useState, useMemo } from 'react';
import GigHeader from './GigHeader';
import GigSearch from './GigSearch';
import GigFilters from './GigFilters';
import GigCard from './GigCard';
import GigPagination from './GigPagination';
import GigFooter from './GigFooter';

const GigConnectPlatform = () => {
  // Sample data with all required fields
  const allGigs = [
    {
      id: 1,
      title: 'Website Development',
      description: 'Need a responsive website for my small business using React and Node.js',
      skills: ['React', 'Node.js', 'MongoDB'],
      price: 750, // Numeric value for filtering/sorting
      priceDisplay: '$500-$1000',
      duration: '2-4 weeks',
      rating: 4.8,
      reviews: 42,
      client: 'TechSolutions Inc.',
      verified: true,
      category: 'Development',
      postedDate: new Date('2023-05-15') // Date object for sorting
    },
    {
      id: 2,
      title: 'Mobile App Design',
      description: 'Looking for a UI/UX designer to create wireframes and prototypes for a fitness app',
      skills: ['Figma', 'UI/UX', 'Prototyping'],
      price: 450,
      priceDisplay: '$300-$600',
      duration: '1-2 weeks',
      rating: 4.5,
      reviews: 28,
      client: 'HealthFit',
      verified: false,
      category: 'Design',
      postedDate: new Date('2023-05-20')
    },
    {
      id: 3,
      title: 'Content Writing',
      description: 'Need blog articles about digital marketing trends (1000 words each)',
      skills: ['Content Writing', 'SEO', 'Digital Marketing'],
      price: 75,
      priceDisplay: '$50-$100',
      duration: '3-5 days',
      rating: 4.7,
      reviews: 35,
      client: 'MarketingPro',
      verified: true,
      category: 'Writing',
      postedDate: new Date('2023-05-10')
    },
    {
      id: 4,
      title: 'Social Media Management',
      description: 'Need someone to manage Instagram and Facebook accounts for a beauty brand',
      skills: ['Social Media', 'Content Creation', 'Marketing'],
      price: 600,
      priceDisplay: '$400-$800',
      duration: '1 month',
      rating: 4.6,
      reviews: 31,
      client: 'Glamour Cosmetics',
      verified: true,
      category: 'Marketing',
      postedDate: new Date('2023-05-18')
    },
    {
      id: 5,
      title: 'Data Analysis',
      description: 'Analyze sales data and create visualizations for quarterly report',
      skills: ['Python', 'Pandas', 'Data Visualization'],
      price: 900,
      priceDisplay: '$600-$1200',
      duration: '3 weeks',
      rating: 4.9,
      reviews: 47,
      client: 'AnalyticsPro',
      verified: true,
      category: 'Data',
      postedDate: new Date('2023-05-22')
    },
    {
      id: 6,
      title: 'Logo Design',
      description: 'Create a modern logo and variety of theme level design for a new tech startup',
      skills: ['Illustrator', 'Logo Design', 'Branding'],
      price: 350,
      priceDisplay: '$200-$500',
      duration: '1-2 weeks',
      rating: 4.4,
      reviews: 23,
      client: 'StartUpVision',
      verified: false,
      category: 'Design',
      postedDate: new Date('2023-05-12')
    },
    {
      id: 7,
      title: 'SEO Optimization',
      description: 'Improve website SEO and increase organic traffic',
      skills: ['SEO', 'Keyword Research', 'Google Analytics'],
      price: 525,
      priceDisplay: '$350-$700',
      duration: '2-3 weeks',
      rating: 4.7,
      reviews: 38,
      client: 'DigitalGrowth',
      verified: true,
      category: 'Marketing',
      postedDate: new Date('2023-05-17')
    },
    {
      id: 8,
      title: 'Video Editing',
      description: 'Edit promotional and content based videos for YouTube channel ',
      skills: ['Premiere Pro', 'After Effects', 'Video Editing'],
      price: 425,
      priceDisplay: '$250-$600',
      duration: '1 week',
      rating: 4.5,
      reviews: 29,
      client: 'MediaCreators',
      verified: true,
      category: 'Video',
      postedDate: new Date('2023-05-19')
    }
  ];

  // State management
  const [filters, setFilters] = useState({
    searchQuery: '',
    category: '',
    minPrice: 0,
    maxPrice: 2000,
    verifiedOnly: false
  });
  const [sortBy, setSortBy] = useState('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const gigsPerPage = 3;

  // Get unique categories
  const categories = useMemo(() => [...new Set(allGigs.map(gig => gig.category))], [allGigs]);

  // Filter and sort gigs
  const { filteredGigs, currentGigs, totalPages } = useMemo(() => {
    const filtered = allGigs.filter(gig => {
      const matchesSearch = gig.title.toLowerCase().includes(filters.searchQuery.toLowerCase()) || 
                           gig.description.toLowerCase().includes(filters.searchQuery.toLowerCase());
      const matchesCategory = !filters.category || gig.category === filters.category;
      const matchesPrice = gig.price >= filters.minPrice && gig.price <= filters.maxPrice;
      const matchesVerified = !filters.verifiedOnly || gig.verified;
      
      return matchesSearch && matchesCategory && matchesPrice && matchesVerified;
    });

    const sorted = [...filtered].sort((a, b) => {
      switch(sortBy) {
        case 'newest': return b.postedDate - a.postedDate;
        case 'highest-price': return b.price - a.price;
        case 'lowest-price': return a.price - b.price;
        case 'best-rating': return b.rating - a.rating;
        default: return 0;
      }
    });

    const totalPages = Math.ceil(sorted.length / gigsPerPage);
    const indexOfFirstGig = (currentPage - 1) * gigsPerPage;
    const currentGigs = sorted.slice(indexOfFirstGig, indexOfFirstGig + gigsPerPage);

    return {
      filteredGigs: sorted,
      currentGigs,
      totalPages,
      totalCount: filtered.length
    };
  }, [allGigs, filters, sortBy, currentPage, gigsPerPage]);

  // Event handlers
  const handleFilterChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);

  return (
    <div className="min-h-screen bg-gray-50">
      <GigHeader />
      
      <main className="container mx-auto px-4 py-6">
        <GigSearch 
          searchQuery={filters.searchQuery}
          onSearchChange={handleFilterChange}
          onSearchSubmit={handleSearchSubmit}
        />
        
        <GigFilters 
          categories={categories}
          filters={{ ...filters, totalCount: filteredGigs.length }}
          sortBy={sortBy}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
        
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {currentGigs.length > 0 ? (
            currentGigs.map(gig => <GigCard key={gig.id} gig={gig} />)
          ) : (
            <div className="col-span-3 text-center py-12">
              <h3 className="text-lg font-medium text-gray-900">No gigs found</h3>
              <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </section>
        
        {totalPages > 1 && (
          <GigPagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={paginate}
            onPrevPage={prevPage}
            onNextPage={nextPage}
          />
        )}
      </main>
      
      <GigFooter />
    </div>
  );
};

export default GigConnectPlatform;