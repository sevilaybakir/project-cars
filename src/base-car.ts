import { Car } from "./car";
import { Engine } from "./engine";

export class BaseCar{
    public model: string
    public engine : Engine;
    public color: string = "white";
    
    constructor(model: string, engine:Engine){
        this.engine = engine
        this.model = model
    }
    
    private displayColor(){
        console.log(this.color)
    }
    
    private displayEngineType() {
        console.log(this.engine.type)

    }
    
    displayConfiguration() {
        this.displayColor()
        this.displayEngineType()
    }
}
