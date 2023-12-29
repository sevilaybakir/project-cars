import { Car } from "./car"

export class Person {
    cars:Car[]=[]
    // cars: Map<string, Car>
    
    // private name: string
    private name: string;
    
    constructor(name: string) {
        this.name = name
    }
    
    addCar(car:Car){
        this.cars.push(car)
    }
    
    startCar(model:string){
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
