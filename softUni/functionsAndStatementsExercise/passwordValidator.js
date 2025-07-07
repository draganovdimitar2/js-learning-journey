


function passwordValidator(password) {
    let isValid = true;

    // Rule 1: Length
    if (password.length < 6 || password.length > 10) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    // Rule 2: Only letters and digits
    if (!/^[A-Za-z0-9]+$/.test(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    // Rule 3: At least 2 digits
    let digitCount = 0;
    for (let char of password) {
        if (!isNaN(char)) {
            digitCount++;
        }
    }
    if (digitCount < 2) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    // Final result
    if (isValid) {
        console.log("Password is valid");
    }
}


passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');