import { EngineType } from "./engineType"

export class Engine {
    type:EngineType
    horsepower:number
    
    constructor(type:EngineType,horsepower:number){
        this.type=type
        this.horsepower=horsepower
    }
    start() {
        console.log(this.type, " is working")
    };
    stop() {
        console.log(this.type, " has stopped");

    }
}

// let newArray:string[]

// let newArray2: Array<string>
