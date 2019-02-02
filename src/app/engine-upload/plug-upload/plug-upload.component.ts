import { Component, OnInit } from '@angular/core';
import { Plug } from 'src/app/shared/models/plug.model';
import { DatabaseService } from 'src/app/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plug-upload',
  templateUrl: './plug-upload.component.html',
  styleUrls: ['./plug-upload.component.css']
})
export class PlugUploadComponent implements OnInit {
  newPlug: Plug;

  constructor(private database: DatabaseService, private router: Router) { }

  ngOnInit() {
    this.newPlug = new Plug();
  }

  onConfirm() {
    this.database.createPlug(Object.assign({}, this.newPlug));
    this.router.navigateByUrl('/engine-upload');
  }
}
