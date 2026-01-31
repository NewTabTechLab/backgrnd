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
              href="https://www.linkedin.com/in/sajen-sivaraman" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="principal-linkedin"
              data-testid="linkedin-sajen"
            >in</a>
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
              href="https://www.linkedin.com/in/kamaleshwar-r" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="principal-linkedin"
              data-testid="linkedin-kamaleshwar"
            >in</a>
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
