import React from "react";
import { Link } from "react-router-dom";

import ethicalIcon from "../../assets/ethical.png";
import proactiveIcon from "../../assets/proactive.png";
import ecoIcon from "../../assets/eco.png";
import growthIcon from "../../assets/growth.png";

const Sustainability = () => {
  const cards = [
    {
      title: "Our Values",
      description:
        "We lead with honesty, integrity, and smart innovation. Every service we deliver is built on trust, ethics, and forward-thinking tech.",
      icon: ethicalIcon,
      linkTo: "/about-us#values",
    },
    {
      title: "Our Green Practices",
      description:
        "Our operations are digital-first to reduce waste. We support eco-conscious partners, remote work, and energy-efficient office culture.",
      icon: ecoIcon,
      linkTo: "/about-us#green-practices",
    },
  ];

  return (
    <div className="landing-stats">
      <div className="container">
        <div className="container-fluid">
          <h1>
            Our Values and <span className="gradient-text-blue">Practices</span>
          </h1>
        </div>

        <div className="container-lg" style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          {cards.map((card, index) => (
            <div
              className="card"
              key={index}
              style={{ flex: "1 1 30%", minWidth: "280px" }}
            >
              <div className="card-body" style={{ height: "fit-content" }}>
                <div className="card-group" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <img src={card.icon} alt={card.title} style={{ width: 40, height: 40 }} />
                  <h3>{card.title}</h3>
                </div>
                <div className="card-text">
                  <p>{card.description}</p>
                </div>

                <Link to={card.linkTo} className="btn btn-primary">
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
