const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

console.log("For Loop");
for (let i = 0; i<studentReport.length; i++){
    if (studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }
}

console.log("While loop");
let count = 0;

while (count < studentReport[count]){
    if (studentReport[count] < LIMIT){
        console.log(studentReport[count]);
    }
    count++;
}

console.log("Foreach loop");
studentReport.forEach(grade => {
    if (grade < LIMIT){
        console.log(grade);
    }
})

console.log("For...in loop");
for (let i in studentReport){
    if (studentReport[i] < LIMIT){
        console.log(studentReport[i]);
    }
}

console.log(`Next ${DAYS} days of the week`);

const weekdaysTitle = document.querySelector("#weekdaysTitle");
const weekdaysList = document.querySelector("#weekdaysList");

weekdaysTitle.innerHTML = `Next ${DAYS} days of the week`;

function nextWeekDays(days){
    let currentDate = new Date();
    
    let dateString = new Intl.DateTimeFormat('en-US', {weekday:"long"}).format(currentDate);

    let string = `<li>${dateString}</li>`;

    for(let i=0; i<days; i++){
        const nextDay = new Date(0);

        nextDay.setDate(currentDate.getDate() + i);

        let nextDayString = Intl.DateTimeFormat("en-US", {weekday:"long"}).format(nextDay);

        string += `<li>${nextDayString}</li>`;
    }
    weekdaysList.innerHTML = string;
}

nextWeekDays(DAYS);
