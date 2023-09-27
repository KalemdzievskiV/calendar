import moment from "moment";
import { EventType } from "../Types/EventType";

export enum AppointmentStatusCode {
  Pending = "P",
  CheckedIn = "CI",
}

export const EVENT_STATUS_COLORS = {
  P: "#bee2fa",
  CI: "#c7edca",
};

export const EVENTS: EventType[] = [
  {
    start: moment("2023-09-10T10:00:00").toDate(),
    end: moment("2023-09-10T11:00:00").toDate(),
    data: {
      appointment: {
        id: 1,
        status: "P",
        location: "New York",
        resource: "Dr Alex",
        description: "Test daescription for app 1",
      },
    },
    isDraggable: true,
  },
  {
    start: moment("2023-09-10T12:00:00").toDate(),
    end: moment("2023-09-10T12:30:00").toDate(),
    data: {
      appointment: {
        id: 2,
        status: "CI",
        location: "Washington",
        resource: "Dr David",
        description: "Test daescription for app 2",
      },
    },
    isDraggable: false,
  },
  {
    start: moment("2023-09-12T09:00:00").toDate(),
    end: moment("2023-09-12T14:59:59").toDate(),
    data: {
      holiday: {
        id: 1,
        name: "Christmas Holidays",
      },
    },
  },
];
