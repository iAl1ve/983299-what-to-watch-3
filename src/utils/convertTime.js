const timeConvert = (n) => {
  let hours = (n / 60);
  let rhours = Math.floor(hours);
  let minutes = (hours - rhours) * 60;
  let rminutes = Math.round(minutes);
  return `${rhours}h ${rminutes}mm`;
};

export default timeConvert;
