function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(['Hello', 'World']);
var myBooArr = getArray([true, false]);
console.log(myNumArr);
console.log(myStrArr);
console.log(myBooArr);
