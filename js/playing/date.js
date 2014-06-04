// Seconds and minutes: 0 to 59
// Hours: 0 to 23
// Day: 0 (Sunday) to 6 (Saturday)
// Date: 1 to 31 (day of the month)
// Months: 0 (January) to 11 (December)
// Year: years since 1900

var data = new Date(); //Tue Jun 03 2014 21:49:23 GMT-0300 (BRT)
var date = new Date(2010, 11, 31)

var data = new Date();
console.log(data.getFullYear()); //2014
console.log(data.getDay()); //2
console.log(data.getMonth()); //5 (0..11)
console.log(data.getTime());
console.log(data.getHours());
console.log(data.getMinutes());
console.log(data.getSeconds());