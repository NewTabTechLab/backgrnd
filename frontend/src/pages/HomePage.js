import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const HomePage = () => {
  return (
    <Layout>
      <div data-testid="home-page">
        {/* Hero */}
        <section className="hero">
          <h1 className="hero-text" data-testid="hero-text">
            BACKGRND examines businesses<br />
            where architecture, value chains,<br />
            and capital meet.
          </h1>
          <p className="hero-subtext" data-testid="hero-subtext">
            We operate in the background, analysing how businesses are designed, positioned, and constrained before decisions harden into outcomes.
          </p>
        </section>

        {/* What This Firm Does */}
        <section className="home-section">
          <h2 className="section-heading" data-testid="section-what-we-do">What This Firm Does</h2>
          <div className="section-content">
            <p>
              BACKGRND conducts structured analysis of business architecture.
              We examine how companies are built — how value is structured, how control is distributed, and how decisions compound — before strategic or investment decisions are made.
            </p>
            <p>
              Our work sits upstream of transactions. We clarify the underlying mechanics of businesses so that those with capital at stake can reason from firmer ground.
            </p>
          </div>
        </section>

        {/* What This Firm Does Not Do */}
        <section className="home-section">
          <h2 className="section-heading" data-testid="section-what-we-dont-do">What This Firm Does Not Do</h2>
          <div className="section-content">
            <p>
              We do not manage capital. We do not execute transactions. We do not provide legal, accounting, or regulatory advice. We do not market, pitch, or advocate for particular outcomes.
            </p>
            <p>
              We do not produce research for public consumption. Our work is private, specific, and written for principals who have already decided to look closely.
            </p>
          </div>
        </section>

        {/* Areas of Work */}
        <section className="home-section">
          <h2 className="section-heading" data-testid="section-areas">Areas of Work</h2>
          <nav className="areas-list" data-testid="areas-list">
            <Link to="/what-we-do" className="area-link">Business Design & Architecture</Link>
            <Link to="/what-we-do" className="area-link">Value Chain Intelligence</Link>
            <Link to="/what-we-do" className="area-link">Business Diagnostics</Link>
            <Link to="/what-we-do" className="area-link">Domain Architecture</Link>
            <Link to="/capital-diligence" className="area-link">Capital Diligence</Link>
            <Link to="/venture-studio" className="area-link">Venture Studio</Link>
          </nav>
        </section>

        {/* Who Engages BACKGRND */}
        <section className="home-section">
          <h2 className="section-heading" data-testid="section-who-engages">Who Engages BACKGRND</h2>
          <div className="section-content">
            <p>
              Family offices with concentrated positions.<br />
              Holding companies evaluating adjacencies.<br />
              Institutional investors seeking independent assessment before committing capital.<br />
              Founders examining their own structures under different constraints.
            </p>
            <p>
              Engagements are infrequent and selective. We work with those who value precision over speed, and who prefer analysis that does not come with an embedded recommendation.
            </p>
          </div>
        </section>

        {/* Closing */}
        <section className="home-section closing">
          <p className="closing-text" data-testid="closing-text">
            Most of our work is never seen. That is by design.<br />
            Visibility is not the objective. Usefulness is.
          </p>
          <Link to="/access" className="request-link" data-testid="request-context-link">
            Request Context
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
