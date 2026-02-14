import React from 'react';

const Profile: React.FC = () => {
  return (
    <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full overflow-y-auto custom-scrollbar">
       {/* Hero / Header */}
       <div className="relative mb-8">
          <div className="h-48 rounded-xl bg-gradient-to-r from-primary/80 to-purple-600/80 overflow-hidden relative group">
             {/* Abstract shapes or image */}
             <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVr3EDykXiCkLF4xAAej9wlMSN3jcs0V7M_xD5v41owQIIc16O5hgbJq8oawk-NFoX5epkk3kTri8rz1kAtzJziW6ACLApwV3NlRUhhJZ87JWDTx5bRth8MgkKUPbExk94qwXQFopWeygNHRKByYJ60xft7tYH_IRYmhqmDIJm7g3j4eLDpq-zqnzF_JgO2Ev-onIZSvbFqa9NmM32FnfJ7viF8PNIr0GRwmEU84L4xRkxQGtkyUVGRT6fbEfOB0XPp8JgbqMYWuve" className="w-full h-full object-cover opacity-50 mix-blend-overlay group-hover:scale-105 transition-transform duration-700" alt="Cover" />
             <div className="absolute inset-0 bg-black/20"></div>
          </div>
          <div className="absolute -bottom-12 left-8 flex items-end">
             <div className="p-1 bg-background-light dark:bg-background-dark rounded-full">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOu4aDTUVt-TGUIIoP21FkI3FC-ghqECqd_QkKBLxecdcoxtvSVcWb3TtPnf_KUetMN6KZnzG9zl7M-MFQrM1bWFWWm691c8Mn6uu4sALc9KJ1zGEqLObersJorWTdNW2BuLRR-pauO2vBJ6YksKq59Y0zvhIUIKat1V7j4c7WjwPgitxHfV86f1K-3b6x0OurVqOljB104q_nw1csfAFvYpiAAbepzs_KtJ_cQTT640akQIBJqaKdrGE4i15aH8EgUQua7C6Y2_NI" className="w-24 h-24 rounded-full object-cover border-4 border-background-light dark:border-background-dark" alt="Profile" />
             </div>
             <div className="mb-3 ml-4">
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Sarah Jenkins</h1>
                <p className="text-slate-500 dark:text-slate-300 font-medium flex items-center gap-1">
                    Resident • Unit 402
                    <span className="material-icons text-green-500 text-sm ml-2">verified</span>
                </p>
             </div>
          </div>
          <div className="absolute bottom-4 right-4 md:right-8">
             <button className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white px-4 py-2 rounded-lg font-medium shadow-sm hover:bg-slate-50 dark:hover:bg-surface-hover transition-colors flex items-center gap-2">
                <span className="material-icons text-sm">edit</span>
                <span className="hidden sm:inline">Edit Profile</span>
             </button>
          </div>
       </div>

       <div className="mt-20 md:mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Col */}
          <div className="space-y-6">
             {/* Contact Info */}
             <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Contact Information</h3>
                <div className="space-y-4">
                   <div>
                      <label className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Email</label>
                      <p className="text-slate-900 dark:text-slate-200 flex items-center gap-2 mt-1">
                         <span className="material-icons text-slate-400 text-sm">email</span>
                         sarah.jenkins@example.com
                      </p>
                   </div>
                   <div>
                      <label className="text-xs text-slate-500 uppercase tracking-wide font-semibold">Phone</label>
                      <p className="text-slate-900 dark:text-slate-200 flex items-center gap-2 mt-1">
                         <span className="material-icons text-slate-400 text-sm">phone</span>
                         (555) 123-4567
                      </p>
                   </div>
                </div>
             </div>

             {/* Emergency Contact */}
             <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                <h3 className="font-bold text-slate-900 dark:text-white mb-4">Emergency Contact</h3>
                <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-600 dark:text-red-400 font-bold border border-red-200 dark:border-red-900/50">JD</div>
                   <div>
                      <p className="font-medium text-slate-900 dark:text-white">John Doe</p>
                      <p className="text-xs text-slate-500">Brother</p>
                   </div>
                </div>
                <div className="pl-13 ml-1">
                    <a href="tel:5559876543" className="text-slate-600 dark:text-slate-300 text-sm hover:text-primary transition-colors flex items-center gap-2">
                        <span className="material-icons text-xs">call</span>
                        (555) 987-6543
                    </a>
                </div>
             </div>
          </div>

          {/* Right Col */}
          <div className="lg:col-span-2 space-y-6">
             {/* Lease Info */}
             <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="material-icons text-primary">description</span>
                        Lease Details
                   </h3>
                   <span className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 px-2.5 py-0.5 rounded-full text-xs font-medium border border-green-200 dark:border-green-800">Active</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                   <div>
                      <span className="block text-xs text-slate-500 uppercase tracking-wide font-semibold">Lease ID</span>
                      <span className="font-mono text-sm text-slate-900 dark:text-white mt-1 block">L-2023-402</span>
                   </div>
                   <div>
                      <span className="block text-xs text-slate-500 uppercase tracking-wide font-semibold">Start Date</span>
                      <span className="text-sm text-slate-900 dark:text-white mt-1 block">Jan 01, 2023</span>
                   </div>
                   <div>
                      <span className="block text-xs text-slate-500 uppercase tracking-wide font-semibold">End Date</span>
                      <span className="text-sm text-slate-900 dark:text-white mt-1 block">Jan 01, 2024</span>
                   </div>
                   <div>
                      <span className="block text-xs text-slate-500 uppercase tracking-wide font-semibold">Monthly Rent</span>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white mt-1 block">$2,450.00</span>
                   </div>
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                   <h4 className="text-sm font-medium text-slate-900 dark:text-white mb-3">Household Members</h4>
                   <div className="flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 bg-slate-50 dark:bg-background-dark px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
                         <span className="material-icons text-slate-400 text-sm">face</span>
                         <span className="text-sm text-slate-700 dark:text-slate-200">Sarah Jenkins</span>
                      </div>
                      <div className="flex items-center gap-2 bg-slate-50 dark:bg-background-dark px-3 py-2 rounded-lg border border-slate-200 dark:border-slate-700">
                         <span className="material-icons text-slate-400 text-sm">pets</span>
                         <span className="text-sm text-slate-700 dark:text-slate-200">Max (Dog)</span>
                      </div>
                   </div>
                </div>
             </div>

             {/* Vehicles */}
             <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                   <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
                        <span className="material-icons text-primary">directions_car</span>
                        Vehicles & Parking
                   </h3>
                   <button className="text-primary text-sm font-medium hover:underline flex items-center gap-1">
                        <span className="material-icons text-sm">add</span> Add Vehicle
                   </button>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-lg bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-slate-700">
                   <div className="p-3 bg-white dark:bg-surface-dark rounded-lg shadow-sm border border-slate-100 dark:border-slate-800">
                      <span className="material-icons text-slate-400 text-2xl">directions_car</span>
                   </div>
                   <div className="flex-1">
                      <div className="flex justify-between flex-wrap gap-2">
                         <h4 className="font-semibold text-slate-900 dark:text-white">Tesla Model 3</h4>
                         <span className="text-xs font-mono bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-slate-600">ABC 1234</span>
                      </div>
                      <p className="text-sm text-slate-500 mt-1">Silver • Sedan</p>
                      <div className="mt-3 flex items-center gap-2">
                         <span className="text-xs text-slate-600 dark:text-slate-400 bg-white dark:bg-surface-dark px-2 py-1 rounded border border-slate-200 dark:border-slate-700 flex items-center gap-1">
                            <span className="material-icons text-[10px]">local_parking</span> Spot #402
                         </span>
                         <span className="text-xs text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded border border-green-200 dark:border-green-900/30">Registered</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
  );
};

export default Profile;