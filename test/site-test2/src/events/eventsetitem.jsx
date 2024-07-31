export default function EventSetItem({ event }) {
    return (
        <div className="eventbox-event plain">
            <div className="event-title">{event.title}</div>
            <div>{event.date}</div>
            <div>{event.location}</div>
            <div>{event.description}</div>
            {event.icon && <i className={event.icon + " event-icon"}></i>}
        </div>
    );
}
