const Navbar = () => {
  return (
    <>
      <div className="navegacion">
        <img src="../../public/images/OIG.jpeg" alt="" />

        <div className="anchor">
          <a href="#">Sobre Nosotros</a>
          <a href="#">Horarios</a>
          <a href="#">Conctacto</a>
        </div>
      </div>

      <div className="navbar">
        <img src="../../public/images/imagen-google.PNG" alt="imagen logo" />
        {/* <h2>Abierto</h2> */}
        <h2>Cerrado</h2>
      </div>
    </>
  );
};

export default Navbar;
