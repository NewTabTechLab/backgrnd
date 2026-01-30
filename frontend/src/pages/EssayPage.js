import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { getEssayBySlug } from '../api/client';

export const EssayPage = () => {
  const { slug } = useParams();
  const [essay, setEssay] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEssay = async () => {
      try {
        const data = await getEssayBySlug(slug);
        setEssay(data);
      } catch (err) {
        if (err.response?.status === 404) {
          setError('not_found');
        } else {
          setError('Unable to load note');
        }
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchEssay();
  }, [slug]);

  if (loading) {
    return (
      <Layout>
        <div data-testid="essay-loading" className="loading">Loading...</div>
      </Layout>
    );
  }

  if (error === 'not_found') {
    return (
      <Layout>
        <div data-testid="essay-not-found">
          <Link to="/essays" className="back-link" data-testid="back-link">
            ← Notes
          </Link>
          <h1 className="page-title">Note not found</h1>
          <p className="secondary">The note you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div data-testid="essay-error" className="error">{error}</div>
      </Layout>
    );
  }

  // Only show first two paragraphs
  const visibleParagraphs = essay.body.slice(0, 2);

  return (
    <Layout>
      <article data-testid="essay-page">
        <Link to="/essays" className="back-link" data-testid="back-link">
          ← Notes
        </Link>
        
        <header className="essay-header">
          <div className="essay-meta" data-testid="essay-meta">
            <span>{essay.date}</span>
          </div>
          <h1 className="page-title" data-testid="essay-title">{essay.title}</h1>
        </header>
        
        <div className="essay-body prose" data-testid="essay-body">
          {visibleParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {/* Access Limitation */}
        <div className="access-limitation" data-testid="access-limitation">
          <p className="limitation-text">
            Full access to these notes is intentionally limited.
          </p>
          <p className="limitation-subtext">
            These working observations are shared selectively. If you have arrived 
            here through a direct referral, you may request extended access.
          </p>
          <Link to="/contact" className="request-access-link" data-testid="request-access-link">
            Request Context
          </Link>
        </div>
      </article>
    </Layout>
  );
};

export default EssayPage;
