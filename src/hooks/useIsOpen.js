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

    console.log(hours);
    console.log(minutes);
    console.log(dayOfTheMonth);
    console.log(lastSaturdayOfTheMonth);
    if (!hours) return;
    if (dayOfTheMonth === 0 && dayOfTheMonth > 23) return;
    if (hours >= 13) return;

    if (hours >= 9 || (hours >= 8 && minutes >= 30)) {
      return setOpen(true);
    }
  };

  const isAfternoon = (date) => {
    const hours = getHours(date);
    const minutes = getMinutes(date);
    const dayOfTheMonth = getDate(date);
    const lastSaturdayOfTheMonth = getDay(date);
    console.log(hours);
    console.log(minutes);
    console.log(dayOfTheMonth);
    console.log(lastSaturdayOfTheMonth);

    if (!hours) return;
    if (dayOfTheMonth === 0 && dayOfTheMonth > 23) return;
    if (dayOfTheMonth === 0 && dayOfTheMonth > 23) return;
    if (hours > 13) return;

    if (hours >= 17 || (hours >= 0 && minutes >= 30)) {
      return setOpen(true);
    }
  };

  return {
    open,
    isMorningOpen,
    isAfternoon,
  };
};
