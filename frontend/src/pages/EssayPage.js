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
          setError('Unable to load essay');
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
            ← Essays
          </Link>
          <h1 className="page-title">Essay not found</h1>
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

  const isGated = essay.gated === true;
  const visibleParagraphs = isGated ? essay.body.slice(0, 2) : essay.body;

  return (
    <Layout>
      <article className="essay-article" data-testid="essay-page">
        <Link to="/essays" className="back-link" data-testid="back-link">
          ← Essays
        </Link>
        
        <header className="essay-article-header">
          <p className="essay-article-date" data-testid="essay-date">{essay.date}</p>
          <h1 className="essay-article-title" data-testid="essay-title">{essay.title}</h1>
        </header>
        
        <div className="essay-article-body" data-testid="essay-body">
          {visibleParagraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        {isGated && (
          <div className="essay-gating" data-testid="essay-gating">
            <p className="gating-message">
              Full access to this essay is intentionally limited.
            </p>
            <Link to="/access" className="gating-link" data-testid="gating-access-link">
              Request Access
            </Link>
          </div>
        )}
      </article>
    </Layout>
  );
};

export default EssayPage;
