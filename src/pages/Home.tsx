const Home = () => {
  return (
    <div className="page-container">
      {/* Desktop Version */}
      <div className="desktop-view">
        <spline-viewer url="https://prod.spline.design/hJKMelfycWC4hWys/scene.splinecode" />
      </div>

      {/* Mobile Version */}
      <div className="mobile-view">
        <div className="mobile-hero">
          <h1>Dispulse</h1>
          <p>We design brands that move culture.</p>
          <button>Let’s Work</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
