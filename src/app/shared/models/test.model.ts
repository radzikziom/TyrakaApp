import { Engine } from './engine.model';
import { Result } from './results.model';

export class Test {
    id: number;
    burningTime: number;
    date;
    maxThrust: number;
    specificImpuls: number;
    engine: Engine;
    results: Result[];

    constructor(engine: Engine, burningTime: number, maxThrust: number, specificImpuls: number) {
        this.engine = engine;
        this.burningTime = burningTime;
        this.maxThrust = maxThrust;
        this.specificImpuls = specificImpuls;

        let today = new Date();
        let dd = String(today.getDate());
        let mm = String(today.getMonth() + 1);
        let yyyy = today.getFullYear();
        if (+dd < 10) {
            dd = '0' + dd;
        }
        if (+mm < 10) {
            mm = '0' + mm;
        }
        this.date = yyyy + '-' + mm + '-' + dd;
    }
}