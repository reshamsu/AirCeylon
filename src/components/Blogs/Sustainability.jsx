import React from "react";
import { Container } from "@mui/material";

const Sustainability = () => {
  const cards = [
    {
      title: "Ethical Innovation",
      description:
        "We lead with honesty, integrity, and smart innovation. Every service we deliver is built on trust, ethics, and forward-thinking tech.",
      icon: "/assets/ethical.png",
    },
    {
      title: "Proactive & People-First",
      description:
        "We anticipate challenges and empower people. From personalized journeys to community transition support, we go beyond expectations.",
      icon: "/assets/proactive.png",
    },
    {
      title: "Green Practices",
      description:
        "Our operations are digital-first to reduce waste. We support eco-conscious partners, remote work, and energy-efficient office culture.",
      icon: "/assets/eco.png",
    },
    {
      title: "Inclusive Growth",
      description:
        "We uplift migrant communities and promote inclusive development through education, jobs, and sustainable living support.",
      icon: "/assets/growth.png",
    },
  ];

  return (
    <div className="landing-stats">
      <Container className="container">
        <div className="container-fluid">
          <label>CSR</label>
          <h1>
            Sustainability <span className="gradient-text-blue">Values</span>
          </h1>
        </div>

        <div className="container-lg">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-body">
                <div className="card-info">
                  <img src={card.icon} alt={card.title} />
                  <h3>{card.title}</h3>
                </div>
                <div className="card-text">
                  <p>{card.description}</p>
                </div>
              </div>
              <div className="button">
                <button to="/" className="btn btn-primary">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Sustainability;
