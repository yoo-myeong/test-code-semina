import {A} from "./A";

export class B {
    constructor(
        private readonly a: A
    ) {}

    getZero() {
        return this.a.getNumber() - 1;
    }
}
