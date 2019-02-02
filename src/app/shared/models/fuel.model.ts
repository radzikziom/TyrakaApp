export class Fuel {
    id;
    weight;
    type;

    constructor(type: string, weight: number) {
        this.weight = weight;
        this.type = type;
    }
}