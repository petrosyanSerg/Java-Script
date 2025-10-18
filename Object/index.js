// Обекты в JavaScript - это коллекции свойств, где каждое свойство состоит из ключа и значения.
// Ключи в объектах обычно являются строками или символами, а значения могут быть любого типа данных, включая другие объекты и функции.

// Создание объекта
const person = {
    name: "John",
    age: 30,
    isEmployed: true,
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};

// Доступ к свойствам объекта
console.log(person.name); // John
console.log(person["age"]); // 30

// Вызов метода объекта
person.greet(); // Hello, my name is John

// Добавление нового свойства
person.city = "New York";
console.log(person.city); // New York

// Удаление свойства
delete person.isEmployed;
console.log(person.isEmployed); // undefined

// Перебор свойств объекта
for (let key in person) {
    console.log(key + ": " + person[key]);
}

// Проверка наличия свойства
console.log("name" in person); // true
console.log("isEmployed" in person); // false

// Вложенные объекты
const student = {
    name: "Alice",
    age: 22,
    address: {
        street: "123 Main St",
        city: "Los Angeles",
        zip: "90001"
    }
};

console.log(student.address.city); // Los Angeles

// Преобразование объекта в JSON
const jsonString = JSON.stringify(person);
console.log(jsonString); // {"name":"John","age":30,"city":"New York"}

// Преобразование JSON в объект
const jsonObject = JSON.parse(jsonString);
console.log(jsonObject); // { name: 'John', age: 30, city: 'New York' }

// |----------------------------------------------------------------------------------------------------------|
// Методы Глобалйного Объекта Object

// Object.keys() - возвращает массив имен собственных перечисляемых свойств объекта.
const keys = Object.keys(person);
console.log(keys); // [ 'name', 'age', 'city', 'greet' ]

// Object.values() - возвращает массив значений собственных перечисляемых свойств объекта.
const values = Object.values(person);
console.log(values); // [ 'John', 30, 'New York', [Function: greet] ]

// Object.entries() - возвращает массив пар [ключ, значение] собственных перечисляемых свойств объекта. Кортежи.
const entries = Object.entries(person);
console.log(entries); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'city', 'New York' ], [ 'greet', [Function: greet] ] ]

// Object.assign() - копирует значения всех перечисляемых собственных свойств из одного или более исходных объектов в целевой объект.
const target = {};
const source = { a: 1, b: 2 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2 }

// Object.freeze() - замораживает объект, предотвращая добавление новых свойств и изменение существующих.
const frozenObject = Object.freeze({ name: "Frozen" });
frozenObject.name = "Changed"; // Не сработает
console.log(frozenObject.name); // Frozen

// Object.seal() - запечатывает объект, предотвращая добавление или удаление свойств, но позволяя изменять существующие свойства.
const sealedObject = Object.seal({ name: "Sealed" });
sealedObject.name = "Changed"; // Сработает
console.log(sealedObject.name); // Changed
delete sealedObject.name; // Не сработает
console.log(sealedObject.name); // Changed

// Object.getOwnPropertyNames() - возвращает массив всех собственных имен свойств (включая неперечисляемые) объекта.
const allPropertyNames = Object.getOwnPropertyNames(person);
console.log(allPropertyNames); // [ 'name', 'age', 'city', 'greet' ]

// Object.hasOwnProperty() - возвращает логическое значение, указывающее, содержит ли объект указанное собственное свойство.
const hasAge = person.hasOwnProperty("age");
console.log(hasAge); // true

const hasIsEmployedProp = person.hasOwnProperty("isEmployed");
console.log(hasIsEmployedProp); // false

// Object.getPrototypeOf() - возвращает прототип указанного объекта.
const prototype = Object.getPrototypeOf(person);
console.log(prototype); // {}

// Object.hasOwn() - проверяет, содержит ли объект указанное собственное свойство.
const hasName = Object.hasOwn(person, "name");
console.log(hasName); // true
const hasIsEmployed = Object.hasOwn(person, "isEmployed");
console.log(hasIsEmployed); // false

// Object.defineProperty() - определяет новое свойство непосредственно на объекте или изменяет существующее свойство объекта и возвращает объект.
Object.defineProperty(person, "country", {
    value: "USA",
    writable: false,
    enumerable: true,
    configurable: false
});
console.log(person.country); // USA
person.country = "Canada"; // Не сработает
console.log(person.country); // USA

// Object.defineProperties() - определяет новые свойства непосредственно на объекте или изменяет существующие свойства объекта и возвращает объект.
Object.defineProperties(person, {
    hobby: {
        value: "Reading",
        writable: true,
        enumerable: true,
        configurable: true
    },
    profession: {
        value: "Developer",
        writable: true,
        enumerable: true,
        configurable: true
    }
});
console.log(person.hobby); // Reading
console.log(person.profession); // Developer

// Object.create() - создает новый объект с указанным прототипом и свойствами.
const newPerson = Object.create(person);
newPerson.name = "Mike";
console.log(newPerson.name); // Mike
console.log(newPerson.age); // 30 (унаследовано от person)

// Object.is() - определяет, являются ли два значения одинаковыми.
console.log(Object.is(25, 25)); // true
console.log(Object.is(NaN, NaN)); // true
console.log(Object.is(0, -0)); // false

// Object.fromEntries() - преобразует список пар [ключ, значение] в объект.
const entriesList = [['name', 'Sarah'], ['age', 28]];
const objFromEntries = Object.fromEntries(entriesList);
console.log(objFromEntries); // { name: 'Sarah', age: 28 }

// Object.preventExtensions() - предотвращает добавление новых свойств к объекту.
const extensibleObject = { name: "Extensible" };
Object.preventExtensions(extensibleObject);
extensibleObject.age = 35; // Не сработает
console.log(extensibleObject.age); // undefined

// Object.isExtensible() - проверяет, можно ли добавлять новые свойства к объекту.
console.log(Object.isExtensible(extensibleObject)); // false

// Object.isFrozen() - проверяет, заморожен ли объект.
console.log(Object.isFrozen(frozenObject)); // true

// Object.isSealed() - проверяет, запечатан ли объект.
console.log(Object.isSealed(sealedObject)); // true

// Object.getOwnPropertyDescriptor() - возвращает дескриптор свойства для указанного собственного свойства объекта.
const descriptor = Object.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);
// { value: 'John', writable: true, enumerable: true, configurable: true }

// Object.getOwnPropertyDescriptors() - возвращает дескрипторы всех собственных свойств объекта.
const allDescriptors = Object.getOwnPropertyDescriptors(person);
console.log(allDescriptors);
// { name: { value: 'John', writable: true, enumerable: true, configurable: true }, ... }

// Object.setPrototypeOf() - устанавливает прототип указанного объекта на другой объект или null.
const anotherPerson = { age: 40 };
Object.setPrototypeOf(anotherPerson, person);
console.log(anotherPerson.name); // John (унаследовано от person)

// Object.prototype - прототип объекта, от которого наследуются все объекты в JavaScript.
console.log(Object.prototype);
// {}

// В заключение, объекты в JavaScript являются мощным инструментом для хранения и
// управления данными, а глобальный объект
// Object предоставляет множество методов для работы с этими объектами.
