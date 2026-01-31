import { Layout } from '../components/Layout';

export const PrincipalsPage = () => {
  return (
    <Layout>
      <div className="principals-page" data-testid="principals-page">
        <header className="page-header">
          <h1 className="page-title" data-testid="page-title">Principals</h1>
          <p className="page-subtitle" data-testid="page-subtitle">
            The individuals accountable for BACKGRND's work and judgment.
          </p>
        </header>

        <section className="principals-opening">
          <p>BACKGRND is led by its principals.</p>
          <p>
            The firm does not operate through delegation of judgment.<br />
            Responsibility for analysis, interpretation, and opinion rests with those named below.
          </p>
        </section>

        <section className="principal" data-testid="principal-sajen">
          <h2 className="principal-name">
            Sajen Sivaraman
            <a 
              href="https://linkedin.com/in/sajen-sivaraman-89741b33" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="principal-linkedin"
              aria-label="LinkedIn profile"
              data-testid="linkedin-sajen"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="linkedin-icon">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </h2>
          <p className="principal-role">Principal</p>
          <div className="principal-description">
            <p>
              Sajen Sivaraman works on business architecture, value-chain positioning, and capital judgment.
            </p>
            <p>
              His work focuses on understanding how businesses are structured to behave over time — particularly under scale, capital pressure, and strategic constraint.
            </p>
            <p>
              He is typically involved where early architectural decisions shape long-term outcomes, and where clarity matters more than speed.
            </p>
            <p>
              His perspective is shaped by direct involvement across operating businesses, advisory roles, and structural decision-making contexts.
            </p>
          </div>
        </section>

        <section className="principal" data-testid="principal-kamaleshwar">
          <h2 className="principal-name">
            Kamaleshwar R
            <a 
              href="https://linkedin.com/in/kamaleshwar-r-0034a011b" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="principal-linkedin"
              aria-label="LinkedIn profile"
              data-testid="linkedin-kamaleshwar"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="linkedin-icon">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </h2>
          <p className="principal-role">Principal</p>
          <div className="principal-description">
            <p>
              Kamaleshwar R works on system architecture, operational intelligence, and decision structures grounded in real-world execution environments.
            </p>
            <p>
              His work focuses on how complex systems behave under continuous load, high-frequency data, and operational pressure — and how signal integrity degrades when architecture is weak.
            </p>
            <p>
              He brings deep experience designing and scaling production and condition monitoring systems, translating raw machine data into reliable, decision-grade metrics for management and operations.
            </p>
            <p>
              His perspective is shaped by long-running exposure to industrial systems where accuracy, latency, and structural rigor determine outcomes.
            </p>
          </div>
        </section>

        <footer className="principals-closing">
          <p className="closing-statement" data-testid="closing-statement">
            BACKGRND's work is intentionally quiet.<br />
            Accountability is not.
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default PrincipalsPage;
