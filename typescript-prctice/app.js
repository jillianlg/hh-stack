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
var newObj = {
    id: Math.random().toString(36),
    run: function () {
        return 3;
    }
};
console.log(newObj.id);
console.log(newObj.run());
function checkElementAt(items, toBeChecked, atIndex) {
    return items[atIndex] === toBeChecked;
}
var checker = checkElementAt;
var items = [1, 3, 5, 7];
var b = checker(items, 5, 1); // false
console.log(b);
var b2 = checker(items, 5, 2); // true
console.log(b2);
var s = { enabled: true, maximized: false };
console.log(s);
console.log(s['maximized']);
// Creating a Generic Class
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};
var List = /** @class */ (function () {
    function List() {
        this.data = [];
    }
    List.prototype.add = function (t) {
        this.data.push(t);
    };
    List.prototype.remove = function (t) {
        var index = this.data.indexOf(t);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    };
    List.prototype.asArray = function () {
        return this.data;
    };
    return List;
}());
var numbers = new List();
numbers.add(11);
numbers.add(12);
numbers.add(13);
numbers.remove(12);
var numArray = numbers.asArray();
console.log(numArray);
