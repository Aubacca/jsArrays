const people = require("./data/people.json");
const points = [40, 100, 1, 5, 25, 10, 12, 12, 14, 35, 23];
let foundPeople = [];
let foundPoints = [];

console.log(`Number of people in list: ${people.length}`);

//  {}

//
// list all person.
people.forEach(function (person, index, people) {
    console.log(`${index + 1} of ${people.length} Person: ${person.firstName} ${person.lastName}, age of ${person.age} from ${person.country}`);
})

people.forEach(person => {
    console.log(`Person: ${person.firstName} ${person.lastName}, age of ${person.age} from ${person.country}`);
})

points.forEach(point => console.log(`Print: ${point}`));

console.log("*****************************************************************");
//
// Filter json lists.
foundPeople = people.filter(person => person.age >= 65);
console.log('* isRetired:');
console.log(foundPeople);

foundPeople = people
                .filter(person => person.sex === 'f')
                .filter(person => person.age >= 8 && person.age < 12);
console.log('* primarySchool:');
console.log(foundPeople);

foundPoints = points.filter(point => point > 35);
console.log('* Points bigger than 35:');
console.log(foundPoints);

foundPoints = points.filter(point => point <= 35);
console.log('* Points smaller or equal to 35:');
console.log(foundPoints);



console.log("*****************************************************************");
//
// map json lists.
foundPeople = people.map(person => 'Hello ' + person.firstName + ', you are from ' + person.country);
console.log('* person welcome text:');
console.log(foundPeople);

foundPoints = points.map(point => point / 10);
console.log('* Points divided by 10:');
console.log(foundPoints);

foundPoints = points.map(point => point * 3.1415);
console.log('* Points multiplied by 3.1415:');
console.log(foundPoints);


console.log("*****************************************************************");
//
// sort json lists.
foundPeople = people.sort((a, b) => (a.country > b.country? 1: -1));
console.log('* person sorted by country ascending:');
console.log(foundPeople[0]);
console.log(foundPeople[people.length - 1]);

foundPeople = people.sort((a, b) => b.age - a.age);
console.log('* person sorted by age descending:');
console.log(foundPeople[0]);
console.log(foundPeople[people.length - 1]);

foundPoints = points.sort((a, b) => a - b);
console.log('* Points sorted ascending:');
console.log(foundPoints);

foundPoints = points.sort((a, b) => b - a);
console.log('* Points sorted descending:');
console.log(foundPoints);


console.log("*****************************************************************");
//
// reduce json lists.
let demoSum = 0;

demoSum = points.reduce(((currentSumm, point) => currentSumm + point), 0);
console.log('* Summe of all points:');
console.log(demoSum);

demoSum = points.reduce((currentSum, point) => currentSum + point, -1000);
console.log('* Summe of all points minus 1000:');
console.log(demoSum);

demoSum = people.reduce((currentAgeSum, person) => currentAgeSum + person.age, 0);
console.log('* Age of all people:');
console.log(demoSum);


console.log("*****************************************************************");

demoSum = people
  .filter(person => person.sex === 'f')
  .reduce((currentAgeSum, person) => currentAgeSum + person.age, 0);
console.log('* Age of females:');
console.log(demoSum);

demoSum = people
  .filter(person => person.sex === 'm')
  .reduce((currentAgeSum, person) => currentAgeSum + person.age, 0);
console.log('* Age of males:');
console.log(demoSum);

demoSum = people
  .filter(person => person.sex === 'm' && person.age < 20)
  .reduce((currentAgeSum, person) => currentAgeSum + person.age, 0);
console.log('* Age of males under 20 years:');
console.log(demoSum);

