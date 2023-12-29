import { Car } from "./car";
import { Engine } from "./engine";

export class BMW implements Car{
    private model: string;
    private engine : Engine
    public color: string = "white";
    
    constructor(model:string, engine:Engine){
       this.model = model 
       this.engine = engine
    }
    
    getModel(): string {
        return this.model
    }
    start(){
        this.engine.start()
        console.log(`BMW ${this.model} Calisiyor`)
    };
    stop(){
        this.engine.stop()
        console.log(`BMW ${this.model} durdu`);
        
    }
}
