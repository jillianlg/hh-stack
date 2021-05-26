// Generic Function - T Array Type
function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(['Hello', 'World']);
let myBooArr = getArray([true, false]);

console.log(myNumArr);
console.log(myStrArr); 
console.log(myBooArr); 

// Generic Function - Multiple Type Variables
function getInfo<T, U>(id: T, name: U): void {
  console.log((typeof id + ', ' + typeof name));
}

getInfo<number, string>(1, 'Jane'); // number, string

// Generic Function - Non Generic Type Variables
function displayType<T>(id: T, name: string): void {
  console.log(typeof id + ', ' + typeof name);
}

displayType(2, 'Malik'); // number, string

// Generic Constraints
class Customer {
  firstName: string;
  lastName: string;

  constructor(fname: string, lname: string) {
    this.firstName = fname;
    this.lastName = lname;
  }
}
    // <T extends Customer> 
    // adds the constraint to limit the customerLogger to taking in only the Customer Type
function customerLogger<T extends Customer>(customer: T): void {
  console.log(`${customer.firstName} ${customer.lastName}`);
}

let customer = new Customer('Jane', 'Doe')
customerLogger(customer)
      // customerLogger('Jane Doe') results in an compiler error
      // customerLogger(1) results in an compiler error - type 1 is not an assignable parameter of Customer Type

// Generic Interfaces describing Obj Properties
  // An Interface is a group of related properties and methods that describe an object.
  // An Interface does not implement or initialize the object.
interface Pair<T, U> {
  first: T;
  second: U;
}

let p: Pair<string, number> = { first: '10k', second: 1000 };
console.log(p);

const person: Pair<string, string> = {first: 'Natasha', second: 'Lutzski'};
console.log(person);

// Interface Command
interface Command<T, R> {
  id: T;
  run(): R;
}

let newObj: Command<string, number> = {
  id: Math.random().toString(36), //create a random ID number
  run: function() {
    return 3;
  }
};

console.log(newObj.id);
console.log(newObj.run());

// Define the Function Type inside the Interface
interface ElementChecker {
  <T>(items: T[], toBeChecked: T, atIndex: number): boolean;
}

function checkElementAt<T>(
  items: T[],
  toBeChecked: T,
  atIndex: number
): boolean {
  return items[atIndex] === toBeChecked;
}

let checker: ElementChecker = checkElementAt;
let items = [1, 3, 5, 7];
let b: boolean = checker<number>(items, 5, 1); // false
console.log(b); 
let b2: boolean = checker<number>(items, 5, 2); // true
console.log(b2); 

// Interface describing indexable
interface States<R> {
  [states: string]: R;
}
let s: States<boolean> = { enabled: true, maximized: false };
console.log(s);
console.log(s['maximized']);

// Creating a Generic Class
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
};

// Creating a Generic Interface with a class
interface Collection<T> {
  add(t: T): void;
  remove(t: T): void;
  asArray(): T[];
}

class List<T> implements Collection<T> {
  private data: T[] = [];

  add(t: T): void {
    this.data.push(t);
  }

  remove(t: T): void {
    let index = this.data.indexOf(t);
    if (index > -1) {
      this.data.splice(index, 1);
    }
  }

  asArray(): T[] {
    return this.data;
  }
}

let numbers: Collection<number> = new List();
numbers.add(11);
numbers.add(12);
numbers.add(13);
numbers.remove(12);
let numArray = numbers.asArray();
console.log(numArray);

// Using Decorators
// A Decorator is a special kind of deceleration that can be attached to a
//    class declaration, method, accessor, property, or parameter.
// Decorators use the form @expression, where expression must evaluate to a function
//    that will be called at runtime with information about the decorated declaration.

function log(target, key, descriptor) {
  console.log(`${key} was called`);
}

class Calculator {
  // using the decorator @log
  @log
  square(n: number) {
    return n * n;
  }
}