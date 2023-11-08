import React from "react";

const Horarios = () => {
  return (
    <>
      <h1>Horarios</h1>
      <div className="hours">
        <table>
          <thead>
            <tr>
              <th>Dia</th>
              <th>Abierto</th>
            </tr>
          </thead>

          <tbody className="columns">
            <tr>
              <td>Lunes a Sabado</td>
              <td>8:30am - 13pm y 16: 30pm a 9:30pm </td>
            </tr>
            <tr>
              <td>Domingo</td>
              <td>9:00am - 1pm</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Horarios;
