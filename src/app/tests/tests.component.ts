import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Test } from '../shared/models/test.model';
import { Engine } from '../shared/models/engine.model';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {
  tests: Test[];
  g = 9.81;
  rocetMass = 2;
  

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.tests.subscribe((data) => {
      this.tests = data;
    })
    this.db.loadTests();
  }

  getSimulatedHeight(test: Test) {
    let speed = (test.specificImpuls * test.engine.fuel.weight) / this.rocetMass;
    let height = speed ** 2 / (this.getMass(test.engine) * this.g);
    return height;
  }

  getMass(engine: Engine) {
    let engineMass = engine.body.weight + engine.fuel.weight + engine.nozzle.weight + engine.plug.weight;
    return engineMass;
}

  deleteTest(id: number) {
    this.db.removeTest(id);
  }

  onTestChosen(test: Test) {
    this.db.loadGraph(test.id);
  }
}
