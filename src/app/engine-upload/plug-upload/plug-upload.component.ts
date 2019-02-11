import { Component, OnInit } from '@angular/core';
import { Plug } from 'src/app/shared/models/plug.model';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-plug-upload',
  templateUrl: './plug-upload.component.html',
  styleUrls: ['./plug-upload.component.css']
})
export class PlugUploadComponent implements OnInit {
  constructor(private database: DatabaseService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let createdPlug = new Plug(form.form.value.material, form.form.value.weight);
    this.database.createPlug(createdPlug);
    this.router.navigateByUrl('/engine-upload');
  }
}
