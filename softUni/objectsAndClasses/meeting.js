// Write a function that manages meeting appointments. 
// The input comes as an array of strings. Each string contains a weekday and person’s name. 
// For each successful meeting, print a message. If you receive the same weekday twice, 
// the meeting cannot be scheduled so print a conflicting message. 
// In the end, print a list of all successful meetings. 


function meeting(data) {
    let scheduledDays = {};
    for (let str of data) {
        let [weekDay, name] = str.split(' ');
        if (weekDay in scheduledDays) {
            console.log(`Conflict on ${weekDay}!`);
        } else {
            scheduledDays[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`);
        }
    }

    for (let key of Object.keys(scheduledDays)) {
        console.log(`${key} -> ${scheduledDays[key]}`);
    }
}

meeting(['Monday Peter',
 'Wednesday Bill',
 'Monday Tim',
 'Friday Tim']
);