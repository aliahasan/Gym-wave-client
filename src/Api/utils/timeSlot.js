import { format, addHours, parse } from "date-fns";

export const generateTimeSlots = (start, end) => {
  try {
    const slots = [];
    let startTime = parse(start, "HH:mm", new Date());
    const endTime = parse(end, "HH:mm", new Date());

    if (isNaN(startTime) || isNaN(endTime)) {
      throw new Error("Invalid time format");
    }

    for (let currentTime = startTime; currentTime < endTime; ) {
      const nextTime = addHours(currentTime, 1);
      slots.push(
        `${format(currentTime, "h:mm a")} - ${format(nextTime, "h:mm a")}`
      );
      currentTime = nextTime;
    }

    return slots;
  } catch (error) {
    console.error("Error generating time slots:", error.message);
    return [];
  }
};
