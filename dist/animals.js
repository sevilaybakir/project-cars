"use strict";
class BaseAnimal {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    walk() {
        console.log(`${this.name} walking`);
    }
}
class Dog extends BaseAnimal {
    constructor(name, bonesCount) {
        super(name);
        this.bonesCount = bonesCount;
    }
    sound() {
        console.log("hav");
    }
}
class Cat extends BaseAnimal {
    sound() {
        console.log("miav");
    }
}
let dog = new Dog("cookie", 8);
dog.sound();
dog.walk();
let cat = new Cat("uzum");
cat.sound();
cat.walk();
let animals = [dog, cat];
animals.forEach((animal) => animal.sound());
console.log(animals);
//# sourceMappingURL=animals.js.map