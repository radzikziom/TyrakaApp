import { Component, OnInit } from '@angular/core';
import { Nozzle } from 'src/app/shared/models/nozzle.model';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nozzle-upload',
  templateUrl: './nozzle-upload.component.html',
  styleUrls: ['./nozzle-upload.component.css']
})
export class NozzleUploadComponent implements OnInit {
  newNozzle: Nozzle;
  constructor(private database: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.newNozzle = new Nozzle();
  }

  onConfirm() {
    this.database.createNozzle(Object.assign({}, this.newNozzle));
    this.router.navigateByUrl('/engine-upload');
  }
}
