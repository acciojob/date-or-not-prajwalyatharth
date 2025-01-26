var isDate = function (input) {
  // Check if input is an instance of Date and is valid
	return !isNAN(Date.parse(input));
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
