// Class (Классы) - это шаблоны для создания объектов. Они позволяют создавать объекты с
// одинаковой структурой и поведением.

// Пример создания класса
class Person {
    // Конструктор класса
    constructor(name, age) {
        this.name = name; // Свойство name
        this.age = age;   // Свойство age
    }

    // Метод класса
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Создание экземпляра класса
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

// Вызов метода класса
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.

// Наследование классов
// Методы внутри класса автоматически попадают в Person.prototype.
class Student extends Person {
    constructor(name, age, studentId) { // constructor() — вызывается при создании объекта через new
        super(name, age); // Вызов конструктора родительского класса
        this.studentId = studentId; // Новое свойство studentId
    }

    // Переопределение метода greet
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and my student ID is ${this.studentId}.`);
    }
}

// Создание экземпляра класса Student
const student1 = new Student('Charlie', 20, 'S12345');

// Вызов переопределенного метода класса Student
student1.greet(); // Output: Hello, my name is Charlie, I am 20 years old and my student ID is S12345.
console.log(Person.prototype.isPrototypeOf(student1)); // true

//--------- Типы методов---------
class Example {
    // Статический метод - вызывается на самом классе, а не на его экземпляре
    static staticMethod() {
        console.log('This is a static method.');
    }

    // Метод экземпляра - вызывается на экземпляре класса (Обычный метод)
    instanceMethod() {
        console.log('This is an instance method.');
    }
}

// Вызов статического метода
Example.staticMethod(); // Output: This is a static method.

// Создание экземпляра класса Example
const exampleInstance = new Example();

// Вызов метода экземпляра
exampleInstance.instanceMethod(); // Output: This is an instance method.

// --------- Геттеры и сеттеры ---------
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Геттер для вычисления площади
    get area() {
        return this.width * this.height
    }

    // Сеттер для установки ширины
    set setWidth(newWidth) {
        this.width = newWidth;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area); // Output: 50

rect.setWidth = 20; // Использование сеттера для изменения ширины
console.log(rect.area); // Output: 100

// --------- Приватные поля и методы ---------
class Counter {
    #count = 0; // Приватное поле

    // Приватный метод
    #logCount() {
        console.log(`Current count is: ${this.#count}`);
    }

    increment() {
        this.#count++;
        this.#logCount(); // Вызов приватного метода
    }

    getCount() {
        return this.#count; // Доступ к приватному полю через публичный метод
    }
}

const counter = new Counter();
counter.increment(); // Output: Current count is: 1
counter.increment(); // Output: Current count is: 2
console.log(counter.getCount()); // Output: 2
// console.log(counter.#count); // Ошибка: нельзя получить доступ к приватному полю
// counter.#logCount(); // Ошибка: нельзя вызвать приватный метод

// Особенности
// Классы — это синтаксический сахар над function и prototype
console.log(typeof Person); // Output: function
console.log(Person === Person.prototype.constructor); // Output: true

// Классы всегда используют строгий режим (strict mode)
class StrictExample {
    method() {
        // В строгом режиме this будет undefined, если метод вызван без контекста
        console.log(this);
    }
}

const strictInstance = new StrictExample();
strictInstance.method(); // Output: StrictExample {}

// Классы не поднимаются (hoisted)
// console.log(NewClass); // Ошибка: NewClass is not defined
class NewClass {
}

console.log(NewClass); // Output: [class NewClass]

/*

| Элемент               | Пример                     | Доступ       | Назначение           |
| --------------------- | -------------------------- | ------------ | -------------------- |
| **constructor()**     | `constructor(name)`        | экземпляр    | Инициализация        |
| **метод**             | `sayHi()`                  | экземпляр    | Поведение объекта    |
| **статический метод** | `static make()`            | класс        | Утилиты              |
| **поле класса**       | `count = 0`                | экземпляр    | Данные объекта       |
| **статическое поле**  | `static version = 1`       | класс        | Общие данные         |
| **геттер**            | `get name()`               | экземпляр    | Возврат значения     |
| **сеттер**            | `set name(v)`              | экземпляр    | Установка значения   |
| **приватное поле**    | `#secret = 42`             | только класс | Инкапсуляция         |
| **наследование**      | `class Dog extends Animal` | —            | Наследует поведение  |
| **super()**           | `super.method()`           | —            | Обращение к родителю |

 */