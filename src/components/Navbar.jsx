const Navbar = () => {
  return (
    <>
      <div className="navegacion">
        <img src="../../public/images/imagen-log.jpeg" alt="hola" />

        <div className="anchor">
          <a href="#">About</a>
          <a href="#">Hours</a>
          <a href="#">Conctact</a>
        </div>
      </div>

      <div className="navbar">
        <div className="content">
          <div className="offer">Federal</div>
          <img src="../../public/images/imagen-google.PNG" alt="imagen logo" />
          {/* <h2>Open</h2> */}
          <h2>Closed</h2>
        </div>
      </div>
    </>
  );
};

export default Navbar;
