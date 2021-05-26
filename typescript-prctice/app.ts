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