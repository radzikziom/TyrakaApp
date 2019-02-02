export class Body{
    id: number;
    height: number;
    weight: number;
    diameter: number;
    material: string;

    constructor(material: string, height: number, diameter: number, weight: number) {
        this.material = material;
        this.height = height;
        this.diameter = diameter;
        this.weight = weight;
    }
}