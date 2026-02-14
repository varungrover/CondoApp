import React from 'react';

const Amenities: React.FC = () => {
  return (
    <div className="flex-grow flex flex-col lg:flex-row max-w-7xl mx-auto w-full p-4 lg:p-8 gap-8 h-full overflow-hidden">
      {/* Left Column: Discovery & Amenities */}
      <section className="flex-grow lg:w-2/3 flex flex-col gap-8 overflow-y-auto custom-scrollbar pr-2">
        {/* Hero Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">Amenity Booking</h1>
            <p className="text-gray-500 dark:text-gray-400">Discover and reserve spaces for your next activity.</p>
          </div>
          {/* Filters */}
          <div className="flex items-center gap-2 bg-white dark:bg-surface-dark p-1 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <button className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium shadow-md">All</button>
            <button className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-surface-hover text-sm font-medium transition-colors">Indoor</button>
            <button className="px-4 py-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-surface-hover text-sm font-medium transition-colors">Outdoor</button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-icons text-gray-400">search</span>
          </div>
          <input className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-xl leading-5 bg-white dark:bg-surface-dark text-gray-900 dark:text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-sm group-hover:shadow-md" placeholder="Search for lounge, gym, pool..." type="text" />
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
          {/* Card 1: Rooftop Lounge */}
          <div className="group relative bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer ring-2 ring-primary ring-offset-2 ring-offset-background-dark">
            <div className="relative h-48 w-full overflow-hidden">
              <img alt="Rooftop lounge at sunset" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfU-avXh6TqVD9jA_j4_Ft-ZZfNilpx5AWn2yBZhC4vkKwhnQu_PEvLAIC44KCsrs61u3vfoYlZCmFGqmg3D-5F8xFP-R8KkIowLBA2MnXlGXSFeQtegF05npp6jKILnkfQq7XYYJjvJUHdjGW2NR--V_Hx_pNb-H4bmihbYuJZkngLOaSQjD3iz0H-cTQu6z9izNoemwj4AHlfwagevh2wUYidBf_GjqE4mRIKF_7Jo5EH82pSJl4I5SkZWRL9PPHQFGMvME9OFp3" />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 backdrop-blur-sm border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 mr-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  Open Now
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Skyline Rooftop Lounge</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                    <span className="material-icons text-sm">people</span> Max 25 guests
                  </p>
                </div>
                <button className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                  <span className="material-icons text-sm">favorite</span>
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">Premium</span>
                <span className="text-sm font-medium text-primary group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Book Now <span className="material-icons text-sm ml-1">arrow_forward</span>
                </span>
              </div>
            </div>
          </div>
          {/* Card 2: Fitness Center */}
          <div className="group relative bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer">
            <div className="relative h-48 w-full overflow-hidden">
              <img alt="Modern gym equipment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtFYifELWJsuhCKrkWMdfqJ-l-haYw7GI-xsuPmi0ThyJBetI5W7cC80XcidSPEBYnWOYIUsCly7RJ24Wt8_TTWUdWPtbPExYxN0hf7dcxxfIqnToLj3tkWuKa5hNuu7GNqV-8NgRdn-NNpWYRZa8-6AlcMsDJ483ETh4KRjJzp6f2a0ASEYuESdjYuaNnFLb_ZFDrvmPKiU6ms9pwrv0QkOuM63KwOuko8OnEC_Bvs9LS8T0iJete5ApbWK7UzJWKJ-F_DSH2jK8X" />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 backdrop-blur-sm border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 mr-1.5 bg-emerald-500 rounded-full"></span>
                  Open Now
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">Core Fitness Center</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                    <span className="material-icons text-sm">people</span> Max 10 guests
                  </p>
                </div>
                <button className="h-8 w-8 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                  <span className="material-icons text-sm">favorite_border</span>
                </button>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">24/7 Access</span>
                <span className="text-sm font-medium text-gray-500 group-hover:text-primary transition-colors">Select</span>
              </div>
            </div>
          </div>
          {/* Card 3: Party Room */}
          <div className="group relative bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl hover:border-yellow-500/50 transition-all duration-300 cursor-pointer opacity-90">
            <div className="relative h-48 w-full overflow-hidden">
              <img alt="Party room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcC2hUCMiY_Tp7D2F_BYQa1HC5GChBV2kO8Q--5puxIfCnTEKd-Dlj5A-N3iao6lFE4MchShzj6Sg_C2ap1HlCi6aSqoYRiehy_PuMdXxUnaZkNxltP9-Mrc1Tg-OKOtxPsJGvl2f_60AYs3WQJb9BxX3FmwnF4jSpT6zumrUoghget0ZoNnmKDamrD6g2pz5biTs-BKbuaV6YaQMbmqr0BC6pntc5McZ57V6DYkicI2FRDGwbUuN1_G_U1rpUr1VT2AosYbcTHThN" />
              <div className="absolute top-3 left-3">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900/60 dark:text-yellow-300 backdrop-blur-sm border border-yellow-500/20">
                  <span className="w-1.5 h-1.5 mr-1.5 bg-yellow-500 rounded-full"></span>
                  High Demand
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-yellow-500 transition-colors">Grand Party Room</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                    <span className="material-icons text-sm">people</span> Max 50 guests
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Cleaning Fee: $50</span>
                <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">Join Waitlist</span>
              </div>
            </div>
          </div>
          {/* Card 4: Pool */}
          <div className="group relative bg-white dark:bg-surface-dark rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 cursor-not-allowed opacity-60">
            <div className="relative h-48 w-full overflow-hidden">
              <div className="absolute inset-0 bg-gray-900/50 z-10 flex items-center justify-center">
                <span className="text-white font-bold tracking-wider uppercase border-2 border-white px-4 py-2">Closed</span>
              </div>
              <img alt="Swimming pool" className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBR_PL8yZ9DK88i232ZpuNFV9rmNOp0U6e7al2P_WBjjYbFTU6xbGL8EvgUyXUi5dlFN1xf0ex8fA5uYDGPiRA4d2Bf-oWFhqzvuY1uT3Kloy14oU-ty4BseQBgFx9BFgd-o5EH5GXOSX52Hmv4ECsDrl1T2SmlAnLObP9YbRn26gD_W1jlagSy6FMfzeydtHeI9jI9MkPJlZSzSW5uvGDHQ2BlE5PKN4_8Aht2St-rd5B-VOav1i_JuqJt7UNE5F2_hLU9ifkEG787" />
              <div className="absolute top-3 left-3 z-20">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/80 dark:text-red-200 backdrop-blur-sm border border-red-500/20">
                  <span className="w-1.5 h-1.5 mr-1.5 bg-red-500 rounded-full"></span>
                  Maintenance
                </span>
              </div>
            </div>
            <div className="p-5">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Infinity Pool</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-1">
                    <span className="material-icons text-sm">build</span> Reopening Oct 15
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">Heated</span>
                <span className="text-sm font-medium text-gray-500">Unavailable</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Right Column: Booking Panel */}
      <aside className="lg:w-1/3 w-full flex-shrink-0">
        <div className="sticky top-6 glass-panel rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl p-6 flex flex-col h-[calc(100vh-4rem)]">
          {/* Selected Amenity Header */}
          <div className="flex items-center gap-4 pb-6 border-b border-gray-200 dark:border-gray-700">
            <div className="h-16 w-16 rounded-xl overflow-hidden flex-shrink-0 border border-gray-600">
              <img alt="Thumbnail" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7zwG1PMx8HVVbgovTRgwoRE2uEdnpwIwFztWivSQ2jgm6y1uEJxW-b_DvV-MveCVpigqm_BSfdPD1IrTyTiDVvm_Urhtvz1mbim_5d_hDF23jWbRT32VkdvXMXuDW5B2JG4-R_BQswV08tdzVcOA5gHv7Kqrd1q6cR3N6Slj1gLV6Y9Pfj5AoYFSh56wjnXmd63sMQFtVpSCo2vyVObjXncMoeXHaSLiXQtSBsFNLumdk_Os8-gllzL4W7yDNwG97_X3kY7ANpfKQ" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white leading-tight">Skyline Lounge</h2>
              <div className="flex items-center text-primary text-sm font-medium mt-1">
                <span className="material-icons text-sm mr-1">star</span> 4.9 (128 reviews)
              </div>
            </div>
          </div>
          <div className="flex-grow overflow-y-auto pr-2 mt-4 space-y-6 custom-scrollbar">
            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider text-xs">Select Date</label>
              <div className="bg-background-dark rounded-xl p-4 border border-gray-700">
                <div className="flex justify-between items-center mb-4 text-white">
                  <button className="p-1 hover:bg-gray-700 rounded"><span className="material-icons text-sm">chevron_left</span></button>
                  <span className="font-semibold">October 2023</span>
                  <button className="p-1 hover:bg-gray-700 rounded"><span className="material-icons text-sm">chevron_right</span></button>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-gray-500">
                  <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-sm">
                  <div className="p-2 text-gray-600">28</div>
                  <div className="p-2 text-gray-600">29</div>
                  <div className="p-2 text-gray-600">30</div>
                  <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300">1</div>
                  <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300">2</div>
                  <div className="p-2 bg-primary text-white rounded-lg shadow-lg shadow-primary/30 cursor-pointer font-bold">3</div>
                  <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300">4</div>
                  <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300">5</div>
                  <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300">6</div>
                  <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300">7</div>
                  <div className="p-2 hover:bg-gray-700 rounded-lg cursor-pointer text-gray-300">8</div>
                </div>
              </div>
            </div>
            {/* Time Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider text-xs">Available Slots</label>
              <div className="grid grid-cols-2 gap-3">
                <button className="py-2.5 px-3 rounded-lg border border-gray-700 bg-surface-dark text-gray-400 text-sm hover:border-primary hover:text-white transition-all text-center">09:00 - 11:00</button>
                <button className="py-2.5 px-3 rounded-lg border border-gray-700 bg-surface-dark text-gray-400 text-sm hover:border-primary hover:text-white transition-all text-center">11:00 - 13:00</button>
                <button className="relative py-2.5 px-3 rounded-lg bg-primary/20 border border-primary text-white text-sm font-medium transition-all text-center shadow-[0_0_10px_rgba(43,108,238,0.2)]">
                  14:00 - 16:00
                  <span className="absolute -top-2 -right-2 h-5 w-5 bg-primary text-white text-[10px] flex items-center justify-center rounded-full border border-background-dark">
                    <span className="material-icons" style={{ fontSize: '12px' }}>check</span>
                  </span>
                </button>
                <button className="py-2.5 px-3 rounded-lg border border-gray-700 bg-surface-dark text-gray-400 text-sm hover:border-primary hover:text-white transition-all text-center">16:00 - 18:00</button>
                <button className="py-2.5 px-3 rounded-lg border border-gray-800 bg-transparent text-gray-600 text-sm cursor-not-allowed text-center opacity-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-[1px]"></div>
                  19:00 - 21:00
                </button>
              </div>
            </div>
            {/* Add-ons */}
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-3 uppercase tracking-wider text-xs">Extras</label>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" className="form-checkbox h-5 w-5 text-primary rounded border-gray-600 bg-surface-dark focus:ring-primary focus:ring-offset-background-dark transition duration-150 ease-in-out" />
                  <span className="text-sm text-gray-300 group-hover:text-white">Request cleaning service (+$25)</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input type="checkbox" defaultChecked className="form-checkbox h-5 w-5 text-primary rounded border-gray-600 bg-surface-dark focus:ring-primary focus:ring-offset-background-dark transition duration-150 ease-in-out" />
                  <span className="text-sm text-gray-300 group-hover:text-white">BBQ Access</span>
                </label>
              </div>
            </div>
          </div>
          {/* Footer / Action */}
          <div className="mt-auto pt-6 border-t border-gray-700">
            <div className="flex justify-between items-end mb-4">
              <span className="text-sm text-gray-400">Total Deposit</span>
              <span className="text-2xl font-bold text-white">$150.00</span>
            </div>
            <button className="w-full bg-primary hover:bg-blue-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg shadow-blue-900/40 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex justify-center items-center gap-2">
              <span>Confirm Booking</span>
              <span className="material-icons text-sm">arrow_forward</span>
            </button>
            <p className="text-center text-xs text-gray-500 mt-3">Free cancellation until 24 hours before.</p>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Amenities;