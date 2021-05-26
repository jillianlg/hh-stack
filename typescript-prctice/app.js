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
// Generic Function - Non Generic Type Variables
function displayType(id, name) {
    console.log(typeof id + ', ' + typeof name);
}
displayType(2, 'Malik'); // number, string
// Generic Constraints
var Customer = /** @class */ (function () {
    function Customer(fname, lname) {
        this.firstName = fname;
        this.lastName = lname;
    }
    return Customer;
}());
// <T extends Customer> 
// adds the constraint to limit the customerLogger to taking in only the Customer Type
function customerLogger(customer) {
    console.log(customer.firstName + " " + customer.lastName);
}
var customer = new Customer('Jane', 'Doe');
customerLogger(customer);
var p = { first: '10k', second: 1000 };
console.log(p);
var person = { first: 'Natasha', second: 'Lutzski' };
console.log(person);
