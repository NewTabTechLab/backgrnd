import { Link } from 'react-router-dom';

export const Layout = ({ children }) => {
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
                className="nav-link"
                data-testid="nav-essays"
              >
                Essays
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
          <p className="footer-title" data-testid="footer-title">BACKGRND</p>
          <p className="footer-text" data-testid="footer-text">
            BACKGRND operates in the background.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
