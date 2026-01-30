import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { essays } from '../data/essays';

export const HomePage = () => {
  const recentEssays = essays.slice(0, 3);
  
  return (
    <Layout>
      <div data-testid="home-page">
        <section className="intro">
          <p className="intro-text" data-testid="intro-text">
            BACKGRND is a private investment firm. We allocate capital with long time horizons 
            and write occasionally about our thinking.
          </p>
        </section>
        
        <section>
          <p className="section-label">Recent Writing</p>
          <ul className="essay-list" data-testid="essay-list">
            {recentEssays.map((essay) => (
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
          
          <Link to="/essays" className="nav-link" style={{ marginTop: '2rem', display: 'inline-block' }} data-testid="view-all-link">
            View all essays
          </Link>
        </section>
      </div>
    </Layout>
  );
};

export default HomePage;
