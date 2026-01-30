import { useState, useEffect } from 'react';
import { Layout } from '../components/Layout';
import { getAbout } from '../api/client';

export const AboutPage = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const data = await getAbout();
        setAbout(data);
      } catch (err) {
        setError('Unable to load content');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div data-testid="about-loading" className="loading">Loading...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div data-testid="about-error" className="error">{error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div data-testid="about-page">
        <header className="page-header">
          <h1 className="page-title" data-testid="page-title">About</h1>
        </header>
        
        {about.sections.map((section, index) => (
          <section key={index} className="about-section">
            <h2>{section.title}</h2>
            {section.content.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </section>
        ))}
        
        <section className="about-section">
          <h2>Contact</h2>
          <p className="contact-line">
            For inquiries: <a href={`mailto:${about.contact_email}`} data-testid="contact-email">{about.contact_email}</a>
          </p>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
