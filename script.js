function daysToWMY(days) {
  const numOfDays = days;
  const year = Math.round(numOfDays / 365);
  const month = Math.round(numOfDays / 30.417) % 12;
  const week = Math.round(numOfDays / 7) % 52;
  
  
  return year + ' years: ' + month + ' months: ' + week + ' weeks';
}

console.log(daysToWMY(365));
