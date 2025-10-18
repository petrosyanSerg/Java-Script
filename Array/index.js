// Массив (array) — это структура данных, которая хранит несколько значений в одной переменной.
// Можно представить массив как список, где каждому элементу присвоен свой порядковый номер

let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // Output: Apple
console.log(fruits[1]); // Output: Banana
console.log(fruits[2]); // Output: Cherry

// 1. Добавление / удаление элементов ---------------------------------/
/* Все эти методы мутирую массив */
// push() - добавляет элемент в конец массива
const returnedValuePush = fruits.push('Date');
console.log(returnedValuePush) // Output: 4 (новая длина массива)
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Date']

// pop() - удаляет последний элемент массива
const lastElement = fruits.pop();
console.log(lastElement); // Output: Date
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// unshift() - добавляет элемент в начало массива
const returnedValueUnshift = fruits.unshift('Elderberry');
console.log(returnedValueUnshift) // Output: 4 (новая длина массива)
console.log(fruits); // Output: ['Elderberry', 'Apple', 'Banana', 'Cherry']

// shift() - удаляет первый элемент массива
const firstElement = fruits.shift();
console.log(firstElement); // Output: Elderberry
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// splice() - добавляет/удаляет элементы в любом месте массива
// Удаление
const removedElements = fruits.splice(1, 1); // удаляет 1 элемент с индекса 1
console.log(removedElements); // Output: ['Banana']
console.log(fruits); // Output: ['Apple', 'Cherry']

// Добавление
fruits.splice(1, 0, 'Blueberry', 'Cantaloupe'); // добавляет элементы на индекс 1
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cantaloupe', 'Cherry']

// fill() - заполняет массив указанным значением
fruits.fill('Grape', 1, 3); // заполняет элементы с индекса 1 по 3 значением 'Grape'
console.log(fruits); // Output: ['Apple', 'Grape', 'Grape', 'Cherry']

// copyWithin() - копирует часть массива внутри него
fruits.copyWithin(0, 2, 4); // копирует элементы с индекса 2 по 4 в начало массива
console.log(fruits); // Output: ['Grape', 'Cherry', 'Grape', 'Cherry']

// 2. Сортировка и перестановка -----------------------------------/
/* Все эти методы мутирую массив */

// reverse() - изменяет порядок элементов на обратный
fruits.reverse();
console.log(fruits); // Output: ['Cherry', 'Grape', 'Cherry', 'Grape']

// sort() - сортирует элементы массива
fruits.sort();
console.log(fruits); // Output: ['Cherry', 'Cherry', 'Grape', 'Grape']
// |-------------------------------------------------------------------------------------|
/* Все эти методы не мутируют массив*/
// toSorted() - возвращает новый отсортированный массив
const sortedFruits = fruits.toSorted();
console.log(sortedFruits); // Output: ['Cherry', 'Cherry', 'Grape', 'Grape']
console.log(fruits); // Original array remains unchanged

// toReversed() - возвращает новый массив с обратным порядком элементов
const reversedFruits = fruits.toReversed();
console.log(reversedFruits); // Output: ['Grape', 'Grape', 'Cherry', 'Cherry']
console.log(fruits); // Original array remains unchanged

// toSpliced() - возвращает новый массив с добавленными/удаленными элементами
const splicedFruits = fruits.toSpliced(1, 1, 'Kiwi', 'Lemon');
console.log(splicedFruits); // Output: ['Cherry', 'Kiwi', 'Lemon', 'Grape', 'Grape']
console.log(fruits); // Original array remains unchanged

// with() - возвращает новый массив с измененным элементом по указанному индексу
const newFruits = fruits.with(2, 'Mango');
console.log(newFruits); // Output: ['Cherry', 'Cherry', 'Mango', 'Grape']
console.log(fruits); // Original array remains unchanged


// 3. Поиск и проверка -----------------------------------/
/* Все эти методы не мутируют массив*/

// indexOf() - возвращает первый индекс указанного элемента или -1, если не найден
console.log(fruits.indexOf('Grape')); // Output: 2

// lastIndexOf() - возвращает последний индекс указанного элемента или -1, если не найден
console.log(fruits.lastIndexOf('Cherry')); // Output: 1

// includes() - проверяет, содержит ли массив указанный элемент
console.log(fruits.includes('Apple')); // Output: false
console.log(fruits.includes('Cherry')); // Output: true

// find() - возвращает первый элемент, удовлетворяющий условию функции
const foundFruit = fruits.find(fruit => fruit.startsWith('C'));
console.log(foundFruit); // Output: Cherry

// findLast() - возвращает последний элемент, удовлетворяющий условию функции
const foundLastFruit = fruits.findLast(fruit => fruit.startsWith('C'));
console.log(foundLastFruit); // Output: Cherry

// findIndex() - возвращает индекс первого элемента, удовлетворяющего условию функции
const foundIndex = fruits.findIndex(fruit => fruit.startsWith('G'));
console.log(foundIndex); // Output: 2

// findLastIndex() - возвращает индекс последнего элемента, удовлетворяющего условию функции
const foundLastIndex = fruits.findLastIndex(fruit => fruit.startsWith('C'));
console.log(foundLastIndex); // Output: 1

// some() - проверяет, удовлетворяет ли хотя бы один элемент условию функции
const hasGrape = fruits.some(fruit => fruit === 'Grape');
console.log(hasGrape); // Output: true

// every() - проверяет, удовлетворяют ли все элементы условию функции
const allCherries = fruits.every(fruit => fruit === 'Cherry');
console.log(allCherries); // Output: false

// 4. Итерация и преобразование -----------------------------------/
/* Все эти методы не мутируют массив*/

// forEach() - выполняет функцию для каждого элемента массива
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
// Output:
// 0: Cherry
// 1: Cherry
// 2: Grape
// 3: Grape

// map() - создает новый массив с результатами вызова функции для каждого элемента
const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // Output: ['CHERRY', 'CHERRY', 'GRAPE', 'GRAPE']

// filter() - создает новый массив с элементами, удовлетворяющими условию функции
const cherryFruits = fruits.filter(fruit => fruit === 'Cherry');
console.log(cherryFruits); // Output: ['Cherry', 'Cherry']

// reduce() - применяет функцию к аккумулятору и каждому элементу массива, возвращая одно значение
const fruitString = fruits.reduce((acc, fruit) => acc + ', ' + fruit, '');
console.log(fruitString); // Output: Cherry, Cherry, Grape, Grape

// reduceRight() - то же, что и reduce, но выполняется справа налево
const fruitStringRight = fruits.reduceRight((acc, fruit) => acc + ', ' + fruit, '');
console.log(fruitStringRight); // Output: Grape, Grape, Cherry, Cherry

// flat() - создает новый массив, "расплющивая" вложенные массивы на заданную глубину
const nestedArray = [1, [2, [3, 4]], 5];
const flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, 4, 5]

// flatMap() - сначала применяет функцию к каждому элементу, затем "расплющивает" результат на одну глубину
const words = ['hello world', 'foo bar'];
const flatMapped = words.flatMap(word => word.split(' '));
console.log(flatMapped); // Output: ['hello', 'world', 'foo', 'bar']

// 5. Извлечение и объединение -----------------------------------/
/* Все эти методы не мутируют массив*/

// slice() - возвращает новый массив, содержащий копию части исходного массива
const citrus = fruits.slice(0, 2);
console.log(citrus); // Output: ['Cherry', 'Cherry']

// concat() - объединяет два или более массивов в новый массив
const moreFruits = fruits.concat(['Kiwi', 'Lemon']);
console.log(moreFruits); // Output: ['Cherry', 'Cherry', 'Grape', 'Grape', 'Kiwi', 'Lemon']

// join() - объединяет все элементы массива в строку с указанным разделителем
const fruitList = fruits.join(' - ');
console.log(fruitList); // Output: Cherry - Cherry - Grape - Grape

// toString() - возвращает строковое представление массива
const fruitStringToString = fruits.toString();
console.log(fruitStringToString); // Output: Cherry,Cherry,Grape,Grape

// toLocaleString() - возвращает локализованное строковое представление массива
const fruitStringLocale = fruits.toLocaleString();
console.log(fruitStringLocale); // Output: Cherry,Cherry,Grape,Grape (may vary based on locale)

// 6. Итерирование и генерация -----------------------------------/
/* Все эти методы не мутируют массив*/

// entries() - возвращает итератор для пар [индекс, значение] каждого элемента массива (Кортеж)
const entries = fruits.entries();
for (const [index, fruit] of entries) {
    console.log(`${index}: ${fruit}`);
}
// Output:
// 0: Cherry
// 1: Cherry
// 2: Grape
// 3: Grape

// keys() - возвращает итератор для индексов массива
const keys = fruits.keys();
for (const key of keys) {
    console.log(key);
}
// Output:
// 0
// 1
// 2
// 3

// values() - возвращает итератор для значений массива
const values = fruits.values();
for (const value of values) {
    console.log(value);
}
// Output:
// Cherry
// Cherry
// Grape
// Grape

// from() - создает новый массив из массивоподобного или итерируемого объекта
const arrayLike = {0: 'A', 1: 'B', 2: 'C', length: 3};
const newArrayFrom = Array.from(arrayLike);
console.log(newArrayFrom); // Output: ['A', 'B', 'C']

// fromEntries() - создает новый массив из итерируемого объекта пар [ключ, значение]
const entriesArray = [['0', 'X'], ['1', 'Y'], ['2', 'Z']];
const newArrayFromEntries = Array.fromEntries(entriesArray);
console.log(newArrayFromEntries); // Output: ['X', 'Y', 'Z']

// of() - создает новый массив из переданных аргументов
const newArrayOf = Array.of(1, 2, 3, 4);
console.log(newArrayOf); // Output: [1, 2, 3, 4]

// 7. Прочие методы -----------------------------------/
/* Все эти методы не мутируют массив*/

// length - возвращает или устанавливает количество элементов в массиве
console.log(fruits.length); // Output: 4
fruits.length = 2; // Устанавливаем длину массива на 2
console.log(fruits); // Output: ['Cherry', 'Cherry']

// isArray() - проверяет, является ли значение массивом
console.log(Array.isArray(fruits)); // Output: true
console.log(Array.isArray({})); // Output: false

// at() - возвращает элемент по указанному индексу, поддерживает отрицательные индексы
console.log(fruits.at(0)); // Output: Cherry
console.log(fruits.at(-1)); // Output: Cherry

// static get [Symbol.species]() - возвращает конструктор, используемый для создания производных массивов
class MyArray extends Array {
    static get [Symbol.species]() {
        return Array;
    }
}

const myArr = new MyArray(1, 2, 3);
const mappedArr = myArr.map(x => x * 2);
console.log(mappedArr instanceof MyArray); // Output: false
console.log(mappedArr instanceof Array); // Output: true

// static fromAsync() - создает новый массив из асинхронного итерируемого объекта
async function* asyncGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

(async () => {
    const asyncArray = await Array.fromAsync(asyncGenerator());
    console.log(asyncArray); // Output: [1, 2, 3]
})();
