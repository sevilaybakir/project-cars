"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name) {
        this.cars = [];
        this.name = name;
    }
    addCar(car) {
        this.cars.push(car);
    }
    startCar(model) {
        let mercedesC180s = this.cars.filter((car) => {
            return car.getModel() == model;
        });
        if (mercedesC180s.length > 0) {
            mercedesC180s[0].start();
        }
    }
    displayName() {
        console.log(this.name);
    }
    updateName(newName) {
        this.name = newName;
    }
}
exports.Person = Person;
//# sourceMappingURL=person.js.map