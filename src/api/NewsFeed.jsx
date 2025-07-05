import { useEffect, useState } from "react";

export default function IRCCNewsFeed() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Simulated richer news data
    const staticNews = [
      {
        title: "IRCC Canada announces Express Entry changes",
        link: "https://www.canada.ca/en/immigration-refugees-citizenship/news/express-entry-changes.html",
        pubDate: "2024-05-12T10:00:00Z",
        description:
          "The Government of Canada has introduced updates to the Express Entry system to better attract skilled workers.",
        thumbnail: "https://via.placeholder.com/100x100?text=IRCC",
      },
      {
        title: "Travel Advisory: Updated entry requirements for Canada",
        link: "https://travel.gc.ca/travelling/advisories",
        pubDate: "2024-06-01T08:30:00Z",
        description:
          "Canada has revised its travel requirements for international arrivals due to evolving global conditions.",
        thumbnail: "https://via.placeholder.com/100x100?text=Travel",
      },
      {
        title: "IRCC expands work permit options for international graduates",
        link: "https://www.canada.ca/en/immigration-refugees-citizenship/news/work-permit-expansion.html",
        pubDate: "2023-12-20T14:00:00Z",
        description:
          "New pathways introduced to help international graduates stay and work in Canada.",
        thumbnail: "https://via.placeholder.com/100x100?text=Work",
      },
    ];

    setNews(staticNews);
  }, []);

  return (
    <div className="ircc-news-feed">
      <h2 className="news-title">IRCC Canada & Travel Updates</h2>
      <ul className="news-list">
        {news.map((item, index) => (
          <li key={index} className="news-item">
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="news-link"
            >
              <img
                src={item.thumbnail}
                alt="News"
                className="news-thumbnail"
              />
              <div className="news-content">
                <h3 className="news-item-title">{item.title}</h3>
                <p className="news-date">
                  {new Date(item.pubDate).toLocaleDateString()}
                </p>
                <p className="news-description">{item.description}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
