export const transformDate = (fecha) => {
  const newNumber = new Date(fecha);
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };

  return newNumber.toLocaleDateString("es-ES", options);
};
