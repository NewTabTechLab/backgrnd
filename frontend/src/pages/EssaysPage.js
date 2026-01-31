import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { getEssays } from '../api/client';

export const EssaysPage = () => {
  const [essays, setEssays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEssays = async () => {
      try {
        const data = await getEssays();
        setEssays(data);
      } catch (err) {
        setError('Unable to load essays');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEssays();
  }, []);

  if (loading) {
    return (
      <Layout>
        <div data-testid="essays-loading" className="loading">Loading...</div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div data-testid="essays-error" className="error">{error}</div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div data-testid="essays-page">
        <header className="page-header">
          <h1 className="page-title" data-testid="page-title">Essays</h1>
        </header>
        
        <ul className="essays-list" data-testid="essays-list">
          {essays.map((essay) => (
            <li key={essay.id} className="essays-list-item" data-testid={`essay-item-${essay.slug}`}>
              <Link to={`/essays/${essay.slug}`} className="essays-list-link" data-testid={`essay-link-${essay.slug}`}>
                {essay.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default EssaysPage;
