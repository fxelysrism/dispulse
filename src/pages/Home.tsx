const Home = () => {
  return (
    <div className="page-container">
      {/* Desktop Experience */}
      <div className="desktop-view">
        <spline-viewer url="https://prod.spline.design/hJKMelfycWC4hWys/scene.splinecode" />
        <div className="desktop-overlay">
          <h1 className="hero-title">Dispulse</h1>
          <p className="hero-tagline">
            We design brands that move culture.
          </p>
        </div>
      </div>

      {/* Mobile Experience */}
      <div className="mobile-view">
        <div className="mobile-hero">
          <span className="mobile-eyebrow">Creative Studio</span>

          <h1 className="mobile-title">
            Brands<br />That Move Culture
          </h1>

          <p className="mobile-description">
            We help creators, esports teams, and modern brands build identity,
            community, and long-term relevance.
          </p>

          <div className="mobile-actions">
            <button className="primary-btn">Start a Project</button>
            <button className="secondary-btn">View Our Work</button>
          </div>
        </div>

        <div className="mobile-proof">
          <div className="proof-item">
            <strong>45K+</strong>
            <span>Followers Grown</span>
          </div>
          <div className="proof-item">
            <strong>Premium</strong>
            <span>Brand Positioning</span>
          </div>
          <div className="proof-item">
            <strong>Long-Term</strong>
            <span>Partnership Focus</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
