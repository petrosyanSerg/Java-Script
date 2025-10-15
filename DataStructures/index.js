//  -----------------| JavaScript Data Structures |-----------------

// ------------------| Primitive Types |------------------

// 1. Number
let num = 42; // Integer
let floatNum = 3.14; // Floating-point number
const bigIntNum = 9007199254740991n; // BigInt

// 2. String
let str = "Hello, World!";
let char = 'A'; // Single character string

// 3. Boolean
let isTrue = true;
let isFalse = false;

// 4. Undefined
let undef; // Variable declared but not assigned

// 5. Null
let emptyValue = null; // Represents no value

// 6. Symbol
let sym = Symbol('uniqueIdentifier');

// ------------------| Composite Types |------------------

// 1. Object
let obj = {
    name: "Alice",
    age: 30,
    isStudent: false
};

// 2. Array
let arr = [1, 2, 3, 4, 5];

// 3. Function
function greet(name) {
    return `Hello, ${name}!`;
}

// ------------------| Advanced Data Structures |------------------

// 1. Set
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(2); // Duplicate, will not be added

// 2. Map
let myMap = new Map();
myMap.set('key1', 'value1');
myMap.set('key2', 'value2');

// 3. WeakSet
let weakSet = new WeakSet();
let obj1 = {};
weakSet.add(obj1);

// 4. WeakMap
let weakMap = new WeakMap();
let obj2 = {};
weakMap.set(obj2, 'someValue');

// ------------------| Typed Arrays |------------------

// 1. Int8Array
let int8Arr = new Int8Array([1, 2, 3]);

// 2. Uint8Array
let uint8Arr = new Uint8Array([1, 2, 3]);

// 3. Float32Array
let float32Arr = new Float32Array([1.0, 2.0, 3.0]);

// ------------------| Exporting Data Structures |------------------

export {
    num, floatNum, bigIntNum,
    str, char,
    isTrue, isFalse,
    undef,
    emptyValue,
    sym,
    obj,
    arr,
    greet,
    mySet,
    myMap,
    weakSet,
    weakMap,
    int8Arr,
    uint8Arr,
    float32Arr
};
// ------------------| End of Data Structures |------------------