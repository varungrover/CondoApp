import React from 'react';

const Documents: React.FC = () => {
  const documents = [
    { name: '2024 Consolidated Bylaws.pdf', type: 'Official Document', date: 'Oct 24, 2023', size: '2.4 MB', icon: 'picture_as_pdf', color: 'red' },
    { name: 'Noise Complaint Procedure.docx', type: 'Template', date: 'Sep 12, 2023', size: '145 KB', icon: 'description', color: 'blue' },
    { name: 'Pet Policy Amendment 2023.pdf', type: 'Amendment', date: 'Aug 05, 2023', size: '890 KB', icon: 'picture_as_pdf', color: 'red' },
    { name: 'Parking Spot Allocation Map.pdf', type: 'Map & Diagram', date: 'Jun 15, 2023', size: '5.2 MB', icon: 'picture_as_pdf', color: 'red' },
    { name: 'Renovation Request Form.xlsx', type: 'Form', date: 'May 20, 2023', size: '64 KB', icon: 'table_view', color: 'emerald' },
  ];

  return (
    <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full overflow-y-auto custom-scrollbar">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Document Center</h1>
          <p className="mt-1 text-slate-500 dark:text-slate-400">Access and download official residence documents, bylaws, and reports.</p>
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-80 group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="material-icons-outlined text-slate-400 group-focus-within:text-primary transition-colors">search</span>
            </div>
            <input className="block w-full pl-10 pr-3 py-2.5 border border-slate-200 dark:border-slate-700 rounded-lg leading-5 bg-white dark:bg-surface-dark text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent sm:text-sm transition-shadow" placeholder="Search documents by name or year..." type="text" />
          </div>
        </div>
      </div>

      {/* Folder Categories */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {/* Active Folder */}
        <button className="relative flex flex-col items-start p-5 rounded-xl border-2 border-primary bg-primary/5 dark:bg-primary/10 transition-all hover:shadow-md group">
          <div className="absolute top-4 right-4 h-2 w-2 rounded-full bg-primary"></div>
          <div className="p-2.5 bg-primary/10 rounded-lg mb-3 group-hover:bg-primary/20 transition-colors">
            <span className="material-icons-round text-primary text-2xl">gavel</span>
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white text-base">Bylaws</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">12 files • Updated recently</p>
        </button>
        {/* Inactive Folder */}
        <button className="flex flex-col items-start p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-md group">
          <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg mb-3 group-hover:bg-primary/10 transition-colors">
            <span className="material-icons-round text-slate-500 dark:text-slate-400 group-hover:text-primary text-2xl transition-colors">analytics</span>
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white text-base">Financials</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">45 files • Monthly reports</p>
        </button>
        {/* Inactive Folder */}
        <button className="flex flex-col items-start p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-md group">
          <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg mb-3 group-hover:bg-primary/10 transition-colors">
            <span className="material-icons-round text-slate-500 dark:text-slate-400 group-hover:text-primary text-2xl transition-colors">groups</span>
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white text-base">Minutes</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">28 files • Board meetings</p>
        </button>
        {/* Inactive Folder */}
        <button className="flex flex-col items-start p-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark hover:border-primary/50 dark:hover:border-primary/50 transition-all hover:shadow-md group">
          <div className="p-2.5 bg-slate-100 dark:bg-slate-800 rounded-lg mb-3 group-hover:bg-primary/10 transition-colors">
            <span className="material-icons-round text-slate-500 dark:text-slate-400 group-hover:text-primary text-2xl transition-colors">verified_user</span>
          </div>
          <h3 className="font-semibold text-slate-900 dark:text-white text-base">Insurance</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">8 files • Policy documents</p>
        </button>
      </div>

      {/* Recent/Folder Contents */}
      <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        {/* Table Header Actions */}
        <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <h2 className="font-semibold text-lg text-slate-900 dark:text-white flex items-center gap-2">
            <span className="material-icons-round text-primary text-lg">folder_open</span>
            Bylaws & Rules
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold mr-2">Sort by:</span>
            <select className="form-select bg-slate-50 dark:bg-background-dark border-0 rounded-md text-sm text-slate-700 dark:text-slate-300 py-1.5 pl-3 pr-8 focus:ring-1 focus:ring-primary cursor-pointer">
              <option>Date (Newest)</option>
              <option>Date (Oldest)</option>
              <option>Name (A-Z)</option>
            </select>
          </div>
        </div>
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-slate-50 dark:bg-background-dark/50 text-slate-500 dark:text-slate-400 uppercase tracking-wider text-xs font-semibold">
              <tr>
                <th className="px-6 py-4" scope="col">Name</th>
                <th className="px-6 py-4" scope="col">Date Uploaded</th>
                <th className="px-6 py-4" scope="col">File Size</th>
                <th className="px-6 py-4 text-right" scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {documents.map((doc, idx) => (
                <tr key={idx} className="group hover:bg-slate-50 dark:hover:bg-surface-dark-hover transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`h-10 w-10 flex-shrink-0 bg-${doc.color}-100 dark:bg-${doc.color}-500/20 rounded-lg flex items-center justify-center`}>
                        <span className={`material-icons-outlined text-${doc.color}-600 dark:text-${doc.color}-400`}>{doc.icon}</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-900 dark:text-white group-hover:text-primary transition-colors">{doc.name}</p>
                        <p className="text-xs text-slate-500 dark:text-slate-400">{doc.type}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span className="material-icons-outlined text-xs text-slate-400">calendar_today</span>
                      {doc.date}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 dark:text-slate-300 font-mono text-xs">{doc.size}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-slate-400 hover:text-primary dark:text-slate-500 dark:hover:text-primary p-2 rounded-full hover:bg-primary/10 transition-all" title="Download">
                      <span className="material-icons-round">download</span>
                    </button>
                    <button className="text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-white p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-all" title="More Options">
                      <span className="material-icons-round">more_vert</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <span className="text-sm text-slate-500 dark:text-slate-400">Showing 1-5 of 12 files</span>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm rounded-md text-slate-400 dark:text-slate-500 cursor-not-allowed" disabled>Previous</button>
            <button className="px-3 py-1 text-sm rounded-md bg-primary text-white hover:bg-blue-600 transition-colors">1</button>
            <button className="px-3 py-1 text-sm rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">2</button>
            <button className="px-3 py-1 text-sm rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">3</button>
            <button className="px-3 py-1 text-sm rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">Next</button>
          </div>
        </div>
      </div>

      {/* Quick Access / Featured */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-xl border border-primary/20 flex flex-col justify-between h-full">
          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-2">Need a Status Certificate?</h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mb-4">Request official documents for sale or refinancing directly from management.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-blue-400 font-medium text-sm">
            Request Document <span className="material-icons-outlined text-sm">arrow_forward</span>
          </a>
        </div>
        {/* Contact Box for Missing Docs */}
        <div className="bg-white dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800">
          <div className="flex items-start gap-4">
            <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
              <span className="material-icons-outlined text-slate-500 dark:text-slate-400">help_outline</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1">Can't find what you're looking for?</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">Some documents may be archived. Contact the property manager for assistance.</p>
              <button className="text-xs bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 px-3 py-1.5 rounded transition-colors">
                Contact Management
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;