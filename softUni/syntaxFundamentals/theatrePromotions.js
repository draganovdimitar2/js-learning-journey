function solve(dayParam, ageParam) {
    if (ageParam < 0 || ageParam > 122) {
        console.log('Error!');
    } else if (dayParam == 'Weekday') {
        if (ageParam <= 18) {
            console.log('12$');
        } else if (ageParam <= 64) {
            console.log('18$');
        } else {
            console.log('12$');
        }
    } else if (dayParam == 'Weekend') {
        if (ageParam <= 18) {
            console.log('15$');
        } else if (ageParam <= 64) {
            console.log('20$');
        } else {
            console.log('15$');
        }
    } else if (dayParam == 'Holiday') {
        if (ageParam <= 18) {
            console.log('5$');
        } else if (ageParam <= 64) {
            console.log('12$');
        } else {
            console.log('10$');
        }
    }
}

solve('Weekday', 42);