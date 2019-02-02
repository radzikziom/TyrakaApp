import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';

import { SuiModule } from 'ng2-semantic-ui';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
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
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    TestUploadComponent,
    TestsComponent,
    EngineUploadComponent,
    EnginesComponent,
    TestGraphComponent,
    BodyUploadComponent,
    FuelUploadComponent,
    NozzleUploadComponent,
    PlugUploadComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SuiModule,
    FormsModule,
    NgxPaginationModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
