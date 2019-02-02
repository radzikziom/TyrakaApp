import { Component, OnInit } from '@angular/core';
import { Fuel } from 'src/app/shared/models/fuel.model';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fuel-upload',
  templateUrl: './fuel-upload.component.html',
  styleUrls: ['./fuel-upload.component.css']
})
export class FuelUploadComponent implements OnInit {

  constructor(private database: DatabaseService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let createdFuel = new Fuel(form.form.value.type, form.form.value.weight);
    this.database.createFuel(createdFuel);
    this.router.navigateByUrl('/engine-upload');
  }

}
