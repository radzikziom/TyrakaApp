import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { GraphService } from '../graph.service';
import { generate } from 'rxjs';

@Component({
  selector: 'app-test-graph',
  templateUrl: './test-graph.component.html',
  styleUrls: ['./test-graph.component.css']
})
export class TestGraphComponent implements OnInit {
  chart;
  timestamps;
  thrustReads;
  tempReads;

  constructor(private graphData: GraphService) { }

  ngOnInit() {
    this.tempReads = this.graphData.getTempReads();
    this.thrustReads = this.graphData.getThrustReads();
    this.timestamps = this.graphData.getTimeStamps()

    this.generateGraph();
  }
  
  generateGraph() {
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.timestamps,
        datasets: [
          {
            label: 'Thrust',
            data: this.thrustReads,
            backgroundColor: '#F78E69', 
            borderColor: '#F78E69',
            fill: false
          },
          {
            label: 'Temperature',
            data: this.tempReads,
            backgroundColor: '#F7EF99', 
            borderColor: '#F7EF99',
            fill: false
          }
        ]
      }
    });
  }
}
