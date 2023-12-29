"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BMW = void 0;
class BMW {
    constructor(model, engine) {
        this.color = "white";
        this.model = model;
        this.engine = engine;
    }
    getModel() {
        return this.model;
    }
    start() {
        this.engine.start();
        console.log(`BMW ${this.model} Calisiyor`);
    }
    ;
    stop() {
        this.engine.stop();
        console.log(`BMW ${this.model} durdu`);
    }
}
exports.BMW = BMW;
//# sourceMappingURL=bmw.js.map