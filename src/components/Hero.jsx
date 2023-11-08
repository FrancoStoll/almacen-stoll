import { useEffect } from "react";

import { utcToZonedTime } from "date-fns-tz";

import imagenLogo from "../assets/imagen-log.jpeg";
import imagenHero from "../assets/imagen-google.jpg";
import { useIsOpen } from "../hooks/useIsOpen";
import { useState } from "react";
import { addDays } from "date-fns";

const Hero = () => {
  const { isMorningOpen, isAfternoon } = useIsOpen();
  const [isOpen, setIsOpen] = useState(false);

  const [menu, setMenu] = useState(false);

  // const fecha = Date.now()

  // const fechanueva = addDays(fecha, 3)

  // console.log(fechanueva)

  useEffect(() => {
    const now = new Date();
    const argentinaTimeZone = "America/Argentina/Buenos_Aires";
    const zonedNow = utcToZonedTime(now, argentinaTimeZone);

    const open1 = isMorningOpen(zonedNow);

    const open2 = isAfternoon(zonedNow);

    if (open1 || open2) {
      return setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, []);

  return (
    <div className="navbar">
      <div className="content">
        <div className="offer">Federal</div>
        <img src={imagenHero} alt="imagen logo" />
        {isOpen ? <h2>Open</h2> : <h2>Closed</h2>}
      </div>
    </div>
  );
};

export default Hero;
