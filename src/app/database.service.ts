import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Engine } from './shared/models/engine.model';
import { Fuel } from './shared/models/fuel.model';
import { Plug } from './shared/models/plug.model';
import { Nozzle } from './shared/models/nozzle.model';
import { Test } from './shared/models/test.model';
import { Body } from './shared/models/body.model';
import { BehaviorSubject, ObjectUnsubscribedError } from 'rxjs';
import { Parts } from './shared/models/parts.model';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private serverAddress;
  private _engines: BehaviorSubject<Engine[]>;
  private _tests: BehaviorSubject<Test[]>;
  private _parts: BehaviorSubject<Parts>;
  private dataStore: {
    engines: Engine[],
    tests: Test[],
    parts: Parts
  };

  constructor(private http: HttpClient) {
    this.serverAddress = 'http://localhost:8080/api';
    this._engines = <BehaviorSubject<Engine[]>> new BehaviorSubject([]);
    this._tests = <BehaviorSubject<Test[]>> new BehaviorSubject([]);
    this._parts = <BehaviorSubject<Parts>> new BehaviorSubject({});
    this.dataStore = {
      engines: [],
      tests: [],
      parts: {
        bodys: [],
        fuels: [],
        nozzles: [],
        plugs: []
      }
    }
  }

  get engines() {
    return this._engines.asObservable();
  }

  get parts() {
    return this._parts.asObservable();
  }

  get tests() {
    return this._tests.asObservable();
  }

  // Engines CRUD ---------------------------------------------------------------------
  loadEngines() {
    this.http.get<Engine[]>(this.serverAddress+'/engines').subscribe((data) => {
      this.dataStore.engines = data;
      this._engines.next(Object.assign({}, this.dataStore).engines);
    });
  }

  createEngine(engine: Engine) {
    this.http.post(this.serverAddress + '/engine', engine).subscribe();
    this.dataStore.engines.push(engine);
    this._engines.next(Object.assign({}, this.dataStore).engines);
  }

  removeEngine(id: number) {
    this.http.delete(this.serverAddress + '/engine/' + id).subscribe();
    this.dataStore.engines.forEach((engine, index) => {
      if(engine.id == id) {
        this.dataStore.engines.splice(index, 1);
      }
    });
    this._engines.next(Object.assign({}, this.dataStore).engines);
  }

  // Parts CRUD ---------------------------------------------------------------------

  loadParts() {
    this.http.get<Body[]>(this.serverAddress+'/bodys').subscribe((data) => {
      this.dataStore.parts.bodys = data;
    });
    this.http.get<Fuel[]>(this.serverAddress+'/fuels').subscribe((data) => {
      this.dataStore.parts.fuels = data;
    })
    this.http.get<Nozzle[]>(this.serverAddress+'/nozzles').subscribe((data) => {
      this.dataStore.parts.nozzles = data;
    })
    this.http.get<Plug[]>(this.serverAddress+'/plugs').subscribe((data) => {
      this.dataStore.parts.plugs = data;
    })

    this._parts.next(Object.assign({}, this.dataStore).parts);
  }

  createBody(body: Body) {
    this.http.post(this.serverAddress + '/body', body).subscribe();
    this.dataStore.parts.bodys.push(body);
    this._parts.next(Object.assign({}, this.dataStore).parts);
  }

  createFuel(fuel: Fuel) {
    this.http.post(this.serverAddress + '/fuel', fuel).subscribe();
    this.dataStore.parts.fuels.push(fuel);
    this._parts.next(Object.assign({}, this.dataStore).parts);
  }
  
  createNozzle(nozzle: Nozzle) {
    this.http.post(this.serverAddress + '/nozzle', nozzle).subscribe();
    this.dataStore.parts.nozzles.push(nozzle);
    this._parts.next(Object.assign({}, this.dataStore).parts);
  }
  createPlug(plug: Plug) {
    this.http.post(this.serverAddress + '/plug', plug).subscribe();
    this.dataStore.parts.plugs.push(plug);
    this._parts.next(Object.assign({}, this.dataStore).parts);
  }

  removeBody(id: number) {
    this.http.delete(this.serverAddress + '/body/' + id).subscribe();
    this.dataStore.parts.bodys.forEach((body, index) => {
      if(body.id == id) {
        this.dataStore.parts.bodys.splice(index, 1);
      }
    });
    this._parts.next(Object.assign({}, this.dataStore).parts);
  }

  removeFuel(id: number) {
    this.http.delete(this.serverAddress + "/fuel/" + id).subscribe();
    this.dataStore.parts.fuels.forEach((fuel, index) => {
      if(fuel.id = id) {
        this.dataStore.parts.fuels.splice(index, 1);
      }
    })
    this._parts.next(Object.assign({}, this.dataStore).parts);
  }

  removeNozzle(id: number) {
    this.http.delete(this.serverAddress + "/nozzle/" + id).subscribe();
    this.dataStore.parts.nozzles.forEach((nozzle, index) => {
      if(nozzle.id = id) {
        this.dataStore.parts.nozzles.splice(index, 1);
      }
    })
    this._parts.next(Object.assign({}, this.dataStore).parts);
  }
  removePlug(id: number) {
    this.http.delete(this.serverAddress + "/plug/" + id).subscribe();
    this.dataStore.parts.plugs.forEach((plug, index) => {
      if(plug.id = id) {
        this.dataStore.parts.plugs.splice(index, 1);
      }
    })
    this._parts.next(Object.assign({}, this.dataStore).parts);
  }


  // Tests CRUD ---------------------------------------------------------------------

  loadTests() {
    this.http.get<Test[]>(this.serverAddress+'/tests').subscribe((data) => {
      this.dataStore.tests = data;
      this._tests.next(Object.assign({}, this.dataStore).tests);
    })
  }

  createTest(test: Test) {
    this.http.post(this.serverAddress + '/test', test).subscribe();
    this.dataStore.tests.push(test);
    this._tests.next(Object.assign({}, this.dataStore).tests);
  }

  removeTest(id) {
    this.http.delete(this.serverAddress + '/test/' + id).subscribe();
    this.dataStore.tests.forEach((test, index) => {
      if(test.id == id) {
        this.dataStore.tests.splice(index, 1);
      }
    });
    this._tests.next(Object.assign({}, this.dataStore).tests);
  }
}
