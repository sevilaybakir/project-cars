"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCar = void 0;
class BaseCar {
    constructor(model, engine) {
        this.color = "white";
        this.model = model;
        this.engine = engine;
    }
    start() {
        this.engine.start();
        console.log(`Mercedes ${this.model} Calisiyor`);
    }
    ;
    stop() {
        this.engine.stop();
        console.log(`Mercedes ${this.model} durdu`);
    }
}
exports.BaseCar = BaseCar;
//# sourceMappingURL=mercedes%20copy.js.map