
const events = [
  { title: 'Founded', year: '2023' },
  { title: 'Launched Services', year: '2024' },
  { title: 'Present', year: '2025' },
];

function Timeline() {
  return (
    <div className="timeline-wrapper">
      <div className="timeline-line" />
      <div className="timeline-events">
        {events.map((event, index) => (
          <div className="timeline-event" key={index}>
            <div className="event-dot" />
            <strong className="gradient-text">{event.year}</strong>
            <p className="event-title">{event.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
