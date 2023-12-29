"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseCar = void 0;
class BaseCar {
    constructor(model, engine) {
        this.color = "white";
        this.engine = engine;
        this.model = model;
    }
    displayColor() {
        console.log(this.color);
    }
    displayEngineType() {
        console.log(this.engine.type);
    }
    displayConfiguration() {
        this.displayColor();
        this.displayEngineType();
    }
}
exports.BaseCar = BaseCar;
//# sourceMappingURL=base-car.js.map