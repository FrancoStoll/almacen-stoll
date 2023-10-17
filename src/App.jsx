import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <nav>
        <Navbar />
      </nav>
      <main className="welcome">
        <h1>Opening hours</h1>
        <div className="hours">
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Open</th>
              </tr>
            </thead>

            <tbody className="columns">
              <tr>
                <td>Monday - Saturday</td>
                <td>8:30am - 9:30pm </td>
              </tr>
              <tr>
                <td>Sunday</td>
                <td>9:00am - 1pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}

export default App;
