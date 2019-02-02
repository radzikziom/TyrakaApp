import { Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../database.service';

import { Fuel } from '../shared/models/fuel.model';
import { Nozzle } from '../shared/models/nozzle.model';
import { Plug } from '../shared/models/plug.model';
import { Body } from '../shared/models/body.model';
import { Engine } from '../shared/models/engine.model';
import { Parts } from '../shared/models/parts.model';
import { NgForm } from '@angular/forms';
import { SwalComponent } from '@toverux/ngx-sweetalert2';

@Component({
  selector: 'app-engine-upload',
  templateUrl: './engine-upload.component.html',
  styleUrls: ['./engine-upload.component.css']
})
export class EngineUploadComponent implements OnInit {
  parts: Parts;
  @ViewChild('submitSwal') private submitSwal: SwalComponent;
  @ViewChild('form') private form;

  selectedBody: Body;
  selectedFuel: Fuel;
  selectedNozzle: Nozzle;
  selectedPlug: Plug;
  newEngineName: string;

  constructor(private database: DatabaseService) { }
  
  ngOnInit() {
    this.getParts();
  }

  getParts() {
    this.database.parts.subscribe((data) => {
      this.parts = data;
    });
    this.database.loadParts();
  }
  
  removeBody(form: NgForm) {
    this.database.removeBody(form.form.value.body.id);
  }

  removeFuel() {
    this.database.removeFuel(this.selectedFuel.id);
  }

  removeNozzle() {
    this.database.removeNozzle(this.selectedNozzle.id);
  }

  removePlug() {
    this.database.removePlug(this.selectedPlug.id);
  }

  addEngine() {
    let createdEngine = new Engine(
      this.newEngineName,
      Object.assign({}, this.selectedBody),
      Object.assign({}, this.selectedFuel),
      Object.assign({}, this.selectedNozzle), 
      Object.assign({}, this.selectedPlug));
    this.database.createEngine(createdEngine);
  }

  onSubmit(form: NgForm) {
    let newEngine = new Engine(form.form.value.name, form.form.value.body, form.form.value.fuel, form.form.value.nozzle, form.form.value.plug);
    console.log(newEngine);
    this.database.createEngine(newEngine);
    this.submitSwal.show();
    this.form.resetForm();
  }

}
