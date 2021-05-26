function getArray<T>(items: T[]): T[] {
  return new Array<T>().concat(items);
}

let myNumArr = getArray([100, 200, 300]);
let myStrArr = getArray(['Hello World']);
let myBooArr = getArray([true, false]);

console.log(myNumArr);
console.log(myStrArr); 
console.log(myBooArr); 


