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
          <p className="secondary">The essay you're looking for doesn't exist.</p>
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

  return (
    <Layout>
      <article data-testid="essay-page">
        <Link to="/essays" className="back-link" data-testid="back-link">
          ← Essays
        </Link>
        
        <header className="essay-header">
          <div className="essay-meta" data-testid="essay-meta">
            <span>{essay.date}</span>
          </div>
          <h1 className="page-title" data-testid="essay-title">{essay.title}</h1>
        </header>
        
        <div className="essay-body prose" data-testid="essay-body">
          {essay.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </Layout>
  );
};

export default EssayPage;
