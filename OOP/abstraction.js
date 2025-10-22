// ------------------------------ Абстракция в ООП ------------------------------

// Абстракция - это принцип ООП, который
// позволяет скрыть сложные детали реализации и показать только необходимые части объекта или системы.

// Пример абстракции с использованием классов в JavaScript:

class Car {
    constructor(brand, model) {
        this.brand = brand; // Марка автомобиля
        this.model = model; // Модель автомобиля
        this.speed = 0; // Текущая скорость
    }

    // Метод для ускорения автомобиля
    accelerate(amount) {
        this.speed += amount;
        console.log(`${this.brand} ${this.model} is accelerating. Current speed: ${this.speed} km/h`);
    }

    // Метод для торможения автомобиля
    brake(amount) {
        this.speed = Math.max(0, this.speed - amount);
        console.log(`${this.brand} ${this.model} is braking. Current speed: ${this.speed} km/h`);
    }

    // Метод для получения текущей скорости
    getCurrentSpeed() {
        return this.speed;
    }
}

// Создание экземпляра класса Car
const myCar = new Car('Toyota', 'Corolla');

// Использование методов для взаимодействия с автомобилем
myCar.accelerate(50); // Toyota Corolla is accelerating. Current speed: 50 km/h
myCar.brake(20);      // Toyota Corolla is braking. Current speed: 30 km/h
console.log(`Current Speed: ${myCar.getCurrentSpeed()} km/h`); // Current Speed: 30 km/h

// ------------------------------ Конец примера ------------------------------
// В этом примере класс Car предоставляет абстракцию автомобиля,
// скрывая сложные детали управления скоростью и предоставляя простые
// методы для ускорения, торможения и получения текущей скорости.

class Transport {
    move() {
        throw new Error("Метод move() должен быть реализован!");
    }
}

class Car_2 extends Transport {
    move() {
        console.log("Машина едет 🚗");
    }
}

const c = new Car_2();
c.move();
