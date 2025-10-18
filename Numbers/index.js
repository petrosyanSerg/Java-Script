/*
Всего их около 20+, включая как методы экземпляра ((123).toFixed()),
так и статические методы класса Number (Number.isInteger()).
*/

// 1. Методы экземпляра Number.prototype -------------------------------//
// toFixed(digits): Возвращает строковое представление числа с указанным количеством знаков после запятой.
console.log(3.14159.toFixed(2)); // "3.14"
// toString(radix): Возвращает строковое представление числа в указанной системе счисления (от 2 до 36).
console.log((255).toString(16)); // "ff"
// toExponential(fractionDigits): Возвращает строковое представление числа в экспоненциальной форме с указанным количеством знаков после запятой.
console.log((10).toExponential(2)); // "1.00e+1"
// toPrecision(precision): Возвращает строковое представление числа с указанной общей точностью.
console.log((0.1 + 0.2).toPrecision(30)); // "0.300"
// valueOf(): Возвращает примитивное значение объекта Number.
let numObj = new Number(42);
console.log(numObj.valueOf()); // 42

// 2. Статические методы класса Number -------------------------------//

// isNaN(value): Проверяет, является ли значение NaN.
console.log(Number.isNaN(NaN)); // true
console.log(Number.isNaN(42)); // false

// isFinite(value): Проверяет, является ли значение конечным числом.
console.log(Number.isFinite(42)); // true
console.log(Number.isFinite(Infinity)); // false

// isInteger(value): Проверяет, является ли значение целым числом.
console.log(Number.isInteger(42)); // true
console.log(Number.isInteger(3.14)); // false

// parseFloat(string): Преобразует строку в число с плавающей точкой.
console.log(Number.parseFloat("3.14")); // 3.14

// parseInt(string, radix): Преобразует строку в целое число в указанной системе счисления.
console.log(Number.parseInt("ff", 16)); // 255

// isSafeInteger(value) : Проверяет, является ли значение безопасным целым числом.
console.log(Number.isSafeInteger(9007199254740991)); // true
console.log(Number.isSafeInteger(9007199254740992)); // false

// Number(value): Преобразует значение в число.
console.log(Number("42")); // 42
console.log(Number(true)); // 1
console.log(Number(false)); // 0

// 3. Статические свойства класса Number -------------------------------//
// Максимальное и минимальное безопасные целые числа
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// Максимальное и минимальное значения числа
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324

// Специальные числовые значения
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN

// Эпсилон - наименьшее различие между двумя представимыми числами
console.log(Number.EPSILON); // 2.220446049250313e-16