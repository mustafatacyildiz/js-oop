console.log('» index.js is running');

/* const person = {
  firstName: 'Barry',
  lastName: 'Mitchell',
  birthYear: 1977,
  skills: ['JS', 'AWS', 'Docker', 'Python'],
  employed: true,
}; */

// console.log(person);
// console.log(person.firstName);
// console.log(person['birthYear']);

// console.log(person.midName);
// console.log(person['2022']);

// let year = 2022;
// console.log(person[year]);
// console.log(person.year);
/* 
let tag = 'Year';
console.log(person['birth' + tag]);

person.birthYear = 1979;

person.firstNmae = 'Adam';

console.log(person);

const comments = [
  {userName: 'Mark', comment: 'very good', likes: 99},
  {userName: 'John', comment: 'bla bla bla', likes: 2},
] */

/* for (const key of Object.keys(person)) {
  //Object.values()
  console.log(key);
}

for (const [key, value] of Object.entries(person)) {
  console.log(`${key} :->: ${value}`);
} */

// * Methods

// const person = {
//   firstName: 'Barry',
//   lastName: 'Mitchell',
//   birthYear: 1977,
//   skills: ['JS', 'AWS', 'Docker', 'Python'],
//   employed: true,
//   calcAgeBad: function (bYear) {
//     return 2022 - bYear;
//   },
//   calcAge() {
//     /* this.age = 2022 - this.birthYear;
//     return this.age; */
//     return 2022 - this.birthYear;
//   },
// };

// console.log(person.calcAge());
// // console.log(person.age);

// function f1() {
//   console.log(this);
// }

// f1();

// ! THIS examples
/* 
const calcAge = function (birthYear) {
  console.log('Regular Function in Global Scope');
  console.log(this);
  console.log(2022 - birthYear);
};

calcAge(1977);

const calcAgeArrow = (birthYear) => {
  console.log('Arrow Function in Global Scope');
  console.log(this);
  console.log(2022 - birthYear);
};

calcAgeArrow(1980); */
/* 
const teacher = {
  birthYear: 1985,
  calcAge() {
    console.log('Regular Function in Object');
    console.log(this);
    console.log(2022 - this.birthYear);
  },
  calcAgeArrow: () => {
    console.log('Arrow Function in Object');
    console.log(this);
    console.log(2022 - this.birthYear);
  },
  calcAgeDelayed() {
    setTimeout(function () {
      console.log('Regular Function in setTimeout');
      console.log(this);
      this.calcAge();
    }, 2000);
  },
  calcAgeDelayedArrow: function () {
    setTimeout(() => {
      console.log('Arrow Function in setTimeout');
      console.log(this);
      this.calcAge();
    }, 2000);
  },
};

const student = {
  birthYear: 1995,
};

student.calcAge = teacher.calcAge;

student.calcAge();

const myFunc = teacher.calcAge;

teacher.calcAge();
myFunc();

// teacher.calcAge();
// teacher.calcAgeArrow();
// teacher.calcAgeDelayed();
// teacher.calcAgeDelayedArrow();

let anObject = {
  firstName: 'John',
  age: 30,
  isMarried: false,
  introduce: () => {
    return `${this.firstName} is ${this.age} years old.`;
  },
  introduce2: function () {
    return `${this.firstName} is ${this.age} years old.`;
  },
};

console.log(anObject.introduce());
console.log(anObject.introduce2());
 */
// ! CLASS STRUCTURE

// class syntax
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  walk() {
    console.log('Im walking');
  }
  speak() {
    return 'I like humans';
  }
}

console.dir(Pet);
const myPet = new Pet('Ruby', 3); // instance
myPet.walk();
// console.log(myPet);

class Cat extends Pet {
  #weight = 5555;
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }

  speak() {
    let prevMsg = super.speak();
    prevMsg = ' and I like to meow';
    return this.#weight;
  }
}

const muezza = new Cat('Müezza', 2, 'grey');
muezza.#weight = 4;
muezza.name = 'Riza';
console.log(muezza);
console.log(muezza.speak());
muezza.walk();
console.log(muezza.weight);

// ! prototypes

function Pet2(name, age) {
  this.name = name;
  this.age = age;
}

Pet.prototype.walk = function () {
  console.log('Im walking');
};
Pet.prototype.speak = function () {
  return 'I like humans';
};

const myPet2 = new Pet('Karabas', 4);
console.log(myPet2);

function Cat2(name, age, color) {
  // constructor function
  this.name = name;
  this.age = age;
  this.color = color;
}

Cat2.prototype = Object.create(Pet2.prototype);

const pisi = new Cat2('Pisi', 1, 'yellow');
console.log(pisi);
pisi.walk();

// const arr = [1, 2, 3];
// console.log(arr.__proto__);
// console.dir(((x) => x + 2).__proto__);
