// ------------------------------ Полиморфизм в ООП ------------------------------

// Полиморфизм - это способность объектов разных классов реагировать на одинаковые сообщения (методы) по-разному.

// Пример полиморфизма с использованием классов в JavaScript:

class Animal {
    speak() {
        console.log("The animal makes a sound.");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks.");
    }
}

class Cat extends Animal {
    speak() {
        console.log("The cat meows.");
    }
}

// Функция, которая принимает объект типа Animal и вызывает метод speak
function makeAnimalSpeak(animal) {
    animal.speak();
}

// Создаем объекты разных классов
const myDog = new Dog();
const myCat = new Cat();


const animals = [new Dog(), new Cat()];
animals.forEach(a => a.speak());


// Вызываем функцию с разными объектами
makeAnimalSpeak(myDog); // Output: The dog barks.
makeAnimalSpeak(myCat); // Output: The cat meows.

// В этом примере метод speak ведет себя по-разному в зависимости от типа объекта, что демонстрирует полиморфизм.

// ------------------------------ Конец примера ------------------------------
// Полиморфизм позволяет писать более гибкий и расширяемый код, так как новые
// классы могут быть добавлены без изменения существующего кода, если они реализуют необходимые методы.
