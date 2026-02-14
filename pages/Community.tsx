import React from 'react';

const Community: React.FC = () => {
  const posts = [
    {
      id: 1,
      author: 'LuxeLiving Management',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIMoSBkWGjUHwHgifKGX3MGr-XyRAsRnkcSjNhCHqXCuKkYBLWs8vLR-e67Y7KCcDEUNrLHaP0MOYRID-nQvmLuocIrPme3FNeZNpznKyZsVIMI1Pvx1otXgyaZB4vV-TlC5kEeW8ynUT2yNL-2h7DqUOAfO6MJ8DU89dAFADEEz_IHsBjpRvWBd8GJV7dVwZIxzGVtvhqyl-ths9pm7Hx1TRdu9cFwI6ejwqyvbthIy6rAIWFHS0R354T8sn4YucCyzbfbwmzN6Up',
      role: 'Property Manager',
      time: '2 hours ago',
      content: '🍷🧀 Join us this Friday for "Wine & Cheese Night" on the rooftop terrace! It\'s a great opportunity to meet your neighbors and enjoy the sunset. We will have a sommelier guest speaker.',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfU-avXh6TqVD9jA_j4_Ft-ZZfNilpx5AWn2yBZhC4vkKwhnQu_PEvLAIC44KCsrs61u3vfoYlZCmFGqmg3D-5F8xFP-R8KkIowLBA2MnXlGXSFeQtegF05npp6jKILnkfQq7XYYJjvJUHdjGW2NR--V_Hx_pNb-H4bmihbYuJZkngLOaSQjD3iz0H-cTQu6z9izNoemwj4AHlfwagevh2wUYidBf_GjqE4mRIKF_7Jo5EH82pSJl4I5SkZWRL9PPHQFGMvME9OFp3',
      type: 'event',
      eventDate: 'Fri, Oct 14 • 7:00 PM',
      likes: 42,
      comments: 8,
      isLiked: true,
    },
    {
      id: 2,
      author: 'Sarah Jenkins',
      avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOu4aDTUVt-TGUIIoP21FkI3FC-ghqECqd_QkKBLxecdcoxtvSVcWb3TtPnf_KUetMN6KZnzG9zl7M-MFQrM1bWFWWm691c8Mn6uu4sALc9KJ1zGEqLObersJorWTdNW2BuLRR-pauO2vBJ6YksKq59Y0zvhIUIKat1V7j4c7WjwPgitxHfV86f1K-3b6x0OurVqOljB104q_nw1csfAFvYpiAAbepzs_KtJ_cQTT640akQIBJqaKdrGE4i15aH8EgUQua7C6Y2_NI',
      role: 'Resident • Unit 402',
      time: '4 hours ago',
      content: 'Has anyone else noticed the elevator in the north wing making a strange clicking noise? I already submitted a maintenance request, just curious if it\'s just me hearing things!',
      type: 'discussion',
      likes: 5,
      comments: 12,
      isLiked: false,
    },
    {
      id: 3,
      author: 'Michael Chen',
      avatar: null, // Placeholder logic
      initials: 'MC',
      role: 'Resident • Unit 805',
      time: 'Yesterday',
      content: '📦 Selling my Peloton Bike+. Barely used, moving out of state so need it gone ASAP. $1200 OBO. DM me if interested! Pickup only.',
      type: 'marketplace',
      likes: 0,
      comments: 3,
      isLiked: false,
      price: '$1,200',
    }
  ];

  return (
    <div className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full overflow-y-auto custom-scrollbar">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Community Hub</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">Connect with neighbors, join events, and stay updated.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Feed (2/3) */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Create Post Input */}
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl p-4 shadow-sm">
            <div className="flex gap-4">
              <img 
                className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOu4aDTUVt-TGUIIoP21FkI3FC-ghqECqd_QkKBLxecdcoxtvSVcWb3TtPnf_KUetMN6KZnzG9zl7M-MFQrM1bWFWWm691c8Mn6uu4sALc9KJ1zGEqLObersJorWTdNW2BuLRR-pauO2vBJ6YksKq59Y0zvhIUIKat1V7j4c7WjwPgitxHfV86f1K-3b6x0OurVqOljB104q_nw1csfAFvYpiAAbepzs_KtJ_cQTT640akQIBJqaKdrGE4i15aH8EgUQua7C6Y2_NI" 
                alt="Sarah" 
              />
              <div className="flex-1">
                <textarea 
                  className="w-full bg-slate-50 dark:bg-background-dark border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary placeholder-slate-400 text-slate-900 dark:text-white resize-none" 
                  rows={2} 
                  placeholder="Share something with your neighbors..."
                ></textarea>
                <div className="flex justify-between items-center mt-3">
                  <div className="flex gap-2">
                    <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-full transition-colors" title="Add Photo">
                      <span className="material-icons text-xl">image</span>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-full transition-colors" title="Create Event">
                      <span className="material-icons text-xl">event</span>
                    </button>
                    <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-full transition-colors" title="Create Poll">
                      <span className="material-icons text-xl">poll</span>
                    </button>
                  </div>
                  <button className="px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-medium rounded-lg transition-colors">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar">
            <button className="px-4 py-1.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium whitespace-nowrap">All Posts</button>
            <button className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium whitespace-nowrap transition-colors">Events</button>
            <button className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium whitespace-nowrap transition-colors">Marketplace</button>
            <button className="px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 text-sm font-medium whitespace-nowrap transition-colors">Lost & Found</button>
          </div>

          {/* Feed Stream */}
          <div className="space-y-6">
            {posts.map((post) => (
              <div key={post.id} className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
                {/* Post Header */}
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    {post.avatar ? (
                      <img className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700" src={post.avatar} alt={post.author} />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold text-sm">
                        {post.initials}
                      </div>
                    )}
                    <div>
                      <h3 className="font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                        {post.author}
                        {post.type === 'event' && <span className="text-[10px] bg-primary/10 text-primary px-1.5 py-0.5 rounded uppercase tracking-wide font-bold">Admin</span>}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1">
                        {post.role} • {post.time}
                      </p>
                    </div>
                  </div>
                  <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300">
                    <span className="material-icons">more_horiz</span>
                  </button>
                </div>

                {/* Post Content */}
                <div className="mb-4">
                  <p className="text-slate-700 dark:text-slate-300 whitespace-pre-line leading-relaxed">{post.content}</p>
                  
                  {/* Event Attachment */}
                  {post.type === 'event' && post.image && (
                    <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 relative group">
                      <img src={post.image} alt="Event" className="w-full h-64 object-cover" />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-16">
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-red-400 font-bold text-xs uppercase tracking-wider mb-1">Upcoming Event</p>
                            <h4 className="text-white font-bold text-lg">{post.eventDate}</h4>
                          </div>
                          <button className="bg-white text-slate-900 hover:bg-slate-100 px-4 py-2 rounded-lg text-sm font-semibold transition-colors">
                            RSVP
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Marketplace Badge */}
                  {post.type === 'marketplace' && (
                    <div className="mt-3 inline-flex items-center gap-2 bg-green-500/10 text-green-600 dark:text-green-400 px-3 py-1.5 rounded-lg border border-green-500/20">
                      <span className="material-icons text-sm">sell</span>
                      <span className="font-bold text-sm">{post.price}</span>
                    </div>
                  )}
                </div>

                {/* Post Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex gap-6">
                    <button className={`flex items-center gap-2 text-sm font-medium transition-colors ${post.isLiked ? 'text-red-500' : 'text-slate-500 dark:text-slate-400 hover:text-red-500'}`}>
                      <span className={`material-icons ${post.isLiked ? '' : 'material-icons-outlined'}`}>favorite</span>
                      {post.likes}
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                      <span className="material-icons-outlined">chat_bubble</span>
                      {post.comments}
                    </button>
                    <button className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-primary transition-colors">
                      <span className="material-icons-outlined">share</span>
                    </button>
                  </div>
                  {post.type === 'marketplace' && (
                     <button className="text-sm font-medium text-primary hover:underline">Message Seller</button>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center py-4">
             <button className="text-sm text-slate-500 hover:text-primary font-medium transition-colors">Load more posts...</button>
          </div>
        </div>

        {/* Right Column: Sidebar (1/3) */}
        <div className="space-y-6">
          {/* Community Guidelines */}
          <div className="bg-primary/5 dark:bg-primary/10 border border-primary/10 dark:border-primary/20 rounded-xl p-5">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
              <span className="material-icons text-primary">verified</span>
              Community Guidelines
            </h3>
            <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
              <li className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                Be respectful and kind to neighbors.
              </li>
              <li className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                No spam or unauthorized advertising.
              </li>
              <li className="flex gap-2 items-start">
                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                Report maintenance issues via the portal.
              </li>
            </ul>
          </div>

          {/* Upcoming Events Mini */}
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-slate-900 dark:text-white">Upcoming Events</h3>
              <a href="#" className="text-xs text-primary hover:underline">View Calendar</a>
            </div>
            <div className="space-y-4">
              <div className="flex gap-3 items-center group cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] text-red-500 font-bold uppercase">OCT</span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">14</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Wine & Cheese Night</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">7:00 PM • Rooftop</p>
                </div>
              </div>
              <div className="flex gap-3 items-center group cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-lg flex flex-col items-center justify-center border border-slate-200 dark:border-slate-700">
                  <span className="text-[10px] text-red-500 font-bold uppercase">OCT</span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">21</span>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-primary transition-colors">Yoga by the Pool</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">9:00 AM • Pool Deck</p>
                </div>
              </div>
            </div>
          </div>

          {/* Building Staff */}
          <div className="bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
             <h3 className="font-bold text-slate-900 dark:text-white mb-4">Building Staff</h3>
             <div className="space-y-3">
                <div className="flex items-center gap-3">
                   <div className="relative">
                     <img className="w-10 h-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIMoSBkWGjUHwHgifKGX3MGr-XyRAsRnkcSjNhCHqXCuKkYBLWs8vLR-e67Y7KCcDEUNrLHaP0MOYRID-nQvmLuocIrPme3FNeZNpznKyZsVIMI1Pvx1otXgyaZB4vV-TlC5kEeW8ynUT2yNL-2h7DqUOAfO6MJ8DU89dAFADEEz_IHsBjpRvWBd8GJV7dVwZIxzGVtvhqyl-ths9pm7Hx1TRdu9cFwI6ejwqyvbthIy6rAIWFHS0R354T8sn4YucCyzbfbwmzN6Up" alt="Manager" />
                     <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-white dark:border-surface-dark rounded-full"></span>
                   </div>
                   <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">James Wilson</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Concierge (On Duty)</p>
                   </div>
                   <button className="ml-auto p-2 text-slate-400 hover:text-primary bg-slate-50 dark:bg-slate-800 rounded-full transition-colors">
                      <span className="material-icons text-sm">call</span>
                   </button>
                </div>
                <div className="flex items-center gap-3">
                   <div className="relative">
                     <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 font-bold text-xs">
                        MN
                     </div>
                   </div>
                   <div>
                      <p className="text-sm font-medium text-slate-900 dark:text-white">Maintenance Team</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400">Available 8am - 6pm</p>
                   </div>
                   <button className="ml-auto p-2 text-slate-400 hover:text-primary bg-slate-50 dark:bg-slate-800 rounded-full transition-colors">
                      <span className="material-icons text-sm">build</span>
                   </button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;