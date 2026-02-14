import React from 'react';

const Payments: React.FC = () => {
  const transactions = [
    { date: 'Oct 01, 2023', description: 'HOA Monthly Fee', sub: 'Unit 402 - October', ref: 'INV-2023-10-001', status: 'Pending', amount: '$450.00', type: 'debit', icon: 'home', iconColor: 'text-primary', bg: 'bg-primary/20' },
    { date: 'Sep 03, 2023', description: 'Payment Received', sub: 'Visa ending in 4242', ref: 'TXN-8839201', status: 'Paid', amount: '-$450.00', type: 'credit', icon: 'check', iconColor: 'text-green-500', bg: 'bg-green-500/20' },
    { date: 'Sep 01, 2023', description: 'HOA Monthly Fee', sub: 'Unit 402 - September', ref: 'INV-2023-09-001', status: 'Paid', amount: '$450.00', type: 'debit', icon: 'home', iconColor: 'text-primary', bg: 'bg-primary/20' },
    { date: 'Aug 15, 2023', description: 'Amenity Fee', sub: 'Clubhouse Reservation', ref: 'INV-2023-08-045', status: 'Paid', amount: '$50.00', type: 'debit', icon: 'construction', iconColor: 'text-orange-500', bg: 'bg-orange-500/20' },
  ];

  return (
    <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-8 custom-scrollbar">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex mb-6">
        <ol className="flex items-center space-x-2">
          <li><a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 text-sm">Home</a></li>
          <li><span className="text-gray-400 dark:text-gray-600">/</span></li>
          <li><span className="text-gray-900 dark:text-white font-medium text-sm">Payments & Billing</span></li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Balance & History (2/3 width) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hero Balance Card */}
          <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-gray-200 dark:border-border-dark overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <span className="material-icons text-9xl">account_balance_wallet</span>
            </div>
            <div className="p-6 sm:p-8 relative z-10">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div>
                  <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Current Balance Due</h2>
                  <div className="mt-2 flex items-baseline">
                    <span className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">$450.00</span>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">USD</span>
                  </div>
                  <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                    <span className="material-icons text-base">error_outline</span>
                    Due by Oct 05, 2023
                  </p>
                </div>
                <div className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2">
                    <span className="material-icons text-sm">payment</span>
                    Make Payment
                  </button>
                  <p className="mt-3 text-xs text-center text-gray-500 dark:text-gray-400">Autopay is <span className="text-orange-400 font-medium">Off</span></p>
                </div>
              </div>
              <hr className="my-6 border-gray-200 dark:border-border-dark" />
              {/* Quick Stats Row inside Hero */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Last Payment</span>
                  <span className="block text-lg font-medium text-gray-900 dark:text-white mt-1">$450.00</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Sep 03, 2023</span>
                </div>
                <div>
                  <span className="block text-xs text-gray-500 dark:text-gray-400">Next Invoice</span>
                  <span className="block text-lg font-medium text-gray-900 dark:text-white mt-1">Nov 01, 2023</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Est. $450.00</span>
                </div>
                <div className="hidden sm:block">
                  <span className="block text-xs text-gray-500 dark:text-gray-400">YTD Paid</span>
                  <span className="block text-lg font-medium text-gray-900 dark:text-white mt-1">$4,050.00</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">Since Jan 1</span>
                </div>
              </div>
            </div>
          </div>

          {/* Transaction History */}
          <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-gray-200 dark:border-border-dark flex flex-col">
            <div className="px-6 py-5 border-b border-gray-200 dark:border-border-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Transaction History</h3>
              <div className="flex gap-2">
                <button className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary p-2 rounded-lg border border-gray-200 dark:border-border-dark hover:border-primary dark:hover:border-primary transition-colors">
                  <span className="material-icons text-xl">filter_list</span>
                </button>
                <button className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-card-hover border border-gray-200 dark:border-border-dark rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                  <span className="material-icons text-lg">download</span>
                  Download Statement
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-border-dark">
                <thead className="bg-gray-50 dark:bg-[#151c2b]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Reference</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                    <th className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-card-dark divide-y divide-gray-200 dark:divide-border-dark">
                  {transactions.map((tx, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-card-hover transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">{tx.date}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className={`flex-shrink-0 h-8 w-8 rounded ${tx.bg} flex items-center justify-center ${tx.iconColor}`}>
                            <span className="material-icons text-sm">{tx.icon}</span>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900 dark:text-white">{tx.description}</div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">{tx.sub}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{tx.ref}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full border ${tx.status === 'Pending' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400 border-yellow-200 dark:border-yellow-900/50' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400 border-green-200 dark:border-green-900/50'}`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900 dark:text-white">{tx.amount}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-primary hover:text-blue-400">View</a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-gray-200 dark:border-border-dark flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">Showing 1 to 4 of 24 results</span>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm rounded-md border border-gray-300 dark:border-border-dark text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-card-hover disabled:opacity-50">Prev</button>
                <button className="px-3 py-1 text-sm rounded-md border border-gray-300 dark:border-border-dark text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-card-hover">Next</button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sidebar (1/3 width) */}
        <div className="space-y-6">
          {/* Payment Methods */}
          <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-gray-200 dark:border-border-dark p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Payment Methods</h3>
              <button className="text-sm text-primary hover:text-blue-400">Manage</button>
            </div>
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="group relative flex items-center p-4 border border-primary dark:border-primary bg-blue-50/50 dark:bg-primary/10 rounded-lg cursor-pointer">
                <div className="absolute top-2 right-2">
                  <span className="material-icons text-primary text-base">check_circle</span>
                </div>
                <div className="h-10 w-14 bg-white dark:bg-[#0f172a] rounded flex items-center justify-center border border-gray-200 dark:border-border-dark">
                  <svg className="w-8 h-8 text-blue-800 dark:text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M2 7h20v10H2z" opacity=".2"></path><path d="M19 19H5c-1.103 0-2-.897-2-2V7c0-1.103.897-2 2-2h14c1.103 0 2 .897 2 2v10c0 1.103-.897 2-2 2zM5 7v10h14V7H5z"></path></svg>
                </div>
                <div className="ml-4 flex-1">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Visa ending in 4242</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Expires 12/24</div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="group relative flex items-center p-4 border border-gray-200 dark:border-border-dark hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-card-hover/30 rounded-lg cursor-pointer transition-all">
                <div className="h-10 w-14 bg-white dark:bg-[#0f172a] rounded flex items-center justify-center border border-gray-200 dark:border-border-dark">
                  <span className="material-icons text-gray-600 dark:text-gray-400">account_balance</span>
                </div>
                <div className="ml-4 flex-1">
                  <div className="text-sm font-medium text-gray-900 dark:text-white">Chase Bank ****9988</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">Checking Account</div>
                </div>
              </div>
              {/* Add New */}
              <button className="w-full flex items-center justify-center p-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg text-gray-500 dark:text-gray-400 hover:border-primary dark:hover:border-primary hover:text-primary dark:hover:text-primary transition-colors group">
                <span className="material-icons mr-2 group-hover:scale-110 transition-transform">add_circle_outline</span>
                <span className="text-sm font-medium">Add Payment Method</span>
              </button>
            </div>
          </div>
          {/* Auto Pay Settings */}
          <div className="bg-white dark:bg-card-dark rounded-xl shadow-sm border border-gray-200 dark:border-border-dark p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                <span className="material-icons text-orange-600 dark:text-orange-400">autorenew</span>
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 dark:text-white">Autopay</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Never miss a payment by setting up automatic withdrawals.</p>
                <button className="mt-4 text-sm font-medium text-primary hover:text-blue-400">Set up Autopay →</button>
              </div>
            </div>
          </div>
          {/* Contact Support */}
          <div className="bg-gradient-to-br from-card-dark to-[#1e2638] dark:from-[#131b2b] dark:to-[#1a2336] rounded-xl shadow-sm border border-gray-200 dark:border-border-dark p-6 relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
            <h3 className="text-base font-semibold text-gray-900 dark:text-white relative z-10">Have questions about your bill?</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4 relative z-10">Our property management team is here to help clarify any charges.</p>
            <div className="flex items-center gap-3 relative z-10">
              <img className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-gray-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIMoSBkWGjUHwHgifKGX3MGr-XyRAsRnkcSjNhCHqXCuKkYBLWs8vLR-e67Y7KCcDEUNrLHaP0MOYRID-nQvmLuocIrPme3FNeZNpznKyZsVIMI1Pvx1otXgyaZB4vV-TlC5kEeW8ynUT2yNL-2h7DqUOAfO6MJ8DU89dAFADEEz_IHsBjpRvWBd8GJV7dVwZIxzGVtvhqyl-ths9pm7Hx1TRdu9cFwI6ejwqyvbthIy6rAIWFHS0R354T8sn4YucCyzbfbwmzN6Up" alt="Agent" />
              <div>
                <p className="text-xs font-medium text-gray-900 dark:text-white">Sarah Jenkins</p>
                <a href="#" className="text-xs text-primary hover:underline">Contact Property Manager</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payments;