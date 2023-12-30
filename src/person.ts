import { Car } from "./car"

export class Person {
    cars:Car[]=[]
    // cars: Map<string, Car>
    
    // private name: string
    private name: string;
    
    private age: number = 21
    
    private driverLIcence: string = ""
    
    constructor(name: string) {
        this.name = name
    }
    
    addCar(car:Car){
        this.cars.push(car)
    }
    
    startCar(model:string){
        if(this.age < 18){
            throw new Error("Person younger than 18, can not drive a car")
        }
        console.log("startCar kod buraya geldi ")
        if (this.driverLIcence == "") {
            throw new Error("Person that doesn't have licence, can not drive a car");
        }
        let mercedesC180s = this.cars.filter((car)=>{
           return car.getModel() == model
        })
        if(mercedesC180s.length > 0){
            mercedesC180s[0].start()
        }
    } 
    
    displayName(){
        console.log(this.name)
    }
    
    updateName(newName: string) {
       this.name = newName
    }
    
}
