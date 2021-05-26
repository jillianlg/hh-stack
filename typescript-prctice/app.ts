function LoggerAndReturn<T>(thing: T) : T {
  return thing;
}

const message: string = LoggerAndReturn('Hello World');
const message2: number = LoggerAndReturn(2);
const message3: boolean = LoggerAndReturn(true);
console.log(message);
console.log(message2);
console.log(message3);

