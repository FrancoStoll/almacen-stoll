import { useEffect } from "react";

import { utcToZonedTime } from "date-fns-tz";


import imagenLogo from "../assets/imagen-log.jpeg";
import imagenHero from "../assets/imagen-google.jpg";
import { useIsOpen } from "../hooks/useIsOpen";

const Navbar = () => {
  const { open, isMorningOpen, isAfternoon } = useIsOpen();

  useEffect(() => {
    const now = new Date();
    const argentinaTimeZone = "America/Argentina/Buenos_Aires";
    const zonedNow = utcToZonedTime(now, argentinaTimeZone);

    isMorningOpen(zonedNow);
    isAfternoon(zonedNow);
  }, []);

  return (
    <>
      <div className="navegacion">
        <img src={imagenLogo} alt="hola" />

        <div className="anchor">
          <a href="#">About</a>
          <a href="#">Hours</a>
          <a href="#">Conctact</a>
        </div>
      </div>

      <div className="navbar">
        <div className="content">
          <div className="offer">Federal</div>
          <img src={imagenHero} alt="imagen logo" />
          {open ? <h2>Open</h2> : <h2>Closed</h2>}
        </div>
      </div>
    </>
  );
};

export default Navbar;
