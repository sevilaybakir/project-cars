import { Engine } from "./engine";

export interface Car {
    getModel(): string
    start():any;
    stop():any;
}