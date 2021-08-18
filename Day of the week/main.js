let output = document.getElementById('output');
let numberDate = document.getElementById('date');

let week = new Date();
console.log(week);//console testing

let day = week.getDay();
console.log(day);

let ndate = week.toLocaleString();

switch(day)
{
case 0:
    day="Sunday";
    break;
case 1:
    day="Monday";
    break;
case 2:
    day="Tuesday";
    break;
case 3:
    day="Wednesday";
    break;
case 4:
    day="Thursday";
    break;
case 5:
    day="Friday";
    break;
case 6:
    day="Saturday";
    break;
}

output.innerHTML = day;
date.innerHTML = ndate;