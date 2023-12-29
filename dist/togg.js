"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Togg = void 0;
class Togg {
    constructor(model, engine) {
        this.color = "white";
        this.model = model;
        this.engine = engine;
    }
    start() {
        this.engine.start();
        console.log(`Togg ${this.model} Calisiyor`);
    }
    ;
    stop() {
        this.engine.stop();
        console.log(`Togg ${this.model} durdu`);
    }
    getModel() {
        return this.model;
    }
}
exports.Togg = Togg;
//# sourceMappingURL=togg.js.map