export const formatDate = (date: Date) => {
  const nuevaFecha = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  return nuevaFecha.toLocaleDateString("es-ES", options);
};
