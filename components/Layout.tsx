import React from 'react';
import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  const navItems = [
    { name: 'Overview', icon: 'dashboard', path: '/dashboard' },
    { name: 'Payments', icon: 'payments', path: '/payments' },
    { name: 'Amenities', icon: 'pool', path: '/amenities' },
    { name: 'Documents', icon: 'folder', path: '/documents' },
    { name: 'Community', icon: 'forum', path: '/community', badge: 3 },
  ];

  const secondaryNavItems = [
    { name: 'My Profile', icon: 'account_circle', path: '/profile' },
    { name: 'Preferences', icon: 'settings', path: '/settings' },
  ];

  return (
    <div className="min-h-screen flex bg-background-light dark:bg-background-dark text-slate-800 dark:text-slate-200 font-display overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 h-screen hidden md:flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0d121c] flex-shrink-0 z-20">
        {/* Logo */}
        <div className="h-20 flex items-center px-8 border-b border-slate-100 dark:border-slate-800/50">
          <div className="flex items-center gap-2 text-primary font-bold text-xl tracking-tight">
            <span className="material-icons">apartment</span>
            <span>LuxeLiving</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
          <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Main Menu</p>
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors group ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-primary'
                }`
              }
            >
              <span className={`material-icons ${location.pathname === item.path ? '' : 'group-hover:text-primary transition-colors'}`}>
                {item.icon}
              </span>
              {item.name}
              {item.badge && (
                <span className="ml-auto bg-primary text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </NavLink>
          ))}

          <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 mt-8">Settings</p>
          {secondaryNavItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors group ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 hover:text-primary'
                }`
              }
            >
              <span className="material-icons group-hover:text-primary transition-colors">
                {item.icon}
              </span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* User Profile */}
        <div className="p-4 border-t border-slate-100 dark:border-slate-800/50">
          <div 
            onClick={handleLogout}
            className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800/50 cursor-pointer transition-colors"
            title="Sign out"
          >
            <img
              alt="Profile"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary/20"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOu4aDTUVt-TGUIIoP21FkI3FC-ghqECqd_QkKBLxecdcoxtvSVcWb3TtPnf_KUetMN6KZnzG9zl7M-MFQrM1bWFWWm691c8Mn6uu4sALc9KJ1zGEqLObersJorWTdNW2BuLRR-pauO2vBJ6YksKq59Y0zvhIUIKat1V7j4c7WjwPgitxHfV86f1K-3b6x0OurVqOljB104q_nw1csfAFvYpiAAbepzs_KtJ_cQTT640akQIBJqaKdrGE4i15aH8EgUQua7C6Y2_NI"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">Sarah Jenkins</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">Unit 402</p>
            </div>
            <span className="material-icons text-slate-400 text-sm">logout</span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;