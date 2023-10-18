import { useState, useEffect } from "react";
import { addHours, isSunday } from "date-fns";
import { utcToZonedTime, format } from "date-fns-tz";
import { resetDate } from "../helpers/resetDate";
import { isMorningOpen, isAfternoon } from "../helpers/hours";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const now = new Date();
    const argentinaTimeZone = "America/Argentina/Buenos_Aires";
    const zonedNow = utcToZonedTime(now, argentinaTimeZone);

    // const prueba = Date.now();
    // const cerrado = addHours(prueba, 4);

    const morning = isMorningOpen(zonedNow);
    const afternoon = isAfternoon(zonedNow);
    if (morning) {
      setIsOpen(true);
    }

    if (afternoon) {
      setIsOpen(true);
    }
  }, []);

  

  return (
    <>
      <div className="navegacion">
        <img src="../assets/imagen-log.jpeg" alt="hola" />

        <div className="anchor">
          <a href="#">About</a>
          <a href="#">Hours</a>
          <a href="#">Conctact</a>
        </div>
      </div>

      <div className="navbar">
        <div className="content">
          <div className="offer">Federal</div>
          <img src="../assets/imagen-google.PNG" alt="imagen logo" />
          {isOpen ? <h2>Open</h2> : <h2>Closed</h2>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
