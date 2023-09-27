import { Box } from "@mui/material";
import { AppointmentType } from "../../Types/AppointmentType";
import { AppointmentStatusCode, EVENT_STATUS_COLORS } from "../../Data/CalendarData";

export default function Appointment({
  appointment,
}: {
  appointment: AppointmentType;
}) {
  const { location, status, resource, description } = appointment;
  const background = EVENT_STATUS_COLORS[status as AppointmentStatusCode];


  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        backgroundColor: background,
        "&:hover": {
          backgroundColor: "primary.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <span>{location}</span>
      <span>Tsesad</span>
    </Box>
  );
}
