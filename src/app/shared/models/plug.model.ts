export class Plug {
    id;
    weight;
    material;

    constructor(material: string, weight: number) {
        this.material = material;
        this.weight = weight;
    }
}