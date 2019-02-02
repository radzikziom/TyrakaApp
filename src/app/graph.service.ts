import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GraphService {
  tempReads = [];
  thrustReads = [];
  timestamps = [];

  constructor() { }

  getTempReads() {
    return this.tempReads;
  }

  getThrustReads() {
    return this.thrustReads;
  }

  getTimeStamps() {
    return this.timestamps;
  }

  updateGraph(tempReads: number[], thrustReads: number[], timestams: number[]) {
    this.tempReads = tempReads.map((value) => { return value - 272; });
    this.thrustReads = thrustReads;
    this.timestamps = timestams;
  }
}
