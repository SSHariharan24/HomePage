import React, { useState, useEffect, useRef } from 'react';
import { 
  FiSearch, 
  FiMessageSquare, 
  FiUsers, 
  FiHelpCircle, 
  FiMapPin, 
  FiChevronDown,
  FiUser,
  FiSettings,
  FiBell,
  FiMenu,
  FiX
} from 'react-icons/fi';

const GigHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [salaryRange, setSalaryRange] = useState('$1,200 - $20,000');
  const [designerType, setDesignerType] = useState('UI/UX Designer');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const salaryRanges = [
    '$1,200 - $20,000',
    '$2,000 - $15,000',
    '$3,000 - $10,000'
  ];

  const designerOptions = [
    'UI/UX Designer',
    'Graphic Designer',
    'Product Designer',
    'Motion Designer'
  ];

  const navItems = [
    { icon: FiMessageSquare, label: 'Messages', href: '/messages' },
    { icon: FiUsers, label: 'Hiring', href: '/hiring' },
    { label: 'Community', href: '/community' },
    { icon: FiHelpCircle, label: 'FAQ', href: '/faq' }
  ];

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  return (
    <header className="bg-gray-900 text-gray-200 w-full fixed top-0 left-0 right-0 z-50 shadow-lg">
      {/* Mobile Header */}
      <div className="md:hidden flex justify-between items-center p-4 border-b border-gray-800 w-full">
        <h1 className="text-xl font-bold">
          <span className="text-indigo-400">Lucky</span>
          <span className="text-emerald-400">Job</span>
        </h1>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-gray-300 hover:text-white transition-colors"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Desktop Header */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block w-full`}>
        {/* Top Navigation Bar */}
        <div className="w-full bg-gray-900 py-3 px-6">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto">
            {/* Logo */}
            <a href="/" className="text-2xl font-bold min-w-max mr-8 hover:text-white transition-colors">
              <span className="text-indigo-400">Lucky</span>
              <span className="text-emerald-400">Job</span>
            </a>

            {/* Search Bar */}
            <div className="flex-1 mx-8 max-w-4xl">
              <div className="relative w-full">
                <label htmlFor="search-input" className="sr-only">Search jobs</label>
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiSearch className="text-gray-400" />
                </div>
                <input
                  id="search-input"
                  type="text"
                  placeholder="Find jobs, companies, or keywords"
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white placeholder-gray-400 transition-all"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* User Controls */}
            <div className="flex items-center gap-4 min-w-max ml-8">
              <div className="flex items-center text-gray-300 whitespace-nowrap hover:text-white transition-colors cursor-pointer">
                <FiMapPin className="mr-2 text-gray-400" />
                <span>New York, NY</span>
              </div>
              
              <button 
                className="p-2 text-gray-300 hover:text-white relative transition-colors"
                aria-label="Notifications"
              >
                <FiBell className="text-xl" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              
              <button 
                className="p-2 text-gray-300 hover:text-white transition-colors"
                aria-label="Settings"
              >
                <FiSettings className="text-xl" />
              </button>
              
              <button 
                className="p-2 text-gray-300 hover:text-white transition-colors"
                aria-label="User profile"
              >
                <FiUser className="text-xl" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Navigation Bar */}
        <div className="w-full bg-gray-800 border-t border-gray-700 px-6">
          <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-screen-2xl mx-auto py-2">
            {/* Main Navigation */}
            <nav className="flex items-center space-x-8">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href}
                  className="flex items-center hover:text-indigo-400 transition-colors py-1 whitespace-nowrap group"
                >
                  {item.icon && (
                    <item.icon className="mr-2 text-gray-400 group-hover:text-indigo-400 transition-colors" />
                  )}
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Filters */}
            <div className="flex items-center space-x-6 mt-2 md:mt-0" ref={dropdownRef}>
              {/* Designer Dropdown */}
              <div className="relative">
                <button 
                  className={`flex items-center px-3 py-1 whitespace-nowrap transition-colors ${activeDropdown === 'designer' ? 'text-white' : 'hover:text-white'}`}
                  onClick={() => toggleDropdown('designer')}
                  aria-expanded={activeDropdown === 'designer'}
                  aria-haspopup="true"
                >
                  <span>Designer</span>
                  <FiChevronDown className={`ml-1 transition-transform ${activeDropdown === 'designer' ? 'transform rotate-180' : ''}`} />
                </button>
                {activeDropdown === 'designer' && (
                  <div className="absolute z-20 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-lg min-w-[180px]">
                    {designerOptions.map((option, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-2 hover:bg-gray-600 cursor-pointer transition-colors"
                        onClick={() => {
                          setDesignerType(option);
                          setActiveDropdown(null);
                        }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <a href="#" className="hover:text-white px-3 py-1 whitespace-nowrap transition-colors">
                Work location
              </a>
              
              <a href="#" className="hover:text-white px-3 py-1 whitespace-nowrap transition-colors">
                Experience
              </a>
              
              <a href="#" className="hover:text-white px-3 py-1 whitespace-nowrap transition-colors">
                Per month
              </a>

              {/* Salary Range Dropdown */}
              <div className="relative">
                <button 
                  className={`flex items-center px-3 py-1 whitespace-nowrap transition-colors ${activeDropdown === 'salary' ? 'text-white' : 'hover:text-white'}`}
                  onClick={() => toggleDropdown('salary')}
                  aria-expanded={activeDropdown === 'salary'}
                  aria-haspopup="true"
                >
                  <span>Salary range</span>
                  <FiChevronDown className={`ml-1 transition-transform ${activeDropdown === 'salary' ? 'transform rotate-180' : ''}`} />
                </button>
                <span className="ml-2 font-medium">{salaryRange}</span>
                {activeDropdown === 'salary' && (
                  <div className="absolute z-20 right-0 mt-1 bg-gray-700 border border-gray-600 rounded-md shadow-lg min-w-[180px]">
                    {salaryRanges.map((range, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-2 hover:bg-gray-600 cursor-pointer transition-colors"
                        onClick={() => {
                          setSalaryRange(range);
                          setActiveDropdown(null);
                        }}
                      >
                        {range}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default GigHeader;