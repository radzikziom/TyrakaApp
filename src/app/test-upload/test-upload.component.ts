import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Engine } from '../shared/models/engine.model';
import { Test } from '../shared/models/test.model';
import { Router } from '@angular/router';
import { GraphService } from '../graph.service';

@Component({
  selector: 'app-test-upload',
  templateUrl: './test-upload.component.html',
  styleUrls: ['./test-upload.component.css']
})
export class TestUploadComponent implements OnInit {
  engines: Engine[];
  selectedEngine: Engine;
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

  onUpload() {
    let results;
    let fileReader = new FileReader();
    fileReader.onload = () => {
      results = JSON.parse(fileReader.result.toString());
      this.handleTest(results);
    }
    fileReader.readAsText(this.selectedFile);
  }

  handleTest(result) {
    let test = this.calculateResults(result);
    this.database.createTest(test);
    this.router.navigateByUrl('/test-graph');
  }

  calculateResults(results: { thrust: number, temp: number, time: number }[] ) {
    let borderVal = 0.8;
    let beginIdx = [];
    let endIdx = [];
    let thrustSum = 0;
    let timeSum = 0;
    let idxSum = 0;

    let tempReads = [];
    let thrustReads = [];
    let timeReads= [];

    for (let line of results) {
      tempReads.push(line.temp);
      thrustReads.push(line.thrust);
      timeReads.push(line.time/1000);
    }  

    // Calculate specific impulse
    for (var i = 0; i < thrustReads.length; i++) {
      if (thrustReads[i] > borderVal && beginIdx.length == endIdx.length) {
          beginIdx.push(i);
          thrustSum += thrustReads[i];
      } else if (thrustReads[i] > borderVal) {
          thrustSum += thrustReads[i];
      } else if (beginIdx.length > endIdx.length) {
          endIdx.push(i-1);
      }
    }

    for (var i = 0; i < beginIdx.length; i++) {
      timeSum += timeReads[endIdx[i]] - timeReads[beginIdx[i]];
      idxSum += endIdx[i] - beginIdx[i] + 1;
    }

    // Calculate max thrust
    let maxThrust = 0;
    for(var i=1; i < thrustReads.length; i++){
        if(thrustReads[i] > maxThrust){
            maxThrust = thrustReads[i];   
        }
    }

    this.graphData.updateGraph(tempReads, thrustReads, timeReads);

    let specificImpuls = (10 * (thrustSum / idxSum) * timeSum ) / this.selectedEngine.fuel.weight;
    
    let test = new Test(this.selectedEngine, timeSum, maxThrust * 10, specificImpuls);

    return test;    
  }
}
