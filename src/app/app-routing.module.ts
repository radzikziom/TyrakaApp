import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestUploadComponent } from './test-upload/test-upload.component';
import { TestsComponent } from './tests/tests.component';
import { EngineUploadComponent } from './engine-upload/engine-upload.component';
import { EnginesComponent } from './engines/engines.component';
import { TestGraphComponent } from './test-graph/test-graph.component';
import { BodyUploadComponent } from './engine-upload/body-upload/body-upload.component';
import { FuelUploadComponent } from './engine-upload/fuel-upload/fuel-upload.component';
import { NozzleUploadComponent } from './engine-upload/nozzle-upload/nozzle-upload.component';
import { PlugUploadComponent } from './engine-upload/plug-upload/plug-upload.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'test-upload', component: TestUploadComponent },
  { path: 'tests', component: TestsComponent },
  { path: 'engines', component: EnginesComponent },
  { path: 'engine-upload', component: EngineUploadComponent },
  { path: 'engine-upload/body', component: BodyUploadComponent },
  { path: 'engine-upload/fuel', component: FuelUploadComponent },
  { path: 'engine-upload/nozzle', component: NozzleUploadComponent },
  { path: 'engine-upload/plug', component: PlugUploadComponent },
  { path: 'test-graph', component: TestGraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
