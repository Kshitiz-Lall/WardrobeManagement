import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-primary shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-600">
              Wardrobe
            </h1>
          </div>
          <div className="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
            <div className="max-w-lg w-full lg:max-w-xs">
              <label htmlFor="search" className="sr-only">Search</label>
              <div className="relative">
                <input
                  id="search"
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:bg-white focus:text-gray-900 sm:text-sm"
                  placeholder="Search"
                  type="search"
                />
              </div>
            </div>
          </div>
          <div className="ml-4 flex items-center md:ml-6">
            {["Home", "Categories", "Outfits", "Profile"].map((item) => (
              <button
                key={item}
                className="text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
