"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name) {
        this.cars = [];
        this.age = 21;
        this.driverLIcence = "";
        this.name = name;
    }
    addCar(car) {
        this.cars.push(car);
    }
    startCar(model) {
        if (this.age < 18) {
            throw new Error("Person younger than 18, can not drive a car");
        }
        console.log("startCar kod buraya geldi ");
        if (this.driverLIcence == "") {
            throw new Error("Person that doesn't have licence, can not drive a car");
        }
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