console.log('-_____[[Prototype]]');
const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish',
};

const child = Object.create(parent);
child.name = 'Jason';
child.age = 27;

console.log(child.hasOwnProperty('age')); // повертає `true`
console.log(child.hasOwnProperty('name')); // повертає `true`
console.log(parent.hasOwnProperty('surname')); // повертає `true`
console.log(child.hasOwnProperty('heritage')); // повертає `false`
console.log(parent.hasOwnProperty('heritage')); // повертає `true`
console.log(child.hasOwnProperty('surname')); // повертає `false`
console.log(parent.isPrototypeOf(child)); // повертає `true`
console.log(child.surname); // повертає `"Moore"`
console.log(child.heritage); // повертає `"Irish"`
console.log(child.name); // повертає `"Jason"`
console.log(child.age); // повертає `27`
/* Зміни код, побудувавши ланцюжок прототипів 
    - об'єкт ancestor був прототипом для parent, 
а той, своєю чергою, був прототипом для child. */
const ancestor = {
  name: 'Paul',
  age: 83,
  surname: 'Dawson',
  heritage: 'Irish',
};

const parent2 = Object.create(ancestor);
parent2.name = 'Stacey';
parent2.surname = 'Moore';
parent2.age = 54;

const child2 = Object.create(parent2);
child2.name = 'Jason';
child2.age = 27;

console.log(ancestor.isPrototypeOf('parent')); //повертає false
console.log(parent.isPrototypeOf('child')); //повертає false
console.log(ancestor.hasOwnProperty('surname')); //повертає true
console.log(parent.hasOwnProperty('surname')); //повертає true
console.log(child.hasOwnProperty('surname')); //повертає false
console.log(ancestor.hasOwnProperty('heritage')); //повертає true
console.log(parent.hasOwnProperty('heritage')); //повертає false
console.log(child.hasOwnProperty('heritage')); //повертає false
console.log(ancestor.surname); //повертає "Dawson"
console.log(parent.surname); //повертає "Moore"
console.log(child.surname); //повертає "Moore"
console.log(ancestor.heritage); //повертає "Irish"
console.log(parent.heritage); //повертає "Irish"
console.log(child.heritage); //повертає "Irish"
