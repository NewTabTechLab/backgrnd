import { Link } from 'react-router-dom';
import { Layout } from '../components/Layout';

export const VentureStudioPage = () => {
  return (
    <Layout>
      <article className="essay-article" data-testid="venture-studio-page">
        {/* Header */}
        <header className="essay-article-header">
          <h1 className="essay-article-title" data-testid="page-title">Venture Studio</h1>
          <p className="essay-article-subtitle" data-testid="page-subtitle">
            Notes on how and why we occasionally participate in building.
          </p>
        </header>

        {/* Why the Studio Exists */}
        <section className="essay-section">
          <h2 className="essay-section-title" data-testid="section-why-exists">Why the Studio Exists</h2>
          <div className="essay-section-body">
            <p>
              The studio exists because our analytical work occasionally surfaces 
              something that does not yet have a business attached to it. A gap in 
              a value chain that no one is addressing. A structural shift that 
              creates an opening. A configuration of assets and capabilities that 
              could be assembled differently than it currently is.
            </p>
            <p>
              When we encounter these situations, we face a choice: note the 
              observation and move on, or participate in building something around 
              it. For most observations, we note and move on. The gap is real but 
              the conditions are not right, or the people are not available, or 
              the timing is wrong. Occasionally, the conditions align, and we 
              choose to participate.
            </p>
            <p>
              The studio is not a separate business. It is an extension of the 
              analytical work—a place where certain observations can be acted upon 
              rather than merely recorded. It exists because we believe that some 
              forms of understanding are only available through building, and 
              because we want to maintain the capacity to act when circumstances 
              warrant.
            </p>
          </div>
        </section>

        {/* Internal Discipline */}
        <section className="essay-section">
          <h2 className="essay-section-title" data-testid="section-discipline">Internal Discipline</h2>
          <div className="essay-section-body">
            <p>
              The studio operates under strict internal discipline. We do not seek 
              deal flow. We do not review pitches. We do not respond to 
              introductions from founders seeking backing. The ventures we pursue 
              originate entirely from our own analytical work—from observations 
              that accumulate over time until they become too interesting to ignore.
            </p>
            <p>
              This discipline is not a marketing position. It is a structural 
              constraint we impose on ourselves to preserve the quality of what we 
              do. The moment we begin evaluating external opportunities, we become 
              a different kind of organisation—one that must process volume, 
              maintain relationships, and allocate attention across a portfolio of 
              possibilities. That is not what we want to be.
            </p>
            <p>
              The discipline also protects our analytical work. If we were known 
              to act on our observations, those observations would become 
              conflicted. Clients would wonder whether our analysis was shaped by 
              our own interests. By keeping the studio internal and highly 
              selective, we maintain the independence that makes our analytical 
              work valuable.
            </p>
          </div>
        </section>

        {/* Nature of Ventures */}
        <section className="essay-section">
          <h2 className="essay-section-title" data-testid="section-nature">Nature of Ventures</h2>
          <div className="essay-section-body">
            <p>
              The ventures that emerge from the studio share certain 
              characteristics. They tend to be structurally novel—not incremental 
              improvements to existing categories, but new configurations that 
              address gaps we have identified through analysis. They tend to 
              operate in domains we understand deeply, where our existing knowledge 
              provides genuine advantage.
            </p>
            <p>
              They are built slowly. We do not subscribe to the view that speed is 
              always a virtue or that markets reward first movers. The ventures we 
              build are designed to be durable rather than fast, to compound over 
              time rather than capture attention quickly. This is a reflection of 
              how we think about business generally.
            </p>
            <p>
              They are built quietly. We do not announce what we are working on. 
              We do not seek press coverage or public validation. The ventures 
              exist to solve problems we have identified, not to signal activity 
              or attract interest. Most people will never hear of them, and that 
              is by design.
            </p>
          </div>
        </section>

        {/* Role of BACKGRND */}
        <section className="essay-section">
          <h2 className="essay-section-title" data-testid="section-role">Role of BACKGRND</h2>
          <div className="essay-section-body">
            <p>
              Our role in studio ventures varies. In some cases, we are the 
              primary builders—assembling the team, designing the architecture, 
              making the early decisions that shape what the venture becomes. In 
              other cases, we are participants alongside others who bring 
              capabilities we lack.
            </p>
            <p>
              What remains constant is our focus on structure. We contribute most 
              in the early phases, when the fundamental architecture of the 
              business is being determined. How should value be created? Where 
              should the business sit in its value chain? What capital structure 
              supports the strategy? These are the questions we are equipped to 
              answer.
            </p>
            <p>
              We are less useful in execution. The day-to-day work of building—
              hiring, selling, operating—requires skills and temperament that are 
              not our strength. We recognise this and design our involvement 
              accordingly. The goal is to contribute where we add value and step 
              back where we do not.
            </p>
          </div>
        </section>

        {/* External Participation */}
        <section className="essay-section">
          <h2 className="essay-section-title" data-testid="section-external">External Participation (Selective)</h2>
          <div className="essay-section-body">
            <p>
              On rare occasions, we invite external participation in studio 
              ventures. This is not fundraising in the conventional sense. We do 
              not prepare materials, conduct roadshows, or seek to fill a round. 
              We identify specific individuals whose capabilities or capital would 
              strengthen what we are building, and we approach them directly.
            </p>
            <p>
              The individuals we approach tend to share certain characteristics. 
              They are patient—willing to commit capital on time horizons that 
              match how we build. They are independent—able to make decisions 
              without committee approval or institutional constraint. They are 
              quiet—uninterested in the visibility that often accompanies 
              investment.
            </p>
            <p>
              If you have received communication from us about a specific venture, 
              it is because we believe you fit this profile. If you have not, it 
              is not an oversight. We do not maintain a list of potential 
              participants or conduct outreach on a rolling basis. Each approach 
              is specific to a venture and a person.
            </p>
          </div>
        </section>

        {/* Why Most Ideas Are Rejected */}
        <section className="essay-section">
          <h2 className="essay-section-title" data-testid="section-rejected">Why Most Ideas Are Rejected</h2>
          <div className="essay-section-body">
            <p>
              The studio rejects far more ideas than it pursues. This is not 
              because the ideas are bad—many are interesting, some are genuinely 
              good. It is because the conditions for building are rarely aligned.
            </p>
            <p>
              An idea requires more than structural validity. It requires the 
              right people to be available at the right time. It requires capital 
              conditions that support patient building. It requires a domain where 
              we have sufficient depth to contribute meaningfully. It requires 
              timing—not in the market sense, but in the sense of readiness. Most 
              ideas fail one or more of these tests.
            </p>
            <p>
              We also reject ideas that would compromise our primary work. A 
              venture that required significant ongoing attention would distract 
              from client engagements. A venture in a domain where we advise 
              clients would create conflicts. A venture that required public 
              visibility would change how we are perceived. These constraints are 
              real, and we take them seriously.
            </p>
            <p>
              The rejection rate is a feature, not a bug. It ensures that when we 
              do commit to building, the conditions are genuinely right. It 
              preserves our analytical independence. It keeps the studio small and 
              focused, which is how we want it to be.
            </p>
          </div>
        </section>

        {/* Closing */}
        <footer className="essay-article-footer">
          <p className="essay-closing" data-testid="closing-statement">
            The studio is not central to what BACKGRND does. It is a small, 
            quiet part of our work—a place where certain observations can become 
            something more than observations. It operates in the background, as 
            does everything we do.
          </p>
        </footer>
      </article>
    </Layout>
  );
};

export default VentureStudioPage;
