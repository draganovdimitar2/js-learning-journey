// On the first line of the standard input, you will receive an integer n – the number of characters that you can choose for your posse. On the next n lines, these rough-and-tumble characters themselves will follow with their health points (HP) and the number of bullets they carry, separated by a single space in the following format:
// "{hero name} {HP} {bullets}"
// -	HP stands for hit points 
// -	a character can have a maximum of 100 HP 
// -	The number of bullets signifies how many shots they can fire before needing to reload.
// After you have successfully assembled your posse, the real adventure begins. You will be navigating through a series of commands, each on a new line, separated by " - ", until the "Ride Off Into Sunset" command is given.
// There are several actions that your characters can undertake:
// "FireShot - {character name} - {target}"
// •	If the character has bullets, they fire a shot, reducing their bullet count by one. Print this message:
// "{character name} has successfully hit {target} and now has {number of bullets left} bullets!"
// •	If the character does not have bullets to shoot, print:
// o	"{character name} doesn't have enough bullets to shoot at {target}!"
// "TakeHit - {character name} - {damage} - {attacker}"
// •	Reduce the character's HP by the given damage amount. If the character is still standing (their HP is greater than 0), print:
// "{character name} took a hit for {damage} HP from {attacker} and now has {current HP} HP!"
// •	If the character has been gunned down, remove them from your posse and print:
// "{character name} was gunned down by {attacker}!"
// "Reload - {character name}"
// •	If they have less than the maximum capacity of bullets (6), the character loads their gun. In this case, print the following on the console:
// "{character name} reloaded {number of bullets reloaded} bullets!"
// •	If the gun is already fully loaded, print:
// " {character name}'s pistol is fully loaded!"

// "PatchUp – {character name} – {amount}"
// •	The character patches up, recovering HP. If this action would bring their HP above the maximum value (100), HP is increased to 100. Print: 
// " {character name} patched up and recovered {amount recovered} HP!"

// o	If the character is already at full health, print:
// " {character name} is in full health!"

// Input
// •	On the first line of the standard input, you will receive an integer n.
// •	On the following n lines, the characters themselves will follow with their hit points and bullets separated by a space in the following format.
// •	You will be receiving different commands, each on a new line, separated by " – ", until the " Ride Off Into Sunset" command is given.
// Output
// •	Print all members of your party who are still alive, in the following format:
// "{Character name}
//   HP: {current HP}
//   Bullets: {current bullets}"
// Constraints
// •	The starting HP/bullets of the characters will be valid, 32-bit integers will never be negative or exceed the respective limits.
// •	The HP/bullets amounts in the commands will never be negative.
// •	The hero names in the commands will always be valid members of your posse. No need to check that explicitly.


function solve(arr) {
    const charsCount = Number(arr[0]);
    const charsArr = arr.slice(1, charsCount + 1);
    const characterObject = {};
    charsArr.forEach(charObj => {
        const [name, hp, bullets] = charObj.split(' ');
        characterObject[name] = [Number(hp), Number(bullets)];
        
    });
    const commands = arr.slice(charsCount + 1);

    for (let i = 0; i < commands.length; i++) {
        if (commands[i] == 'Ride Off Into Sunset') {
            break;
        };

        const commandsArr = commands[i].split(' - ');
        const currCommand = commandsArr[0];
        
        if (currCommand == 'FireShot') {
            const name = commandsArr[1];
            const target = commandsArr[2];

            if (characterObject[name][1] > 0) {
                characterObject[name][1]--;
                console.log(`${name} has successfully hit ${target} and now has ${characterObject[name][1]} bullets!`);
            } else {
                console.log(`${name} doesn't have enough bullets to shoot at ${target}!`);
            };
        } else if (currCommand == 'TakeHit') {
            const name = commandsArr[1];
            const damage = Number(commandsArr[2]);
            const attacker = commandsArr[3];
            characterObject[name][0] -= damage;

            if (characterObject[name][0] > 0) {
                console.log(`${name} took a hit for ${damage} HP from ${attacker} and now has ${characterObject[name][0]} HP!`);
            } else {
                delete characterObject[name];
                console.log(`${name} was gunned down by ${attacker}!`);
            };
        } else if (currCommand == 'Reload') {
            const name = commandsArr[1];
            if (characterObject[name][1] < 6) {
                const bulletsToReload = 6 - characterObject[name][1];
                characterObject[name][1] += bulletsToReload;
                console.log(`${name} reloaded ${bulletsToReload} bullets!`);
            } else if (characterObject[name][1] == 6) {
                console.log(`${name}'s pistol is fully loaded!`);
            };
        } else if (currCommand == 'PatchUp') {
            const name = commandsArr[1];
            const amount = Number(commandsArr[2]);
            if (characterObject[name][0] == 100) {
                console.log(`${name} is in full health!`);
            } else if (characterObject[name][0] < 100) {
                const newHp = Math.min(100, characterObject[name][0] + amount);
                const recoveredHp = newHp - characterObject[name][0];
                characterObject[name][0] = newHp;
                console.log(`${name} patched up and recovered ${recoveredHp} HP!`);
            };
        };
    };

    const charObjEntities = Object.entries(characterObject);
    charObjEntities.forEach(obj => {
        console.log(`${obj[0]}\n HP: ${obj[1][0]}\n Bullets: ${obj[1][1]}`);
    });
};

solve(["2",
   "Gus 100 4",
   "Walt 100 5",
   "FireShot - Gus - Bandit",
   "TakeHit - Walt - 100 - Bandit",
   "Reload - Gus",
   "Ride Off Into Sunset"])
