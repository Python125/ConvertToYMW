function daysToWMY(days) {
  const numOfDays = days;
  const year = Math.round(numOfDays / 365);
  const month = Math.round(numOfDays / 30.417);
  const week = Math.round(numOfDays / 7);
  const day = Math.round(numOfDays % 365 % 12);
  
  
  return year + ' years: ' + month + ' months: ' + week + ' weeks ' + day + ' days';
}

daysToWMY(375);
