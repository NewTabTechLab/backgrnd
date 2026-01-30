import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { getRecentEssays, getSiteConfig } from '../api/client';

export const HomePage = () => {
  const [essays, setEssays] = useState([]);
  const [config, setConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [essaysData, configData] = await Promise.all([
          getRecentEssays(3),
          getSiteConfig()
        ]);
        setEssays(essaysData);
        setConfig(configData);
      } catch (err) {
        setError('Unable to load content');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div data-testid="home-loading" className="loading">Loading...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div data-testid="home-error" className="error">{error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div data-testid="home-page">
        <section className="intro">
          <p className="intro-text" data-testid="intro-text">
            {config?.home_intro}
          </p>
        </section>
        
        <section>
          <p className="section-label">Recent Writing</p>
          <ul className="essay-list" data-testid="essay-list">
            {essays.map((essay) => (
              <li key={essay.id} className="essay-item" data-testid={`essay-item-${essay.slug}`}>
                <p className="essay-date">{essay.date}</p>
                <h2 className="essay-title">
                  <Link to={`/essays/${essay.slug}`} data-testid={`essay-link-${essay.slug}`}>
                    {essay.title}
                  </Link>
                </h2>
                <p className="essay-excerpt">{essay.excerpt}</p>
              </li>
            ))}
          </ul>
          
          {essays.length > 0 && (
            <Link to="/essays" className="view-all" data-testid="view-all-link">
              View all essays
            </Link>
          )}
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
