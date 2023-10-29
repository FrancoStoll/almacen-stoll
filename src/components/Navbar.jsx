import { useEffect } from "react";

import { utcToZonedTime } from "date-fns-tz";

import imagenLogo from "../assets/imagen-log.jpeg";
import imagenHero from "../assets/imagen-google.jpg";
import { useIsOpen } from "../hooks/useIsOpen";
import { useState } from "react";

const Navbar = () => {
  const { open, isMorningOpen, isAfternoon } = useIsOpen();
  const [menu, setMenu] = useState(false);
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

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="menu-ham"
          onClick={() => setMenu(!menu)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>

        <div className={`anchor ${menu ? 'show' : ''}`}>
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
