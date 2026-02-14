import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div className="flex items-stretch min-h-screen">
      {/* Left Side: Architectural Image */}
      <div className="hidden lg:flex lg:w-1/2 xl:w-7/12 relative bg-[#0f172a] overflow-hidden">
        {/* Background Image */}
        <img 
          alt="Modern apartment building exterior" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVr3EDykXiCkLF4xAAej9wlMSN3jcs0V7M_xD5v41owQIIc16O5hgbJq8oawk-NFoX5epkk3kTri8rz1kAtzJziW6ACLApwV3NlRUhhJZ87JWDTx5bRth8MgkKUPbExk94qwXQFopWeygNHRKByYJ60xft7tYH_IRYmhqmDIJm7g3j4eLDpq-zqnzF_JgO2Ev-onIZSvbFqa9NmM32FnfJ7viF8PNIr0GRwmEU84L4xRkxQGtkyUVGRT6fbEfOB0XPp8JgbqMYWuve"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#101622] via-[#101622]/40 to-transparent"></div>
        {/* Content on Image */}
        <div className="relative z-10 p-12 flex flex-col justify-between h-full w-full">
          {/* Logo Area */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/30">
              <span className="material-icons-round text-white text-2xl">apartment</span>
            </div>
            <span className="text-white font-bold text-xl tracking-wide">Skyline Residences</span>
          </div>
          {/* Testimonial / Welcome Message */}
          <div className="max-w-md mb-8">
            <div className="flex space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <span key={i} className="material-icons-round text-primary text-xl">star</span>
              ))}
            </div>
            <blockquote className="text-2xl font-semibold text-white mb-4 leading-snug">
              "Experience elevated living with seamless management at your fingertips."
            </blockquote>
            <p className="text-slate-400 font-light">Your portal to amenities, requests, and community updates.</p>
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="w-full lg:w-1/2 xl:w-5/12 flex items-center justify-center p-6 sm:p-12 relative bg-background-light dark:bg-background-dark">
        {/* Decorative blurred background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
        
        <div className="w-full max-w-md relative z-10">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center space-x-2 mb-8 justify-center">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="material-icons-round text-white text-lg">apartment</span>
            </div>
            <span className="text-slate-900 dark:text-white font-bold text-lg">Skyline Residences</span>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Welcome back</h1>
            <p className="text-slate-500 dark:text-slate-400">Please enter your details to access your resident portal.</p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="email">Email Address</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-icons-round text-slate-400 group-focus-within:text-primary transition-colors">mail</span>
                </div>
                <input className="block w-full pl-10 pr-3 py-3 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-sm" id="email" name="email" placeholder="resident@skyline.com" required type="email" />
              </div>
            </div>
            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="password">Password</label>
              </div>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="material-icons-round text-slate-400 group-focus-within:text-primary transition-colors">lock</span>
                </div>
                <input className="block w-full pl-10 pr-10 py-3 border border-slate-300 dark:border-slate-700 rounded-lg leading-5 bg-white dark:bg-slate-800/50 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary sm:text-sm transition-all shadow-sm" id="password" name="password" placeholder="••••••••" required type="password" />
                <button className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-300 focus:outline-none" type="button">
                  <span className="material-icons-round text-xl">visibility_off</span>
                </button>
              </div>
            </div>
            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input className="h-4 w-4 text-primary focus:ring-primary border-slate-300 dark:border-slate-600 rounded bg-white dark:bg-slate-700" id="remember-me" name="remember-me" type="checkbox" />
                <label className="ml-2 block text-sm text-slate-600 dark:text-slate-400" htmlFor="remember-me">Remember me</label>
              </div>
              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-primary/80 transition-colors">Forgot password?</a>
              </div>
            </div>
            {/* Submit Button */}
            <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-semibold text-white bg-primary hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-background-dark transition-all transform hover:-translate-y-0.5" type="submit">
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-300 dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-background-light dark:bg-background-dark text-slate-500 dark:text-slate-400">Or continue with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800/50 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:focus:ring-offset-background-dark transition-all" type="button">
              <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="h-5 w-5 mr-2" />
              Google
            </button>
            <button className="w-full inline-flex justify-center items-center py-2.5 px-4 border border-slate-300 dark:border-slate-700 rounded-lg shadow-sm bg-white dark:bg-slate-800/50 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-500 dark:focus:ring-offset-background-dark transition-all" type="button">
               <span className="material-icons mr-2 text-xl">apple</span>
               Apple
            </button>
          </div>

          {/* Footer Text */}
          <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
            Don't have an account? 
            <a href="#" className="font-medium text-primary hover:text-primary/80 underline decoration-primary/30 underline-offset-4 transition-colors ml-1">
              Contact Management
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;