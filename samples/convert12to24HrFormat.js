const convert = (time12) => {
  const [time, modifier] = time12.split(" ");
  let [hours, minutes] = time.split(":");

  if (time === "12") hours = "00";

  if (modifier === "PM") hours = parseInt(hours) + 12;

  return `${hours}:${minutes}`;
};

console.log(convert("01:02 PM"));
