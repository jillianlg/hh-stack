// Generic Function - T Array Type
function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(['Hello', 'World']);
var myBooArr = getArray([true, false]);
console.log(myNumArr);
console.log(myStrArr);
console.log(myBooArr);
// Generic Function - Multiple Type Variables
function getInfo(id, name) {
    console.log((typeof id + ', ' + typeof name));
}
getInfo(1, 'Jane'); // number, string
