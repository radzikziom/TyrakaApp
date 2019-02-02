import { Fuel } from './fuel.model';
import { Nozzle } from './nozzle.model';
import { Plug } from './plug.model';
import { Body } from './body.model';

export class Engine {
    id: number;
    name: string;
    body: Body;
    plug: Plug;
    nozzle: Nozzle;
    fuel: Fuel;

    constructor(name: string, body: Body, fuel: Fuel, nozzle: Nozzle, plug: Plug) {
        this.name = name;
        this.body = body;
        this.nozzle = nozzle;
        this.plug = plug;
        this.fuel = fuel;
    }
}