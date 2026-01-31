import { Layout } from '../components/Layout';

export const WhatWeDoPage = () => {
  return (
    <Layout>
      <div data-testid="what-we-do-page">
        {/* Editorial Header */}
        <header className="page-header">
          <h1 className="page-title" data-testid="page-title">What BACKGRND Does</h1>
          <p className="page-subtitle" data-testid="page-subtitle">
            An outline of our areas of work, written for those already 
            considering whether to engage.
          </p>
        </header>

        {/* How We Approach Businesses */}
        <section className="memo-section">
          <h2 className="memo-heading" data-testid="section-approach">How We Approach Businesses</h2>
          <div className="memo-content">
            <p>
              We begin by understanding how a business is constructed. Not its narrative 
              or positioning, but its actual architecture—how costs flow, where margins 
              accumulate, what constrains growth, and where dependencies lie.
            </p>
            <p>
              This is slower work than most expect. It requires reading across documents 
              that were never meant to be read together, asking questions that reveal 
              assumptions rather than answers, and sitting with ambiguity longer than 
              is comfortable.
            </p>
            <p>
              The output is not a recommendation. It is a clearer picture of what is 
              actually there, written plainly enough that principals can reason from it 
              directly.
            </p>
          </div>
        </section>

        {/* Business Design & Architecture */}
        <section id="business-design-architecture" className="memo-section">
          <h2 className="memo-heading" data-testid="section-business-design">Business Design & Architecture</h2>
          <div className="memo-content">
            <p>
              Every business has a design, whether deliberate or emergent. We examine 
              that design: how the company creates value, captures it, and defends it. 
              We look at cost structures not as line items but as expressions of 
              strategic choice. We trace revenue streams back to their structural sources.
            </p>
            <p>
              This work is particularly useful when a business has grown faster than 
              its founders' understanding of it, or when outside capital is being 
              considered and the principals want an independent view of what they 
              actually have.
            </p>
          </div>
        </section>

        {/* Value Chain Intelligence */}
        <section id="value-chain-intelligence" className="memo-section">
          <h2 className="memo-heading" data-testid="section-value-chain">Value Chain Intelligence</h2>
          <div className="memo-content">
            <p>
              Businesses exist within chains of activity that extend far beyond their 
              own operations. We map these chains—upstream to suppliers and inputs, 
              downstream to customers and end users, laterally to adjacent players 
              who shape the competitive environment.
            </p>
            <p>
              The purpose is not to produce a diagram, but to surface the points of 
              leverage and vulnerability that are often invisible from inside the 
              business. Where does power concentrate? Where is value leaking? Where 
              are the chokepoints that could become strategic?
            </p>
          </div>
        </section>

        {/* Business Diagnostics */}
        <section id="business-diagnostics" className="memo-section">
          <h2 className="memo-heading" data-testid="section-diagnostics">Business Diagnostics</h2>
          <div className="memo-content">
            <p>
              Sometimes a business is underperforming against its own potential, and 
              the reasons are not obvious. We conduct diagnostic work to identify 
              structural impediments—misalignments between strategy and operations, 
              pricing that contradicts positioning, cost structures that have drifted 
              from their original logic.
            </p>
            <p>
              This is forensic work. We are not looking for quick wins or obvious 
              inefficiencies. We are looking for the deeper patterns that explain 
              why a business behaves the way it does, especially when that behaviour 
              is frustrating to those who run it.
            </p>
          </div>
        </section>

        {/* Domain Architecture */}
        <section id="domain-architecture" className="memo-section">
          <h2 className="memo-heading" data-testid="section-domain">Domain Architecture</h2>
          <div className="memo-content">
            <p>
              Certain industries and sectors have structural characteristics that 
              shape all businesses within them. We study these domains—their economics, 
              their regulatory contours, their competitive dynamics, their historical 
              patterns of value creation and destruction.
            </p>
            <p>
              This work is useful for investors entering unfamiliar territory, for 
              operators seeking to understand the constraints they are working within, 
              and for anyone making a large commitment to a sector they have not yet 
              fully mapped.
            </p>
          </div>
        </section>

        {/* Capital Diligence */}
        <section className="memo-section">
          <h2 className="memo-heading" data-testid="section-capital">Capital Diligence</h2>
          <div className="memo-content">
            <p>
              Before capital changes hands—whether through investment, acquisition, 
              or partnership—there is value in understanding what is actually being 
              exchanged. We support principals with independent analysis that sits 
              outside the transaction process itself.
            </p>
            <p>
              Our work here is not due diligence in the legal or accounting sense. 
              It is structural diligence: an assessment of business architecture, 
              competitive position, and value chain dynamics that informs the 
              judgment of those with capital at stake.
            </p>
          </div>
        </section>

        {/* Venture Studio */}
        <section className="memo-section">
          <h2 className="memo-heading" data-testid="section-venture">Venture Studio</h2>
          <div className="memo-content">
            <p>
              Occasionally, our analysis reveals opportunities that do not yet have 
              a business attached to them—gaps in value chains, structural shifts 
              that create new openings, domains where architecture could be built 
              differently.
            </p>
            <p>
              In these cases, we sometimes participate in building. This is not our 
              primary work, and we are selective about when we engage. But we maintain 
              the capacity to move from analysis to formation when the conditions are 
              right and the principals are aligned.
            </p>
          </div>
        </section>

        {/* Closing Statement */}
        <section className="memo-section closing-memo">
          <div className="memo-content">
            <p className="closing-memo-text" data-testid="closing-statement">
              This is the work we do. It is not comprehensive, and it is not for 
              everyone. We are useful to those who have already decided to look 
              closely at something, and who want an independent perspective before 
              making decisions that are difficult to reverse.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default WhatWeDoPage;
