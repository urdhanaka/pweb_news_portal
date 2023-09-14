// Get today date
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const dateObj = new Date();

const res = dayNames[dateObj.getDay()] + ", " + dateObj.getDay() + " " + monthNames[dateObj.getMonth()] + " " + dateObj.getFullYear()

document.getElementById("date").innerHTML = res