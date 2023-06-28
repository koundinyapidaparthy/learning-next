import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import styles from "../../styles/main.module.css";
function SelectedEventDetails() {
  const routeDetails = useRouter();
  const { eventId = "" } = routeDetails.query;
  const [eventData, setEventData] = useState({});
  useEffect(() => {
    const CurrentEventData = getEventById(eventId);
    console.log({ CurrentEventData });
    setEventData(CurrentEventData || {});
  }, [eventId]);
  return (
    <div>
      <img
        src={"/" + eventData.image}
        className={styles.eventImage}
        alt="Event Image"
      />
      <h3>
        {eventData.title} <span>({eventData.date})</span>
      </h3>
      <p>{eventData.description}</p>
    </div>
  );
}
export default SelectedEventDetails;
