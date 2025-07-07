// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...). 
// Your task is to create a function that visualizes a loading bar depending on the number you have received in the input.


function loadingBar(n) {
    if (n == 100) {
        console.log("100% Complete!\n[%%%%%%%%%%]");
    } else {
        console.log(`${n}% [${'%'.repeat(n/10) + '.'.repeat(10 - (n/10))}]\nStill loading...`);
    }
}

loadingBar(100);
loadingBar(50);
loadingBar(30);