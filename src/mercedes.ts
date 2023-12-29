import { BaseCar } from "./base-car";
import { Car } from "./car";
import { Engine } from "./engine";

export class Mercedes extends BaseCar implements Car{
    public mercdensAnahatri: string = "star"
    
    constructor(model: string, engine: Engine) {
       super(model,engine)
    }
    
    getModel(): string {
        return this.model
    }
    
    start(){
        this.engine.start()
        console.log(`Mercedes ${this.model} Calisiyor`)
    };
    stop(){
        this.engine.stop()
        console.log(`Mercedes ${this.model} durdu`);
        
    }
}
