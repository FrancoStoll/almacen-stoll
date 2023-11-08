import { useState } from "react";
import imagenLogo from "../assets/imagen-log.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  // const fecha = Date.now()

  // const fechanueva = addDays(fecha, 3)

  // console.log(fechanueva)

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

        <div className={`anchor ${menu ? "show" : ""}`}>
          <Link to="/">Inicio</Link>
          <Link to="horarios">Horarios</Link>
          <Link to="contacto">Conctacto</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
