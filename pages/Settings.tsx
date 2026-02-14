import React, { useState } from 'react';

const Settings: React.FC = () => {
   const [activeTab, setActiveTab] = useState('notifications');

   return (
      <div className="flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full overflow-y-auto custom-scrollbar">
         <div className="mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Account Settings</h1>
            <p className="mt-1 text-slate-500 dark:text-slate-400">Manage your preferences and security.</p>
         </div>

         <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Navigation */}
            <nav className="w-full md:w-64 flex-shrink-0 space-y-1">
               {['General', 'Notifications', 'Privacy & Security', 'Billing'].map((tab) => {
                  const id = tab.toLowerCase().split(' ')[0];
                  const isActive = activeTab === id;
                  const iconMap: Record<string, string> = {
                      general: 'tune',
                      notifications: 'notifications',
                      privacy: 'lock',
                      billing: 'credit_card'
                  };

                  return (
                     <button
                        key={tab}
                        onClick={() => setActiveTab(id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                           isActive
                              ? 'bg-primary text-white shadow-md transform scale-[1.02]'
                              : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                     >
                        <span className={`material-icons text-lg ${isActive ? 'text-white' : 'text-slate-400'}`}>
                           {iconMap[id]}
                        </span>
                        {tab}
                     </button>
                  );
               })}
            </nav>

            {/* Content Area */}
            <div className="flex-1 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden min-h-[500px]">
               {/* Notifications Tab Content */}
               {activeTab === 'notifications' && (
                  <div className="p-6 md:p-8 space-y-8 animate-fadeIn">
                     <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <span className="material-icons text-primary">email</span>
                            Email Notifications
                        </h2>
                        <div className="space-y-4">
                           {['Community Announcements', 'Payment Confirmations', 'Maintenance Updates', 'New Documents'].map((item) => (
                              <div key={item} className="flex items-center justify-between py-2 group">
                                 <div>
                                    <p className="font-medium text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors">{item}</p>
                                    <p className="text-xs text-slate-500">Receive emails about {item.toLowerCase()}.</p>
                                 </div>
                                 <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 dark:peer-focus:ring-primary/80 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                 </label>
                              </div>
                           ))}
                        </div>
                     </div>
                     <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                            <span className="material-icons text-primary">smartphone</span>
                            Push Notifications
                        </h2>
                        <div className="space-y-4">
                           {['Package Arrival', 'Visitor Access', 'Emergency Alerts'].map((item) => (
                              <div key={item} className="flex items-center justify-between py-2 group">
                                 <div>
                                    <p className="font-medium text-slate-900 dark:text-white text-sm group-hover:text-primary transition-colors">{item}</p>
                                    <p className="text-xs text-slate-500">Instant alerts for {item.toLowerCase()}.</p>
                                 </div>
                                 <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" className="sr-only peer" defaultChecked />
                                    <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary/30 dark:peer-focus:ring-primary/80 rounded-full peer dark:bg-slate-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                                 </label>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>
               )}
               {/* General Tab Content */}
               {activeTab === 'general' && (
                   <div className="p-6 md:p-8 space-y-8 animate-fadeIn">
                      <div>
                         <label className="block text-sm font-bold text-slate-900 dark:text-white mb-3">Display Language</label>
                         <select className="block w-full rounded-lg border-slate-300 dark:border-slate-700 bg-white dark:bg-background-dark text-slate-900 dark:text-white shadow-sm focus:border-primary focus:ring-primary sm:text-sm p-3">
                            <option>English (US)</option>
                            <option>Spanish</option>
                            <option>French</option>
                         </select>
                      </div>
                      <div className="pt-2">
                         <label className="block text-sm font-bold text-slate-900 dark:text-white mb-3">Appearance</label>
                         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <button className="flex flex-col items-center gap-3 p-4 border-2 border-primary bg-primary/5 rounded-xl transition-all hover:shadow-md">
                               <div className="w-full h-20 bg-slate-900 rounded-lg shadow-inner border border-slate-700 flex items-center justify-center">
                                   <span className="material-icons text-slate-500">dark_mode</span>
                               </div>
                               <span className="text-sm font-semibold text-primary">Dark</span>
                            </button>
                            <button className="flex flex-col items-center gap-3 p-4 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all hover:shadow-md">
                               <div className="w-full h-20 bg-white border border-slate-200 rounded-lg shadow-inner flex items-center justify-center">
                                   <span className="material-icons text-yellow-500">light_mode</span>
                               </div>
                               <span className="text-sm font-medium text-slate-600 dark:text-slate-400">Light</span>
                            </button>
                            <button className="flex flex-col items-center gap-3 p-4 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all hover:shadow-md">
                               <div className="w-full h-20 bg-gradient-to-br from-white to-slate-900 border border-slate-200 rounded-lg shadow-inner flex items-center justify-center">
                                   <span className="material-icons text-slate-400 mix-blend-difference">settings_brightness</span>
                               </div>
                               <span className="text-sm font-medium text-slate-600 dark:text-slate-400">System</span>
                            </button>
                         </div>
                      </div>
                   </div>
               )}
                {/* Fallback for other tabs */}
                {(activeTab === 'privacy' || activeTab === 'billing') && (
                    <div className="h-full flex flex-col items-center justify-center text-center p-12 animate-fadeIn">
                        <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
                            <span className="material-icons text-slate-400 text-4xl">construction</span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Under Construction</h3>
                        <p className="text-slate-500 mt-2 max-w-sm mx-auto">This settings panel is currently being updated by our engineering team. Please check back later.</p>
                        <button className="mt-6 px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium transition-colors">
                            Return to General
                        </button>
                    </div>
                )}
            </div>
         </div>
      </div>
   );
};

export default Settings;