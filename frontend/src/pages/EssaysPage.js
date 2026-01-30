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
        setError('Unable to load notes');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEssays();
  }, []);

  // Extract fragment (first 2-3 sentences) from excerpt
  const getFragment = (excerpt) => {
    const sentences = excerpt.match(/[^.!?]+[.!?]+/g) || [excerpt];
    return sentences.slice(0, 2).join('').trim();
  };

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
          <h1 className="page-title" data-testid="page-title">Notes</h1>
          <p className="page-subtitle" data-testid="page-subtitle">
            Working observations on structure, capital, and judgment.
          </p>
        </header>
        
        <ul className="notes-list" data-testid="notes-list">
          {essays.map((essay) => (
            <li key={essay.id} className="note-item" data-testid={`note-item-${essay.slug}`}>
              <p className="note-date">{essay.date}</p>
              <h2 className="note-title">
                <Link to={`/essays/${essay.slug}`} data-testid={`note-link-${essay.slug}`}>
                  {essay.title}
                </Link>
              </h2>
              <p className="note-fragment">{getFragment(essay.excerpt)}</p>
            </li>
          ))}
        </ul>

        <footer className="notes-footer">
          <p className="access-notice" data-testid="access-notice">
            Full access to these notes is intentionally limited.
          </p>
        </footer>
      </div>
    </Layout>
  );
};

export default EssaysPage;
