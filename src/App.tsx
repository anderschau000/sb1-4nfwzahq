import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Story from './pages/Story';
import Clients from './pages/Clients';
import { InstagramIcon } from 'lucide-react';

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Show the header only when at the top of the page
      setShowHeader(currentScrollPos <= 60);

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <Router>
      <div className="relative">
        <header
          className={`fixed top-0 left-0 w-full z-50 bg-transparent transition-transform duration-300 ${
            showHeader ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-4">
              <img
                src="https://images.unsplash.com/photo-1737762273184-1af8f38eb2b4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8MXx8fGVufDB8fHx8fA%3D%3D"
                alt="Jonathan Maloney"
                className="h-24 w-auto"
              />
            </Link>
            <div className="flex items-center space-x-8">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/story" className="nav-link">My Story</Link>
              <Link to="/clients" className="nav-link">Clients</Link>
              <a
                href="https://instagram.com/jonathanmaloney"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-600 transition-colors duration-300"
              >
                <InstagramIcon className="w-6 h-6" />
              </a>
            </div>
          </nav>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
