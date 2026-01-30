import { Layout } from '../components/Layout';

export const HowWeThinkPage = () => {
  return (
    <Layout>
      <article className="essay-article" data-testid="how-we-think-page">
        {/* Header */}
        <header className="essay-article-header">
          <h1 className="essay-article-title" data-testid="page-title">How BACKGRND Thinks</h1>
          <p className="essay-article-subtitle" data-testid="page-subtitle">
            Notes on the analytical dispositions that shape our work.
          </p>
        </header>

        {/* Structure Before Motion */}
        <section className="essay-section">
          <h2 className="essay-section-title" data-testid="section-structure">Structure Before Motion</h2>
          <div className="essay-section-body">
            <p>
              Most analysis begins with activity. Revenue is growing or declining. 
              Margins are expanding or compressing. Market share is shifting. These 
              are the things that draw attention, and understandably so—they are 
              visible, measurable, and urgent.
            </p>
            <p>
              We have found it more useful to begin elsewhere: with structure. Before 
              asking what a business is doing, we ask what a business is. How is it 
              built? What are its fixed constraints and variable levers? Where does 
              value accumulate, and where does it leak? What would have to change for 
              it to behave differently?
            </p>
            <p>
              This is not a rejection of activity as a source of insight. It is a 
              sequencing preference. Structure explains activity more reliably than 
              activity explains structure. A business that is growing quickly may be 
              doing so because of structural advantages, or despite structural 
              weaknesses. The activity alone does not tell you which.
            </p>
            <p>
              When we begin with structure, we often find that the questions people 
              are asking are the wrong questions. The issue is not whether to expand 
              into a new market, but whether the cost structure permits it. The issue 
              is not whether to raise prices, but whether the value chain position 
              supports it. The strategic question dissolves into a structural one, 
              and the structural answer is usually clearer.
            </p>
          </div>
        </section>

        {/* Time as a Structural Dimension */}
        <section className="essay-section">
          <h2 className="essay-section-title" data-testid="section-time">Time as a Structural Dimension</h2>
          <div className="essay-section-body">
            <p>
              Time is typically treated as a background condition—the medium in which 
              business happens, not a factor in how it is analysed. We treat it 
              differently. Time is a structural dimension, as real as cost structure 
              or competitive position.
            </p>
            <p>
              Consider how differently the same business looks depending on the time 
              horizon applied. A company losing money today may be building durable 
              advantages that will compound over decades. A company making money today 
              may be harvesting a position that is structurally eroding. The numbers 
              are identical; the interpretation depends entirely on the temporal frame.
            </p>
            <p>
              We find that most participants in business and capital markets operate 
              on remarkably similar time horizons. Quarterly reporting cycles, annual 
              compensation reviews, three-to-five-year fund lives—these rhythms 
              synchronise behaviour in ways that create both crowding and gaps. The 
              crowding is obvious. The gaps are where we focus.
            </p>
            <p>
              This does not mean we always take the longest view. It means we try to 
              match the time horizon to the structure being analysed. Some businesses 
              are best understood on a five-year frame. Others require twenty. The 
              appropriate horizon is itself a structural question, and getting it 
              wrong distorts everything that follows.
            </p>
          </div>
        </section>

        {/* Value Chains Decide Outcomes */}
        <section className="essay-section">
          <h2 className="essay-section-title" data-testid="section-value-chains">Value Chains Decide Outcomes</h2>
          <div className="essay-section-body">
            <p>
              A business does not exist in isolation. It exists within a chain of 
              activities that extends from raw inputs to end consumption, with value 
              being created, captured, and transferred at each link. The position a 
              business occupies in this chain—and the power dynamics at each 
              interface—often matters more than anything happening inside the business 
              itself.
            </p>
            <p>
              We have seen companies with excellent operations and talented teams 
              struggle indefinitely because their position in the value chain was 
              structurally weak. We have seen mediocre operators thrive because they 
              happened to sit at a chokepoint where value concentrated. The internal 
              view misses this entirely. The chain view makes it obvious.
            </p>
            <p>
              Value chain analysis is not new, but it is rarely done with sufficient 
              rigour. The typical approach maps the chain and stops there, as if the 
              map itself were the insight. We go further: tracing how value flows 
              through the chain, identifying where power accumulates, understanding 
              how the chain is likely to evolve, and locating the points where 
              structural intervention is possible.
            </p>
            <p>
              This work often reveals that the most important decisions a business 
              faces are not internal at all. They are decisions about where to 
              position in the chain, which interfaces to control, and which 
              dependencies to accept. These are architectural decisions, and they 
              are difficult to reverse once made.
            </p>
          </div>
        </section>

        {/* Capital as a Structural Force */}
        <section className="essay-section">
          <h2 className="essay-section-title" data-testid="section-capital">Capital as a Structural Force</h2>
          <div className="essay-section-body">
            <p>
              Capital is often discussed as if it were simply fuel—something a 
              business needs in order to do what it has already decided to do. This 
              framing understates the role capital plays in shaping what is possible.
            </p>
            <p>
              The structure of capital—its amount, its source, its terms, its 
              duration—creates constraints and permissions that ripple through every 
              other decision a business makes. A company funded by patient capital 
              can make choices that a company funded by impatient capital cannot, 
              even if both have access to the same information and talent.
            </p>
            <p>
              We pay close attention to capital structure not because we are 
              investors—we are not—but because capital structure is a structural 
              fact that explains behaviour. When a business makes a decision that 
              seems irrational from an operating perspective, the explanation is 
              often found in the capital structure. The business is not optimising 
              for operations; it is optimising for its capital constraints.
            </p>
            <p>
              This lens is particularly useful in moments of stress or transition. 
              When capital structures come under pressure, they reveal dependencies 
              that were invisible in calmer times. The business that looked 
              independent turns out to be constrained. The position that looked 
              strong turns out to be leveraged. Understanding these dynamics in 
              advance is part of what we do.
            </p>
          </div>
        </section>

        {/* Why BACKGRND Avoids Execution */}
        <section className="essay-section">
          <h2 className="essay-section-title" data-testid="section-execution">Why BACKGRND Avoids Execution</h2>
          <div className="essay-section-body">
            <p>
              We are sometimes asked why we do not execute on the analysis we 
              produce—why we do not manage capital, advise on transactions, or help 
              implement the changes our work suggests. The question assumes that 
              execution is the natural extension of analysis, that insight without 
              action is incomplete.
            </p>
            <p>
              We see it differently. Analysis and execution require different 
              dispositions, different incentives, and different relationships to 
              truth. The analyst who is also an executor has a stake in certain 
              conclusions. The advisor who benefits from transactions has a reason 
              to find transactions advisable. These conflicts are not always 
              corrupting, but they are always present, and they are difficult to 
              see from inside.
            </p>
            <p>
              By staying out of execution, we preserve something that is increasingly 
              rare: the ability to be wrong without cost to ourselves. Our analysis 
              can conclude that a business should not be acquired, that a market 
              should not be entered, that a transaction should not proceed. We have 
              no fee that depends on the opposite conclusion. This independence is 
              not a marketing position. It is a structural feature of how we have 
              chosen to work.
            </p>
            <p>
              The cost of this choice is real. We are not present when decisions are 
              made. We do not see how our analysis is used, or whether it is used at 
              all. We give up the satisfaction of implementation and the learning 
              that comes from it. But we gain something in return: the freedom to 
              follow the analysis wherever it leads, without concern for where we 
              need it to end up.
            </p>
          </div>
        </section>

        {/* Closing */}
        <footer className="essay-article-footer">
          <p className="essay-closing" data-testid="closing-statement">
            These are not principles we arrived at theoretically. They emerged from 
            doing the work—from noticing which questions led to useful answers and 
            which led to dead ends, from seeing which frames illuminated and which 
            obscured. They continue to evolve as we encounter situations that test 
            them. What is written here is where we are now, not where we will 
            always be.
          </p>
        </footer>
      </article>
    </Layout>
  );
};

export default HowWeThinkPage;
