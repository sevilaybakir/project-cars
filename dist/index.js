"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const engine_1 = require("./engine");
const mercedes_1 = require("./mercedes");
const bmw_1 = require("./bmw");
const person_1 = require("./person");
const engineType_1 = require("./engineType");
let sevilay = new person_1.Person("Sevilay");
sevilay.addCar(new mercedes_1.Mercedes("a180", new engine_1.Engine(engineType_1.EngineType.Diesel, 120)));
sevilay.addCar(new mercedes_1.Mercedes("C180", new engine_1.Engine(engineType_1.EngineType.Gasoline, 80)));
sevilay.addCar(new bmw_1.BMW("m6", new engine_1.Engine(engineType_1.EngineType.Gasoline, 180)));
sevilay.startCar("a180");
let cars = [
    new mercedes_1.Mercedes("a180", new engine_1.Engine(engineType_1.EngineType.Diesel, 120)),
    new mercedes_1.Mercedes("C180", new engine_1.Engine(engineType_1.EngineType.Gasoline, 80))
];
let mercedesC180s = cars.filter(function (el) {
    el.model == "C180";
});
let oytun = new person_1.Person("Oytun");
// console.log(oytun.name)
oytun.displayName();
oytun.updateName("bok");
let merco = new mercedes_1.Mercedes("m6", new engine_1.Engine(engineType_1.EngineType.Gasoline, 180));
merco.start();
merco.displayConfiguration();
let oytunsCars = [
    new mercedes_1.Mercedes("c240", new engine_1.Engine(engineType_1.EngineType.Gasoline, 120)),
    new mercedes_1.Mercedes("a180", new engine_1.Engine(engineType_1.EngineType.Diesel, 120)),
    new mercedes_1.Mercedes("l550", new engine_1.Engine(engineType_1.EngineType.Diesel, 120))
];
oytunsCars.forEach(car => {
    car.engine.horsepower = car.engine.horsepower * 2;
});
console.log(oytunsCars);
let oytunsNewHorsepower = oytunsCars.map((car) => {
    car.engine.horsepower * 2;
    return car;
});
console.log(oytunsNewHorsepower);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("sevilay asagida");
////////// filter Sevilay's mercedes cars
//# sourceMappingURL=index.js.map