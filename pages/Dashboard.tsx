import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <>
      {/* Abstract Background Glow */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
      
      {/* Header */}
      <header className="h-20 flex items-center justify-between px-8 z-10 shrink-0">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Good Evening, Sarah</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">Here's what's happening at The Obsidian Heights today.</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden lg:block">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
            <input 
              className="bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-sm rounded-full pl-10 pr-4 py-2 w-64 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder-slate-400 text-slate-900 dark:text-slate-200" 
              placeholder="Search..." 
              type="text"
            />
          </div>
          <button className="relative p-2 text-slate-400 hover:text-white transition-colors">
            <span className="material-icons">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-background-dark"></span>
          </button>
        </div>
      </header>

      {/* Scrollable Dashboard Content */}
      <div className="flex-1 overflow-y-auto px-8 pb-8 z-10 custom-scrollbar">
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
          {/* Unit Overview Card */}
          <div className="lg:col-span-8 glass-panel rounded-xl p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <span className="material-icons text-9xl text-white">home_work</span>
            </div>
            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start h-full">
              <div className="w-full md:w-48 h-32 md:h-full rounded-lg overflow-hidden flex-shrink-0 relative shadow-lg">
                <img 
                  alt="Apartment Interior" 
                  className="w-full h-full object-cover" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5__P7xpWpE-vJk79tyMPMlIBSXH-cItwPaNsXt1yRg25c-RcEiCv_9xbCyuw0mAHniGfz64q7etydT9pJl9i93Acgf4o9BJR7Q_Y7C6SxVvOzmctIvKzt5nXWACfnpuoBR3c9GjvqIBR9HE23HR3L3oV3Mo7WVPjIcXdtp8I_XH6QQA9HyvEQOdyYSFn6r0BGEW3ojE1Xd7il0LGbzf-R_TJH8ekj35_psUZON22RbR8TeImDkoaDHqLoLizBq0vELoJZs5scRlzh"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-3">
                  <span className="text-xs font-bold text-white uppercase tracking-wide bg-primary/80 px-2 py-1 rounded backdrop-blur-sm">Occupied</span>
                </div>
              </div>
              <div className="flex-1 w-full">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">The Obsidian Heights</h3>
                    <p className="text-slate-400 text-sm flex items-center gap-1">
                      <span className="material-icons text-xs">location_on</span>
                      1200 Downtown Blvd, Metropolis
                    </p>
                  </div>
                  <button className="text-primary hover:text-white transition-colors text-sm font-medium">View Details</button>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                    <span className="text-xs text-slate-400 block mb-1">Unit Number</span>
                    <span className="text-xl font-mono text-white">402</span>
                  </div>
                  <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                    <span className="text-xs text-slate-400 block mb-1">Lease Status</span>
                    <span className="text-sm font-medium text-green-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-green-500"></span>
                      Active until 2024
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Balance Due Card */}
          <div className="lg:col-span-4 glass-panel rounded-xl p-6 flex flex-col justify-between relative overflow-hidden border-l-4 border-l-primary">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">Balance Due</h3>
                <p className="text-xs text-slate-400 mt-1">Rent & Utilities for October</p>
              </div>
              <span className="bg-red-500/20 text-red-400 text-xs font-bold px-2 py-1 rounded border border-red-500/20">Unpaid</span>
            </div>
            <div className="mb-6">
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white tracking-tight">$2,450</span>
                <span className="text-xl text-slate-400">.00</span>
              </div>
              <p className="text-sm text-slate-400 mt-2 flex items-center gap-2">
                <span className="material-icons text-sm text-orange-400">warning</span>
                Due on Oct 1st, 2023
              </p>
            </div>
            <Link to="/payments" className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 px-4 rounded-lg transition-all shadow-lg shadow-primary/20 flex justify-center items-center gap-2">
              <span>Pay Now</span>
              <span className="material-icons text-sm">arrow_forward</span>
            </Link>
          </div>
        </div>

        {/* Middle Section: Quick Actions & Announcements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {/* Quick Actions Grid */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="material-icons text-primary">bolt</span>
              Quick Actions
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/amenities" className="glass-panel glass-panel-hover p-4 rounded-xl flex flex-col items-center justify-center gap-3 transition-all group h-32">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="material-icons text-primary group-hover:text-white text-2xl">event_available</span>
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Book Amenity</span>
              </Link>
              <button className="glass-panel glass-panel-hover p-4 rounded-xl flex flex-col items-center justify-center gap-3 transition-all group h-32">
                <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                  <span className="material-icons text-orange-500 group-hover:text-white text-2xl">build</span>
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Request Fix</span>
              </button>
              <button className="glass-panel glass-panel-hover p-4 rounded-xl flex flex-col items-center justify-center gap-3 transition-all group h-32">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center group-hover:bg-emerald-500 group-hover:scale-110 transition-all duration-300">
                  <span className="material-icons text-emerald-500 group-hover:text-white text-2xl">local_parking</span>
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Visitor Pass</span>
              </button>
              <button className="glass-panel glass-panel-hover p-4 rounded-xl flex flex-col items-center justify-center gap-3 transition-all group h-32">
                <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500 group-hover:scale-110 transition-all duration-300">
                  <span className="material-icons text-purple-500 group-hover:text-white text-2xl">local_shipping</span>
                </div>
                <span className="text-sm font-medium text-slate-500 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white">Package Locker</span>
              </button>
            </div>
          </div>

          {/* Recent Announcements Widget */}
          <div className="lg:col-span-1 glass-panel rounded-xl p-0 overflow-hidden flex flex-col h-full">
            <div className="p-4 border-b border-slate-200 dark:border-slate-700/50 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/30">
              <h3 className="font-bold text-slate-900 dark:text-white">Announcements</h3>
              <a href="#" className="text-xs text-primary hover:text-blue-400">View All</a>
            </div>
            <div className="p-4 space-y-4 flex-1 overflow-y-auto max-h-80 custom-scrollbar">
              {[
                { title: 'Elevator Maintenance', date: 'Today', desc: 'Elevator B will be down for scheduled maintenance from 2 PM to 4 PM.', icon: 'info', color: 'blue' },
                { title: 'Community BBQ', date: 'Oct 12', desc: 'Join us on the rooftop terrace for our annual fall BBQ! RSVP by Friday.', icon: 'celebration', color: 'green' },
                { title: 'Fire Alarm Testing', date: 'Oct 15', desc: 'Mandatory fire alarm testing will occur on all floors starting at 10 AM.', icon: 'warning', color: 'red' }
              ].map((item, i) => (
                <div key={i} className="flex gap-3 group cursor-pointer">
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-8 h-8 rounded-full bg-${item.color}-500/20 flex items-center justify-center border border-${item.color}-500/30`}>
                      <span className={`material-icons text-${item.color}-500 dark:text-${item.color}-400 text-sm`}>{item.icon}</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-4 border-b border-slate-200 dark:border-slate-700/50 group-last:border-0">
                    <div className="flex justify-between items-start">
                      <h4 className="text-sm font-medium text-slate-900 dark:text-slate-200 group-hover:text-primary transition-colors">{item.title}</h4>
                      <span className="text-[10px] text-slate-500 bg-slate-200 dark:bg-slate-800 px-1.5 py-0.5 rounded">{item.date}</span>
                    </div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed line-clamp-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Upcoming & Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Next Booking */}
          <div className="glass-panel rounded-xl p-5 flex items-center gap-4 border border-slate-200 dark:border-slate-700/50">
            <div className="w-16 h-16 rounded-lg bg-slate-800 flex-shrink-0 overflow-hidden relative">
              <img 
                className="w-full h-full object-cover opacity-80" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA33zxOmVTaGb7Qa8LCh4XlnnQqugFvGyoKHRM3zKRsssyCDrHOEBlzPZEdbtBm1D4m2A7ALVxrLC1X-SUFZ_m6AeSUU15fp_vP17yTCsO4tyr2DYYhnIke7RPr6i-nKiGZCqcb_i-dA01L1hxDq7TBGZIa9SkR8MZ_LUFillM4kuNYnlZrcWK5TwOB3E5ZR4FH9m49QHLc68sBummIUkoYO5_CaHX8cxfYUCCv3pMaYj2hzKFjf_OlWZPVggRjHiT1vu1E7NiHqMgv"
                alt="Gym"
              />
              <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                <span className="text-xs font-bold text-white bg-black/50 px-1 rounded">TOM</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">Upcoming Reservation</p>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">Fitness Center Slot</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-1">
                <span className="material-icons text-xs">schedule</span>
                Tomorrow, 7:00 AM - 8:00 AM
              </p>
            </div>
            <button className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="material-icons text-sm">chevron_right</span>
            </button>
          </div>

          {/* Package Status */}
          <div className="glass-panel rounded-xl p-5 flex items-center gap-4 border border-slate-200 dark:border-slate-700/50">
            <div className="w-16 h-16 rounded-lg bg-indigo-500/10 flex-shrink-0 flex items-center justify-center border border-indigo-500/20">
              <span className="material-icons text-3xl text-indigo-500 dark:text-indigo-400">inventory_2</span>
            </div>
            <div className="flex-1">
              <p className="text-xs text-indigo-500 dark:text-indigo-400 font-semibold uppercase tracking-wide mb-1">Package Room</p>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">You have 1 package</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2 mt-1">
                <span className="material-icons text-xs">vpn_key</span>
                Code: <span className="font-mono text-slate-900 dark:text-white bg-slate-200 dark:bg-slate-700 px-1 rounded">8921</span>
              </p>
            </div>
            <button className="w-8 h-8 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
              <span className="material-icons text-sm">chevron_right</span>
            </button>
          </div>
        </div>

        <footer className="mt-8 text-center text-xs text-slate-500 pb-4">
          © 2023 LuxeLiving Property Management. All rights reserved.
        </footer>
      </div>
    </>
  );
};

export default Dashboard;