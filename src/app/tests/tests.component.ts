import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Test } from '../shared/models/test.model';

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
    let height = speed ** 2 / (2 * this.g);
    return height;
  }

  deleteTest(id: number) {
    this.db.removeTest(id);
  }
}
