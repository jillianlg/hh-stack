function LoggerAndReturn(thing) {
    return thing;
}
var message = LoggerAndReturn('Hello World');
var message2 = LoggerAndReturn(2);
var message3 = LoggerAndReturn(true);
console.log(message);
console.log(message2);
console.log(message3);
