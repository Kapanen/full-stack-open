import EventSetItem from "./eventsetitem"
import events from "../data/event.json"


export default function eventset(){
    return (
        <div className="eventbox">
          { events.map((event, index) => <EventSetItem key={index} event={event} />) }
        </div>
    )
}