function daysToWMY(days) {
  const numOfDays = days;
  const year = Math.round(numOfDays / 365);
  const month = Math.round(numOfDays % 365 / 30);
  const week = Math.round(numOfDays % 365 % 30);
  
  
  return year + ' years: ' + month + ' months: ' + week + ' weeks';
}

console.log(daysToWMY());
