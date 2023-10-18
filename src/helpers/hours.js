import { getHours, getMinutes } from "date-fns";

const isMorningOpen = (date) => {
  const hours = getHours(date);

  return hours >= 9 && hours <= 13;
};

const isAfternoon = (date) => {
  const hours = getHours(date);

  return hours >= 16 && hours <= 21;
};

export { isAfternoon, isMorningOpen };

// Abierto de 8:30
// Cierra 13

//Abre nuevamente 16:30
// Cierra nuevamente 9:30
