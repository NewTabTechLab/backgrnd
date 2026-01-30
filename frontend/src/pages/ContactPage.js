import { Layout } from '../components/Layout';

export const ContactPage = () => {
  return (
    <Layout>
      <div data-testid="contact-page">
        <header className="page-header">
          <h1 className="page-title" data-testid="page-title">Request Context</h1>
        </header>
        
        <section className="contact-content">
          <p>
            If you are considering an engagement, we are happy to provide additional 
            context on our approach, past work where appropriate, and whether your 
            situation falls within our areas of focus.
          </p>
          <p>
            We respond to all serious inquiries, though we are selective about the 
            work we take on. Initial conversations carry no obligation.
          </p>
          <p className="contact-email-line">
            <a href="mailto:context@backgrnd.co" data-testid="contact-email">context@backgrnd.co</a>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default ContactPage;
