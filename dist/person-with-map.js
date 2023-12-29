"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name) {
        this.carsMap = new Map();
        this.name = name;
    }
    addCar(car) {
        this.carsMap.set(car.getModel(), car);
    }
    startCar(model) {
        var _a;
        (_a = this.carsMap.get(model)) === null || _a === void 0 ? void 0 : _a.start();
    }
    displayName() {
        console.log(this.name);
    }
    updateName(newName) {
        this.name = newName;
    }
}
exports.Person = Person;
//# sourceMappingURL=person-with-map.js.map