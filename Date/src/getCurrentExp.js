function calculateExperience(startDate) {
  // Get the current date
  const now = new Date();

  // Convert the startDate string to a Date object
  const start = new Date(startDate);

  // Calculate the difference in milliseconds
  const diff = now - start;

  // Calculate the total years
  const totalYears = now.getFullYear() - start.getFullYear();

  // Calculate the total months
  const totalMonths = now.getMonth() - start.getMonth();

  // Calculate the total days
  const totalDays = now.getDate() - start.getDate();

  // Adjust for negative months or days
  if (totalDays < 0) {
    totalMonths--;
    // Get the number of days in the previous month
    const daysInPrevMonth = new Date(
      now.getFullYear(),
      now.getMonth(),
      0
    ).getDate();
    totalDays += daysInPrevMonth;
  }

  if (totalMonths < 0) {
    totalYears--;
    totalMonths += 12;
  }

  return {
    years: totalYears,
    months: totalMonths,
    days: totalDays,
  };
}

// Example usage:
const employeeStartDate = "1998-02-13"; // Use YYYY-MM-DD format for consistency
const experience = calculateExperience(employeeStartDate);

console.log(
  `Total experience: ${experience.years} years, ${experience.months} months, and ${experience.days} days.`
);
