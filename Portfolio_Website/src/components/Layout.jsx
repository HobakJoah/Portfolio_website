import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  const navLinks = [
    { name: 'projects', href: '/projects', isRoute: true },
    { name: 'work', href: '/work', isRoute: true },
    { name: 'about', href: '/', isRoute: true },
    { name: 'search', href: '#search', shortcut: '⌘K', isRoute: false }, 
    { name: 'resume', href: '/resume.pdf', isRoute: false },
    { name: 'get in touch', href: 'mailto:your-email@example.com', isRoute: false },
  ];

  return (
    <div className="animate-fade-in text-gray-200 mt-8 flex flex-col min-h-[85vh]">
      <header className="mb-12">
        <h1 className="text-lg font-medium mb-6 text-white tracking-tight lowercase">
          <Link to="/">Gunho Park</Link>
        </h1>
        
        <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-mono text-gray-500 border-b border-gray-900 pb-6">
          {navLinks.map((link) => 
            link.isRoute ? (
              <Link 
                key={link.name} 
                to={link.href}
                className="hover:text-white transition-colors flex items-center gap-2"
              >
                {link.name}
              </Link>
            ) : (
              <a 
                key={link.name} 
                href={link.href}
                className="hover:text-white transition-colors flex items-center gap-2"
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

      {/* The Outlet is where your specific page content will render */}
      <main className="grow">
        <Outlet />
      </main>

      <footer className="mt-20 pt-8 border-t border-gray-900 flex gap-6 text-sm font-mono">
        <span className="text-gray-600">© 2026</span>
      </footer>
    </div>
  );
}