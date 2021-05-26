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