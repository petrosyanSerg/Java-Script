console.log(variableVar); // Outputs: undefined
var variableVar = 'I am a var variable';


// let and var are hoisted but not initialized
// const is hoisted but not initialized and must be assigned a value at the time of declaration
// Accessing them before declaration will throw a ReferenceError
// Temporal Dead Zone (TDZ) and Hoisting in JavaScript

let variableLet = 'I am a let variable';
console.log(variableLet); // Outputs: I am a let variable

// console.log(variableConst); // ReferenceError: Cannot access 'variableConst' before initialization same for let variable
const variableConst = 'I am a const variable';


// ------------------------|Function declarations are hoisted |------------------------
hoistedFunction(); // Outputs: I am a hoisted function

function hoistedFunction() {
    console.log('I am a hoisted function');
}

//  ------------------------| Function expressions and arrow functions are not hoisted |------------------------

// console.log(notHoistedFunction()); // TypeError: notHoistedFunction is not a function call undefined
var notHoistedFunction = function () {
    console.log('I am not a hoisted function');
};

// console.log(notHoistedArrowFunction); // ReferenceError: Cannot access 'notHoistedArrowFunction' before initialization
let notHoistedArrowFunction = () => {
    console.log('I am not a hoisted arrow function');
};

// ------------------------| Summary |------------------------
// 1. var declarations are hoisted and initialized with undefined.
// 2. let and const declarations are hoisted but not initialized, leading to a Temporal Dead Zone (TDZ) until they are declared.
// 3. Function declarations are hoisted and can be called before their declaration.
// 4. Function expressions and arrow functions assigned to var, let, or const are not hoisted in the same way as function declarations.

// ------------------------| Class Declaration |------------------------
// console.log(myClassInstance); // ReferenceError: Cannot access 'MyClass' before initialization
class MyClass {
    constructor() {
        this.name = 'MyClass Instance';
    }
}

const myClassInstance = new MyClass();

console.log(myClassInstance); // Outputs: MyClass { name: 'MyClass Instance' }

// ------------------------| Class Expression |------------------------
// console.log(myClassExpressionInstance); // ReferenceError: Cannot access 'MyClassExpression' before initialization
const MyClassExpression = class {
    constructor() {
        this.name = 'MyClassExpression Instance';
    }
};

const myClassExpressionInstance = new MyClassExpression();

console.log(myClassExpressionInstance); // Outputs: MyClassExpression { name: 'MyClassExpression Instance' }

// ------------------------| IIFE (Immediately Invoked Function Expression) |------------------------
(function () {
    console.log('IIFE executed');
})(); // Outputs: IIFE executed

// console.log(a); // ReferenceError: Cannot access 'a' before initialization
// console.log(b); // ReferenceError: Cannot access 'b' before initialization

var a = (function () {
    console.log("var IIFE");
})();

let b = (function () {
    console.log("let IIFE");
})();


// IIFE is not hoisted, it is executed immediately where it is defined.

// ------------------------| Summary of Class and IIFE Hoisting |------------------------
// 1. Class declarations are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.
// 2. Class expressions behave like variable declarations and are not hoisted in the same way as class declarations.
// 3. IIFEs are not hoisted and are executed immediately where they are defined.