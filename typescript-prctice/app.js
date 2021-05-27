var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Generic Function - T Array Type
function getArray(items) {
    return new Array().concat(items);
}
var myNumArr = getArray([100, 200, 300]);
var myStrArr = getArray(['Hello', 'World']);
var myBooArr = getArray([true, false]);
// console.log(myNumArr);
// console.log(myStrArr); 
// console.log(myBooArr); 
// Generic Function - Multiple Type Variables
function getInfo(id, name) {
    // console.log((typeof id + ', ' + typeof name));
}
getInfo(1, 'Jane'); // number, string
// Generic Function - Non Generic Type Variables
function displayType(id, name) {
    // console.log(typeof id + ', ' + typeof name);
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
    // console.log(`${customer.firstName} ${customer.lastName}`);
}
var customer = new Customer('Jane', 'Doe');
customerLogger(customer);
var p = { first: '10k', second: 1000 };
// console.log(p);
var person = { first: 'Natasha', second: 'Lutzski' };
var newObj = {
    id: Math.random().toString(36),
    run: function () {
        return 3;
    }
};
function checkElementAt(items, toBeChecked, atIndex) {
    return items[atIndex] === toBeChecked;
}
var checker = checkElementAt;
var items = [1, 3, 5, 7];
var b = checker(items, 5, 1); // false
// console.log(b); 
var b2 = checker(items, 5, 2); // true
var s = { enabled: true, maximized: false };
// console.log(s);
// console.log(s['maximized']);
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
// console.log(numArray);
// Using Decorators
// A Decorator is a special kind of deceleration that can be attached to a
//    class declaration, method, accessor, property, or parameter.
// Decorators use the form @expression, where expression must evaluate to a function
//    that will be called at runtime with information about the decorated declaration.
// function log(target, key, descriptor) {
//   console.log(`${key} was called`);
// }
// class Calculator {
//   // using the decorator @log
//   @log
//   square(n: number) {
//     return n * n;
//   }
// }
// Using Arguments in Method Decorator
// function log(target, key, descriptor) {
//   // console.log(target);
//   const original = descriptor.value;
//   descriptor.value = function(...args: any[]) {
//     // call original method
//     const result = original.apply(this, args);
//     // Log the call and the result
//     console.log(`${key} with args ${JSON.stringify(args)} returned ${JSON.stringify(result)}`);
//     // return the result
//     return result;
//   };
//   return descriptor;
// }
// class Calculator {
//   // using the decorator @log
//   @log
//   square(n: number) {
//     return n * n;
//   }
// }
// const calculator = new Calculator();
//   //  square with args [2] returned 4
// calculator.square(2);
//   //  square with args [3] returned 9
// calculator.square(3);
// Configuring Decorators using Decorator Factory
function log(title) {
    return function (target, key, descriptor) {
        // console.log(target);
        var original = descriptor.value;
        descriptor.value = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            // call original method
            var result = original.apply(this, args);
            // Log the call and the result
            console.log("title: " + title + " " + key + " with args " + JSON.stringify(args) + " returned " + JSON.stringify(result));
            // return the result
            return result;
        };
        return descriptor;
    };
}
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // using the decorator Factory Function
    Calculator.prototype.square = function (n) {
        return n * n;
    };
    __decorate([
        log('Calculator')
    ], Calculator.prototype, "square", null);
    return Calculator;
}());
var calculator = new Calculator();
//  square with args [2] returned 4
calculator.square(2);
//  square with args [3] returned 9
calculator.square(3);
