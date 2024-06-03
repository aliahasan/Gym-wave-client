import { format, addHours, parse } from "date-fns";

export const generateTimeSlots = (start, end) => {
  const slots = [];
  let startTime = parse(start, "HH:mm", new Date());
  const endTime = parse(end, "HH:mm", new Date());

  while (startTime < endTime) {
    const nextTime = addHours(startTime, 1);
    slots.push(
      `${format(startTime, "h:mm a")} - ${format(nextTime, "h:mm a")}`
    );
    startTime = nextTime;
  }

  return slots;
};
