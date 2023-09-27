import moment from "moment";
import Calendar from "./BasicCalendar";
import { EVENTS } from "../../Data/CalendarData";
import { EventType } from "../../Types/EventType";
import Appointment from "../Appointment/AppointmentComponent";


export default function CalendarScheduler() {
    const components = {
        event: ({ event } : {event:any}) => {
          const data = event?.data;
          if (data?.appointment)
            return <Appointment appointment={data?.appointment} />;
          return null;
        },
      };
    
    const { appointments, blockouts } = EVENTS.reduce(
        (acc, event) => {
          if (event?.data?.appointment) acc.appointments.push(event);
          if (event?.data?.holiday) acc.blockouts.push(event);
          return acc;
        },
        { appointments: [] as EventType[], blockouts: [] as EventType[] }
      );

  return <Calendar events={appointments} components={components}/>
}