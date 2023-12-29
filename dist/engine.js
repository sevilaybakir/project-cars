"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Engine = void 0;
class Engine {
    constructor(type, horsepower) {
        this.type = type;
        this.horsepower = horsepower;
    }
    start() {
        console.log(this.type, " is working");
    }
    ;
    stop() {
        console.log(this.type, " has stopped");
    }
}
exports.Engine = Engine;
// let newArray:string[]
// let newArray2: Array<string>
//# sourceMappingURL=engine.js.map