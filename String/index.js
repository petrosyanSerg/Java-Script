// Объект String используется, чтобы представить и конструировать последовательность символов.
// Другим способом (введённым в ECMAScript 5) является рассмотрение строки как массивоподобного объекта, в котором символы имеют соответствующие числовые индексы:
// В JavaScript у строк (String) действительно очень много методов — более 40 стандартных методов, в зависимости от версии ECMAScript.

let sampleString = "Hello, World!";
console.log(sampleString[7]);  // 'W'
console.log(sampleString.length); // 'Хранит длину строки. Только для чтения.'

//--------------| String Methods |--------------//

// 1. Методы для работы с содержимым строки-----------------------------//
// charAt(index)
// Возвращает символ по индексу
console.log(sampleString.charAt(1)); // 'e'

// charCodeAt(index)
// Код символа (UTF-16)
console.log(sampleString.charCodeAt(1)); // 101

// codePointAt(index)
// Юникод-код символа (для эмодзи и спецсимволов)
console.log(sampleString.codePointAt(1)); // 101

// at(index)
// Возвращает символ с поддержкой отрицательных индексов (ES2022)
console.log(sampleString.at(-1)); // '!' (последний символ)

// 2. Методы поиска ------------------------------------------------------//
// indexOf(substring)
// Возвращает индекс первого вхождения подстроки
console.log(sampleString.indexOf("World")); // 7

// lastIndexOf(substring)
// Возвращает индекс последнего вхождения подстроки
console.log(sampleString.lastIndexOf("o")); // 8

// includes(substring)
// Проверяет наличие подстроки
console.log(sampleString.includes("Hello")); // true

// startsWith(substring)
// Проверяет, начинается ли строка с подстроки
console.log(sampleString.startsWith("Hello")); // true

// endsWith(substring)
// Проверяет, заканчивается ли строка на подстроку
console.log(sampleString.endsWith("!")); // true

// match(regexp)
// Ищет совпадения с регулярным выражением
console.log(sampleString.match(/o/g)); // ['o', 'o']

// matchAll(regexp)
// Ищет все совпадения с регулярным выражением (ES2020)
const regex = /o/g;
const matches = sampleString.matchAll(regex);
for (const match of matches) {
    console.log(match); // ['o']
}

// 3. Методы извлечения ------------------------------------------------------//

// slice(start, end)
// Извлекает часть строки
console.log(sampleString.slice(0, 5)); // 'Hello'

// substring(start, end)
// Извлекает часть строки (не поддерживает отрицательные индексы)
console.log(sampleString.substring(0, 5)); // 'Hello'

// substr(start, length)
// Извлекает часть строки по длине (устаревший метод)
console.log(sampleString.substr(7, 5)); // 'World'

// split(separator)
// Разделяет строку на массив по разделителю
console.log(sampleString.split(", ")); // ['Hello', 'World!']

// 4. Методы изменения (создают новую строку)------------------------------------------------------//

// toLowerCase()
// Преобразует строку в нижний регистр
console.log(sampleString.toLowerCase()); // 'hello, world!'

// toUpperCase()
// Преобразует строку в верхний регистр
console.log(sampleString.toUpperCase()); // 'HELLO, WORLD!'

// trim()
// Удаляет пробелы с начала и конца строки
let stringWithSpaces = "   Hello, World!   ";
console.log(stringWithSpaces.trim()); // 'Hello, World!'

// replace(searchValue, newValue)
// Заменяет часть строки
console.log(sampleString.replace("World", "JavaScript")); // 'Hello, JavaScript!'

// repeat(count)
// Повторяет строку заданное количество раз
console.log("Ha".repeat(3)); // 'HaHaHa'

// replaceAll(search, replacement)
// Заменяет все вхождения подстроки (ES2021)
let text = "foo bar foo baz";
console.log(text.replaceAll("foo", "EZ")); // 'EZ bar EZ baz'

// trimStart()
// Удаляет пробелы с начала строки (ES2019)
console.log(stringWithSpaces.trimStart()); // 'Hello, World!   '

// trimEnd()
// Удаляет пробелы с конца строки (ES2019)
console.log(stringWithSpaces.trimEnd()); // '   Hello, World!'

// padStart(targetLength, padString)
// Дополняет строку в начале до заданной длины (ES2017)
console.log("5".padStart(3, "0")); // '005'

// padEnd(targetLength, padString)
// Дополняет строку в конце до заданной длины (ES2017)
console.log("5".padEnd(3, "0")); // '500'

// normalize(form)
// Нормализует строку в соответствии с формой Юникода (ES2015)
let accentedString = "é";
console.log(accentedString.normalize("NFD")); // 'é' (разделяет символы)

// 5. Методы сравнения и преобразования ------------------------------------------------------//

// localeCompare(otherString)
// Сравнивает строки с учётом локали
console.log("a".localeCompare("b")); // -1

// toString()
// Преобразует объект String в строку
let strObj = new String("Hello");
console.log(strObj.toString()); // 'Hello'

// valueOf()
// Возвращает примитивное значение строки
console.log(strObj.valueOf()); // 'Hello'

// 6. Методы для работы с шаблонами и итерацией ------------------------------------------------------//

// [Symbol.iterator]()
// Позволяет итерироваться по символам строки
for (const char of sampleString) {
    console.log(char);
}

// raw(strings, ...substitutions)
// Метод для создания "сырых" строк шаблонов (ES2015)
function tag(strings, ...substitutions) {
    return strings.raw[0];
}

console.log(tag`Hello\nWorld`); // 'Hello\nWorld'

// 7. Статические методы String ------------------------------------------------------//
// fromCharCode(...codes)
// Создаёт строку из последовательности кодов символов
console.log(String.fromCharCode(72, 101, 108, 108, 111)); // 'Hello'

// fromCodePoint(...codePoints)
// Создаёт строку из последовательности юникод-кодов (ES2015)
console.log(String.fromCodePoint(128512, 128513)); // '😀😁'

// 8. Шаблонные литералы (Template Literals) ------------------------------------------------------//
let name = "Alice";
let greeting = `Hello, ${name}!`; // Вставка переменной
console.log(greeting); // 'Hello, Alice!'

let multiLine = `This is line 1.
This is line 2.
This is line 3.`; // Многострочная строка
console.log(multiLine);

/*
    Самые часто используемые:
    includes, slice, replace, split, trim, toLowerCase, padStart, startsWith.
 */

// ---------------------------------------------------------------------------------//