import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Engine } from '../shared/models/engine.model';

@Component({
  selector: 'app-engines',
  templateUrl: './engines.component.html',
  styleUrls: ['./engines.component.css']
})
export class EnginesComponent implements OnInit {
  engines: Engine[];

  constructor(private db: DatabaseService) { }

  ngOnInit() {
    this.db.engines.subscribe((data) => {
      this.engines = data;
    })
    this.db.loadEngines();
  }

  public deleteEngine(id: number) {
    this.db.removeEngine(id);
  }

}
