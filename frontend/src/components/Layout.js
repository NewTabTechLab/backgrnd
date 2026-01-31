import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Layout = ({ children }) => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved) {
      setTheme(saved);
      document.documentElement.setAttribute('data-theme', saved);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : theme === 'light' ? null : 'dark';
    
    if (newTheme) {
      localStorage.setItem('theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
    } else {
      localStorage.removeItem('theme');
      document.documentElement.removeAttribute('data-theme');
    }
    setTheme(newTheme);
  };

  const getToggleLabel = () => {
    if (theme === 'dark') return 'Light';
    if (theme === 'light') return 'Dark';
    return 'Dark';
  };

  return (
    <div className="app" data-testid="app-layout">
      <header className="header">
        <div className="container">
          <div className="header-inner">
            <Link to="/" className="site-title" data-testid="site-title">
              BACKGRND
            </Link>
            <nav className="nav" data-testid="main-nav">
              <Link 
                to="/essays" 
                className="nav-link nav-link-secondary"
                data-testid="nav-essays"
              >
                Essays
              </Link>
              <Link 
                to="/capital-diligence" 
                className="nav-link"
                data-testid="nav-capital-diligence"
              >
                Capital
              </Link>
              <Link 
                to="/venture-studio" 
                className="nav-link"
                data-testid="nav-venture-studio"
              >
                Studio
              </Link>
              <Link 
                to="/principals" 
                className="nav-link"
                data-testid="nav-principals"
              >
                Principals
              </Link>
              <Link 
                to="/access" 
                className="nav-link"
                data-testid="nav-access"
              >
                Access
              </Link>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="main">
        <div className="container">
          {children}
        </div>
      </main>
      
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-left">
              <p className="footer-title" data-testid="footer-title">BACKGRND</p>
              <p className="footer-text" data-testid="footer-text">
                We operate quietly.<br />
                Outcomes tend to speak later.
              </p>
            </div>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle"
              data-testid="theme-toggle"
            >
              Light / Dark
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
