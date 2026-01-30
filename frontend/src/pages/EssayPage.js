import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { getEssayById } from '../data/essays';

export const EssayPage = () => {
  const { id } = useParams();
  const essay = getEssayById(id);
  
  if (!essay) {
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
