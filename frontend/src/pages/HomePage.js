import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const HomePage = () => {
  return (
    <Layout>
      <div data-testid="home-page" className="">
        {/* Hero */}
        <section className="hero">
          <h1 className="hero-text !font-semibold !bg-[#FCFCFC]" data-testid="hero-text">
            BACKGRND examines businesseswhere architecture, value chains,and capital meet.<br />
            where architecture, value chains,<br />
            and capital meet.
          </h1>
          <p className="hero-subtext !font-thin !text-left" data-testid="hero-subtext">
            We operate in the background, analysing how businesses are designed, positioned, and constrained before decisions harden into outcomes.
          </p>
        </section>

        {/* What This Firm Does */}
        <section className="home-section">
          <h2 className="section-heading !font-semibold" data-testid="section-what-we-do">What We Do</h2>
          <div className="section-content">
            <p className="!font-thin">BACKGRND is a business architecture and capital intelligence firm.
Our work focuses on how businesses are structured
how value accumulates across the value chain,
how decisions compound over time,
and how early architectural choices limit or expand future outcomes.
We are typically engaged when clarity matters more than speed.</p>
            <p>
              Our work sits upstream of transactions. We clarify the underlying mechanics of businesses so that those with capital at stake can reason from firmer ground.
            </p>
          </div>
        </section>

        {/* What This Firm Does Not Do */}
        <section className="home-section">
          <h2 className="section-heading !font-semibold" data-testid="section-what-we-dont-do">What Backgrnd Does Not Do</h2>
          <div className="section-content">
            <p>We do not execute growth plans.
We do not run marketing campaigns.
We do not optimize operations.</p>
            <p>BACKGRND exists upstream where mis-understood structure becomes irreversible cost later.</p>
          </div>
        </section>

        {/* Areas of Work */}
        <section className="home-section">
          <h2 className="section-heading !font-semibold" data-testid="section-areas">Core Practice Areas</h2>
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
          <h2 className="section-heading !font-semibold" data-testid="section-who-engages">Who Engages BACKGRND</h2>
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
    </Layout>);

};

export default HomePage;