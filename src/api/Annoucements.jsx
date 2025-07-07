// import React, { useEffect, useState } from "react";

// const IRCCFeed = () => {
//   const [announcements, setAnnouncements] = useState([]);

//   const sources = [
//     {
//       name: "IRCC Announcements",
//       url: "https://www.canada.ca/en/immigration-refugees-citizenship/news/feeds.atom.xml",
//       icon: "/images/ircc-icon.png",
//     },
//     {
//       name: "Canada Travel Advisories",
//       url: "https://travel.gc.ca/rss/travelalerts.xml",
//       icon: "/images/travel-icon.png",
//     },
//   ];

//   useEffect(() => {
//     const fetchAll = async () => {
//       const allNews = [];

//       for (const source of sources) {
//         try {
//           const res = await fetch(
//             `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
//               source.url
//             )}`
//           );
//           const data = await res.json();
//           if (data.items) {
//             const formatted = data.items.map((item) => ({
//               title: item.title,
//               link: item.link,
//               date: item.pubDate,
//               source: source.name,
//               description: item.description || "",
//               icon: source.icon,
//             }));
//             allNews.push(...formatted);
//           }
//         } catch (err) {
//           console.error(`Error fetching ${source.name}:`, err);
//         }
//       }

//       // Sort by latest date
//       allNews.sort(
//         (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
//       );

//       setAnnouncements(allNews);
//     };

//     fetchAll();

//     // Optional Auto-refresh every 10 mins
//     const interval = setInterval(fetchAll, 600000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="announcements-container">
//       <h2 className="announcements-title">Latest Announcements</h2>
//       <ul className="announcements-list">
//         {announcements.map((item, index) => (
//           <li key={index} className="announcements-item">
//             <div className="announcement-header">
//               <img
//                 src={item.icon}
//                 alt={item.source}
//                 className="announcement-icon"
//               />
//               <a
//                 href={item.link}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="announcements-link"
//               >
//                 {item.title}
//               </a>
//             </div>
//             <div className="announcements-meta">
//               {item.source} | {new Date(item.date).toLocaleDateString()}
//             </div>
//             {item.description && (
//               <p className="announcements-description">{item.description}</p>
//             )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default IRCCFeed;
