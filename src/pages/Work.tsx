interface Project {
  client: string;
  category: string;
  description: string;
  results: string[];
  image: string;
  notes?: {
    objective: string;
    approach: string[];
    outcome: string;
  };
}

function Work() {
  const projects: Project[] = [
    {
      client: "Fruity INC",
      category:
        "Services: Content Development · Brand Outreach & Partnerships · Business Operations",
      description:
        "FruityINC came to us during a key growth phase, looking to transition from a creator-led project into a structured, pitch-ready business. Our role was to help professionalise both the brands outward presence and its internal operations.",
      results: [
        "Led brand outreach and partnership conversations to open commercial opportunities",
        "Supported business operations, helping streamline workflows and decision-making",
        "Built a full, pitch-ready deck to position FruityINC as a viable partner for brands and collaborators",
        "Evolved into a structured, pitchable business with clear messaging and professional assets designed for partnerships and growth"
      ],
      image: "https://i.ibb.co/0jSGvjBh/Fruity-INC-Banner.jpg"
    },
    {
      client: "Void Esports",
      category: "Instagram Growth",
      description:
        "Grew Instagram following from 2K to 45K in 6 months through strategic content and community building.",
      notes: {
        objective:
          "Reposition Void Esports within the Fortnite ecosystem by shifting from short-form, trend-driven content to long-form, documentary-style storytelling.",
        approach: [
          "Developed a documentary-style content strategy centered on Fortnite players and stories",
          "Produced high-quality, narrative-driven long-form content",
          "Supported community engagement initiatives",
          "Led brand partnership outreach aligned with premium positioning"
        ],
        outcome:
          "Repositioned Void Esports as a premium, story-driven media brand with stronger community connection and long-term partnership potential"
      },
      results: [
        "2,150% increase in followers",
        "Average engagement rate: 8.5%",
        "Generated 150+ gym memberships"
      ],
      image: "https://i.ibb.co/XZZrtmvj/Void-Esports-Banner.jpg"
    }
  ];

  return (
    <div className="page-content">
      <div className="work-hero">
        <h1 className="work-title">Our Work</h1>
        <p className="work-subtitle">
          Real results for real clients. See how we've helped brands grow their
          social presence.
        </p>
      </div>

      <div className="work-grid">
        {projects.map((project, index) => (
          <div key={index} className="work-card">
            <div className="work-image-container">
              <img
                src={project.image}
                alt={project.client}
                className="work-image"
              />
              <div className="work-overlay">
                <span className="work-category">{project.category}</span>
              </div>
            </div>

            <div className="work-content">
              <h3 className="work-client">{project.client}</h3>
              <p className="work-description">{project.description}</p>

              <div className="work-results">
                <h4 className="results-title">Results:</h4>
                <ul className="results-list">
                  {project.results.map((result, idx) => (
                    <li key={idx}>{result}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
