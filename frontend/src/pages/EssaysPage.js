import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { essays } from '../data/essays';

export const EssaysPage = () => {
  return (
    <Layout>
      <div data-testid="essays-page">
        <header className="page-header">
          <h1 className="page-title" data-testid="page-title">Essays</h1>
          <p className="page-subtitle" data-testid="page-subtitle">
            Occasional notes on capital allocation, judgment under uncertainty, 
            and the practice of long-term investing.
          </p>
        </header>
        
        <ul className="essay-list" data-testid="essays-list">
          {essays.map((essay) => (
            <li key={essay.id} className="essay-item" data-testid={`essay-item-${essay.id}`}>
              <p className="essay-date">{essay.date}</p>
              <h2 className="essay-title">
                <Link to={`/essays/${essay.id}`} data-testid={`essay-link-${essay.id}`}>
                  {essay.title}
                </Link>
              </h2>
              <p className="essay-excerpt">{essay.excerpt}</p>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default EssaysPage;
