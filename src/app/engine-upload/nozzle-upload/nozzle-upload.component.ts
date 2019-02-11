import { Component, OnInit } from '@angular/core';
import { Nozzle } from 'src/app/shared/models/nozzle.model';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-nozzle-upload',
  templateUrl: './nozzle-upload.component.html',
  styleUrls: ['./nozzle-upload.component.css']
})
export class NozzleUploadComponent implements OnInit {
  constructor(private database: DatabaseService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let createdNozzle = new Nozzle(form.form.value.material, form.form.value.weight)
    this.database.createNozzle(createdNozzle);
    this.router.navigateByUrl('/engine-upload');
  }
}
