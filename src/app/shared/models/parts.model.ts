import { Fuel } from './fuel.model';
import { Nozzle } from './nozzle.model';
import { Plug } from './plug.model';
import { Body } from './body.model';

export class Parts{
    bodys: Body[];
    fuels: Fuel[];
    nozzles: Nozzle[];
    plugs: Plug[];
}