import React from "react";
import { Container } from "@mui/material";

const News = () => {
  return (
    <div className="landing-process">
      <Container className="container">
        <div className="container-fluid">
          <label>Announcements</label>
          <h1>
            Announcement <span className="gradient-text">News Rooms</span>
          </h1>
          {/* <NewsFeed source="ircc" title="IRCC Canada News" />
          <NewsFeed source="travel" title="Travel Advisories" />
          <NewsFeed source="immigration" title="Immigration Updates" /> */}

          <ul>
            <li>IRCC Canada</li>
            <li>Travel Advisory</li>
            <li>Immigration Updates</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default News;
