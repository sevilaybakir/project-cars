import { Car } from "./car"

export class Person {
    carsMap: Map<string, Car> = new Map()
    // map: {
    //     "a180" : Mercedes{
    //         model: a180,
    //         enigne: EngineType(diesel),
    //         horsepower: 120
    //     },
    //     "c180:": Mercedes{
    //         model:ca180,
    //         enigne: EngineType(gasilone),
    //         horsepower: 80
    //     }
    // }
    
    // private name: string
    private name: string;
    
    constructor(name: string) {
        this.name = name
    }
    
    addCar(car:Car){
        this.carsMap.set(car.getModel(), car)
    }
    
    startCar(model:string){
        this.carsMap.get(model)?.start()
    } 
    
    displayName(){
        console.log(this.name)
    }
    
    updateName(newName: string) {
       this.name = newName
    }
    
}
