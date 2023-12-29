"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mercedes = void 0;
const base_car_1 = require("./base-car");
class Mercedes extends base_car_1.BaseCar {
    constructor(model, engine) {
        super(model, engine);
        this.mercdensAnahatri = "star";
    }
    getModel() {
        return this.model;
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
exports.Mercedes = Mercedes;
//# sourceMappingURL=mercedes.js.map