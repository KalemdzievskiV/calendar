import { AppointmentType } from "./AppointmentType";
import { Holiday } from "./HolidayType";

export type EventType = {
    start: Date;
    end: Date;
    data?: { appointment?: AppointmentType; holiday?: Holiday };
    isDraggable?: boolean;
  };
  