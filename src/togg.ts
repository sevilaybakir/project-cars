import { Car } from "./car";
import { Engine } from "./engine";

export class Togg implements Car{
    
    public model: string;
    private engine : Engine;
    public color: string = "white";
    
    constructor(model:string, engine:Engine){
       this.model = model 
       this.engine = engine
    }
    start(){
        this.engine.start()
        console.log(`Togg ${this.model} Calisiyor`)
    };
    stop(){
        this.engine.stop()
        console.log(`Togg ${this.model} durdu`);
        
    }
    getModel(): string {
        return this.model
    }

}
