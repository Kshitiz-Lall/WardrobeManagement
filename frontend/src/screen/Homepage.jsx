import React from 'react';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg bg-white overflow-hidden shadow">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-gray-600 mb-3 text-lg">Browse through your clothes, organize them, and create amazing outfit combinations.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <div className="p-5">
                      <h3 className="text-lg font-medium text-gray-900">Tops</h3>
                      <p className="mt-2 text-gray-600">Browse your collection of tops.</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <div className="p-5">
                      <h3 className="text-lg font-medium text-gray-900">Bottoms</h3>
                      <p className="mt-2 text-gray-600">Browse your collection of bottoms.</p>
                    </div>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
                    <div className="p-5">
                      <h3 className="text-lg font-medium text-gray-900">Accessories</h3>
                      <p className="mt-2 text-gray-600">Browse your collection of accessories.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Homepage;
