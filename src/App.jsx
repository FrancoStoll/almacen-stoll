import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="welcome">
        <h1>Horarios de atencion</h1>
        <div className="hours">
          <table>
            <thead>
              <tr>
                <th>Día</th>
                <th>Horario</th>
              </tr>
            </thead>

            <tbody className="columns">
              <tr>
                <td>Lunes a Sabado</td>
                <td>8:30am a 9:30pm </td>
              </tr>
              <tr>
                <td>Domingo</td>
                <td>9:00am a 1pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default App;
