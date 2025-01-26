var isDate = function (input) {
  // Check if input is an instance of Date and is valid
  if (input instanceof Date && !isNaN(input)) {
    return true;
  }
  // Check if input is a string or a number that can be parsed into a valid date
  if (typeof input === "string" || typeof input === "number") {
    const parsedDate = new Date(input);
    return !isNaN(parsedDate);
  }
  // If none of the above, return false
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
