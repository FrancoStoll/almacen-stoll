export function resetDate(fecha) {
  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  };

  const fechaFormateada = fecha.toLocaleString("es-AR", options);
  return fechaFormateada.replace(/ /, " ");
}


