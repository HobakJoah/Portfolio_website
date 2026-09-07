import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  // Split links into two groups for the new wide layout
  const mainLinks = [
    { name: '01 projects', href: '/projects', isRoute: true },
    { name: '02 work', href: '/work', isRoute: true },
    { name: '03 about', href: '/', isRoute: true },
  ];

  const utilityLinks = [
    //{ name: 'search', href: '#search', shortcut: '⌘K', isRoute: false }, 
    { name: 'resume', href: '/resume', isRoute: true },
    { name: 'get in touch', href: 'mailto:your-email@example.com', isRoute: false },
  ];

  return (
    <div className="animate-fade-in text-gray-200 flex flex-col min-h-[85vh]">
      
      {/* 
        New Wide Header Layout: 
        Uses flex-row and justify-between on desktop to spread elements across the screen 
      */}
      <header className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-center justify-between gap-8 text-sm font-mono text-gray-500 border-b border-gray-900/50 pb-8 mt-4">
        
        {/* Left: Brand Name */}
        <div className="text-white font-medium tracking-tight min-w-max">
          <Link to="/" className="hover:opacity-80 transition-opacity">Gunho Park</Link>
        </div>
        
        {/* Center: Main Navigation */}
        <nav className="flex flex-wrap gap-8 md:gap-12">
          {mainLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right: Utility Navigation */}
        <nav className="flex flex-wrap items-center gap-6 md:gap-8">
          {utilityLinks.map((link) => 
            link.isRoute ? (
              <Link 
                key={link.name} 
                to={link.href}
                className="hover:text-white transition-colors border border-transparent md:border-gray-800 md:px-4 md:py-1.5 md:rounded-md md:hover:border-gray-600"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-white transition-colors flex items-center gap-2 border border-transparent md:border-gray-800 md:px-4 md:py-1.5 md:rounded-md md:hover:border-gray-600"
              >
                {link.name}
                {link.shortcut && (
                  <span className="hidden sm:inline-block text-gray-600 text-[10px] border border-gray-800 px-1 rounded bg-gray-900">
                    {link.shortcut}
                  </span>
                )}
              </a>
            )
          )}
        </nav>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="mt-32 pt-8 border-t border-gray-900/50 flex justify-between text-xs font-mono text-gray-600">
        <span>© {new Date().getFullYear()}</span>
        <span>built with react & tailwind</span>
      </footer>
    </div>
  );
}