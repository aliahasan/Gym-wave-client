import { format, addHours, parse } from "date-fns";

export const generateTimeSlots = (start, end) => {
  const slots = [];
  let startTime = parse(start, "HH:mm", new Date());
  const endTime = parse(end, "HH:mm", new Date());

  for (let currentTime = startTime; currentTime < endTime; ) {
    const nextTime = addHours(currentTime, 1);
    slots.push(
      `${format(currentTime, "h:mm a")} - ${format(nextTime, "h:mm a")}`
    );
    currentTime = nextTime;
  }

  return slots;
};
