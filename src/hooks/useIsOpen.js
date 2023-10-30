import { getDate, getDay, getHours, getMinutes } from "date-fns";
import {useState } from "react";

export const useIsOpen = () => {
  const [open, setOpen] = useState(false);

// formato a pasar de fecha
// const now = new Date();
// const argentinaTimeZone = "America/Argentina/Buenos_Aires";
// const zonedNow = utcToZonedTime(now, argentinaTimeZone);


  const isMorningOpen = (date) => {
    const hours = getHours(date);
    const minutes = getMinutes(date);
    const dayOfTheMonth = getDate(date);
    const lastSaturdayOfTheMonth = getDay(date);

    if (!hours) return false;
    if (lastSaturdayOfTheMonth === 0 && dayOfTheMonth > 23) return false;
    if (hours >= 13) return false;

    return (hours >= 9 || (hours >= 8 && minutes >= 30))

  }

  const isAfternoon = (date) => {
    const hours = getHours(date);
    const minutes = getMinutes(date);
    const dayOfTheMonth = getDate(date);
    const lastSaturdayOfTheMonth = getDay(date);


    if (!hours) return false;
    if (dayOfTheMonth === 0 && dayOfTheMonth > 23) return false;
    if (lastSaturdayOfTheMonth === 0 && dayOfTheMonth > 23) return false;
    if (hours > 22) return false;

    return (hours >= 17 || (hours >= 16 && minutes >= 30)) 
  };

  return {
    isMorningOpen,
    isAfternoon,
  };
};
