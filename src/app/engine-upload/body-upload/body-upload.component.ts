import { Component, OnInit } from '@angular/core';
import { Body } from 'src/app/shared/models/body.model';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-body-upload',
  templateUrl: './body-upload.component.html',
  styleUrls: ['./body-upload.component.css']
})
export class BodyUploadComponent implements OnInit {

  constructor(private database: DatabaseService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let newBody = new Body(form.form.value.material, form.form.value.height, form.form.value.diameter, form.form.value.weight);
    this.database.createBody(newBody);
    this.router.navigateByUrl('/engine-upload');
  }
}
