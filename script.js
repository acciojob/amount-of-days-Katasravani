function daysOfAYear() {
    // Function to check if a year is a leap year
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

    // Get the year from user input
    const year = parseInt(prompt("Enter a year:"));

    // Validate if the input is a valid year
    if (isNaN(year) || year < 1 || year > 9999) {
        alert("Please enter a valid year.");
        return;
    }

    // Number of days in a non-leap year
    const daysInNonLeapYear = 365;

    // Number of days in a leap year
    const daysInLeapYear = 366;

    // Determine the number of days based on whether it's a leap year
    const result = isLeapYear(year) ? daysInLeapYear : daysInNonLeapYear;

    // Display the result
    alert(`The number of days in ${year} is: ${result}`);
}

// Call the function to get user input and display the result
daysOfAYear();
