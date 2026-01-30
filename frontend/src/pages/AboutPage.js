import { Layout } from '../components/Layout';

export const AboutPage = () => {
  return (
    <Layout>
      <div data-testid="about-page">
        <header className="page-header">
          <h1 className="page-title" data-testid="page-title">About</h1>
        </header>
        
        <section className="about-section">
          <h2>Firm</h2>
          <p>
            BACKGRND is a private investment firm. We deploy capital with extended time horizons, 
            typically measured in years rather than quarters. Our approach emphasizes judgment 
            over process, conviction over diversification, and patience over activity.
          </p>
          <p>
            We operate with a small team and a deliberately limited capital base. This constraint 
            is intentional: it preserves optionality, reduces pressure to deploy, and allows us 
            to remain selective.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Philosophy</h2>
          <p>
            We believe that most value in capital allocation comes from getting a few decisions 
            right, rather than from optimizing many decisions marginally. This view shapes our 
            practice: we make relatively few investments, hold them for extended periods, and 
            spend most of our time thinking rather than transacting.
          </p>
          <p>
            We are skeptical of complexity. The most durable investment theses we have encountered 
            tend to be simple—not simplistic, but reducible to a small number of key judgments. 
            Complexity often signals uncertainty masquerading as sophistication.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Writing</h2>
          <p>
            The essays on this site represent our attempts to think clearly about questions 
            that interest us. They are not investment advice, marketing materials, or position 
            statements. They are working notes, published in the spirit of intellectual honesty.
          </p>
          <p>
            We write primarily for ourselves—writing forces a precision that thinking alone 
            does not. That others may find these notes useful is incidental, though welcome.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Contact</h2>
          <p className="contact-line">
            For inquiries: <a href="mailto:contact@backgrnd.co" data-testid="contact-email">contact@backgrnd.co</a>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
