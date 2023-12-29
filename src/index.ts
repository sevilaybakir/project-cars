import { Engine } from "./engine";
import { Mercedes } from "./mercedes";
import { BMW } from "./bmw";
import { Person } from "./person";
import {EngineType} from "./engineType"
import { Car } from "./car"

let sevilay = new Person("Sevilay")

sevilay.addCar(new Mercedes("a180",new Engine(EngineType.Diesel,120)))
sevilay.addCar(new Mercedes("C180", new Engine(EngineType.Gasoline,80)))
sevilay.addCar(new BMW("m6", new Engine(EngineType.Gasoline, 180)))

sevilay.startCar("a180")

let cars = [
    new Mercedes("a180", new Engine(EngineType.Diesel, 120)),
    new Mercedes("C180", new Engine(EngineType.Gasoline, 80))
]

let mercedesC180s = cars.filter(function(el){
    el.model == "C180"
})


let oytun = new Person("Oytun")

// console.log(oytun.name)
oytun.displayName()
oytun.updateName("bok");

let merco = new Mercedes("m6", new Engine(EngineType.Gasoline, 180));
merco.start()
merco.displayConfiguration()

let oytunsCars = [
    new Mercedes("c240", new Engine(EngineType.Gasoline, 120)),
    new Mercedes("a180", new Engine(EngineType.Diesel, 120)),
    new Mercedes("l550", new Engine(EngineType.Diesel, 120))
]

oytunsCars.forEach(car => {
    car.engine.horsepower=car.engine.horsepower*2
});

console.log(oytunsCars);


let oytunsNewHorsepower=oytunsCars.map((car)=>{
    car.engine.horsepower * 2
    return car
})

console.log(oytunsNewHorsepower);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.log("sevilay asagida");

////////// filter Sevilay's mercedes cars
