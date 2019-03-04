import { Component, OnInit, ViewChild } from '@angular/core';
import { DatabaseService } from '../database.service';

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

  removeFuel(form: NgForm) {
    this.database.removeFuel(form.form.value.fuel.id);
  }

  removeNozzle(form: NgForm) {
    this.database.removeNozzle(form.form.value.nozzle.id);
  }

  removePlug(form: NgForm) {
    this.database.removePlug(form.form.value.plug.id);
  }

  onSubmit(form: NgForm) {
    let newEngine = new Engine(form.form.value.name, form.form.value.body, form.form.value.fuel, form.form.value.nozzle, form.form.value.plug);
    this.database.createEngine(newEngine);
    this.submitSwal.show();
    this.form.resetForm();
  }
}
