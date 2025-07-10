// Create a function, which creates a register for heroes, with their names, level, and items (if they have such). 
// The input comes as an array of strings. Each element holds data for a hero, in the following format:
// "{heroName} / {heroLevel} / {item1}, {item2}, {item3}..." 
// You must store the data about every hero. The name is a string, a level is a number and the items are all strings.
// The output is all of the data for all the heroes you’ve stored sorted ascending by level. The data must be in the following format for each hero:
// Hero: {heroName}
// level => {heroLevel}
// Items => {item1}, {item2}, {item3}
// Note: If there are two heroes with the same name, they should be treated as different individuals and the name should be printed twice.



function manageHeroes(arr) {
    let heroes = [];

    for (const str of arr) {
        let [heroName, heroLevel, heroItems] = str.split(' / ');
        heroLevel = Number(heroLevel);

        let heroObj = {
            hero: heroName,
            level: heroLevel,
            items: heroItems
        }

        heroes.push(heroObj);
    }

    heroes.sort((a, b) => a.level - b.level);
    for (const heroObj of heroes) {
        console.log(`Hero: ${heroObj.hero}`);
        console.log(`level => ${heroObj.level}`);
        console.log(`items => ${heroObj.items}`)
    }
}

manageHeroes([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]
);