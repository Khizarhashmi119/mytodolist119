module.exports = () => {
  let date = new Date();
  let options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  };
  date = date.toLocaleDateString("en-US", options);
  return date;
};
