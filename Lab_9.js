
const characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna'];
for (let character of characters) {
    console.log(character);
}


const firstName = 'Harry';
const house = 'Gryffindor';
console.log(`Welcome, ${firstName} of ${house}!`);


let characterName = 'Hermione';
console.log(characterName.toLowerCase());
console.log(characterName.toUpperCase());


let spell = ' Expelliarmus ';
console.log(spell.trim());


const quote = 'I solemnly swear that I am up to no good';
console.log(quote.slice(10, 15));


const lastName = 'Weasley';
console.log(firstName.concat(' ', lastName));


let sentence = 'Draco is a good wizard';
console.log(sentence.replace('good', 'bad'));


const houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw'];
houses.push('Slytherin');
houses.pop();
console.log(houses);


const spells = ['Alohomora', 'Lumos', 'Nox'];
spells.unshift('Accio');
spells.shift();
console.log(spells);


const professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid'];
const selectedProfessors = professors.slice(1, 3);
console.log(selectedProfessors);


const students = ['Neville', 'Seamus', 'Dean', 'Parvati'];
students.splice(1, 2);
console.log(students);


let phrase = ' Mischief Managed ';
console.log(phrase.trim().toLowerCase().concat(' - Harry'));


const wizards = ['Harry', 'Hermione', 'Ron'];
wizards.push('Luna', 'Draco');
console.log(wizards);


let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry';
let hogwartsSubstring = message.slice(11, 19);
console.log(hogwartsSubstring.concat(' Castle'));
