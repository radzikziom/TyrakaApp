import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Engine } from '../shared/models/engine.model';
import { Test } from '../shared/models/test.model';
import { Router } from '@angular/router';
import { GraphService } from '../graph.service';
import { NgForm } from '@angular/forms';
import { Result } from '../shared/models/results.model';

@Component({
  selector: 'app-test-upload',
  templateUrl: './test-upload.component.html',
  styleUrls: ['./test-upload.component.css']
})
export class TestUploadComponent implements OnInit {
  engines: Engine[];
  selectedFile;

  constructor(private database: DatabaseService, private router: Router, private graphData: GraphService) { }

  ngOnInit() {
    this.database.engines.subscribe((data) => {
      this.engines = data;
    });
    this.database.loadEngines();
  }

  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit(form: NgForm) {
    let results;
    let fileReader = new FileReader();
    fileReader.onload = () => {
      results = JSON.parse(fileReader.result.toString());
      this.calculateResults(results, form.form.value.engine);
    }
    fileReader.readAsText(this.selectedFile);
  }

  calculateResults(results: Result[], engine: Engine) {
    let borderVal = 0.8;

    let tempReads = [];
    let thrustReads = [];
    let timeReads= [];

    // Get results without unimportatnt ones
    for (let line of results) {
      if (line.thrust > borderVal) {
        tempReads.push(line.temp);
        thrustReads.push(line.thrust);
        timeReads.push(line.time/1000);
      }
    }  

    // Filter results
    let filteredResults = results.filter((result) => {
      return result.thrust > borderVal;
    });

    // Calculate specific impulse
    let thrustSum = thrustReads.reduce((a, b) => { return a + b; }, 0);
    let timeSum = timeReads.slice(-1)[0] - timeReads[0];
    let idxSum = thrustReads.length;

    let specificImpuls = (10 * (thrustSum / idxSum) * timeSum ) / engine.fuel.weight;

    // Calculate max thrust
    let maxThrust = 0;
    for(var i=1; i < thrustReads.length; i++){
        if(thrustReads[i] > maxThrust){
            maxThrust = thrustReads[i];   
        }
    }

    this.graphData.updateGraph(tempReads, thrustReads, timeReads);

    let test = new Test(engine, timeSum, maxThrust * 10, specificImpuls);

    this.database.createTest(test, filteredResults);

    this.router.navigateByUrl('/test-graph');
  }
}
