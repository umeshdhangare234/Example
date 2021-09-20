import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
// import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
// import { ToyListComponent } from './toy-list/toy-list.component';
// import { DollsComponent } from './dolls/dolls.component';
// import { CarsComponent } from './cars/cars.component';
// import { EducationalComponent } from './educational/educational.component';
// import { CreativeComponent } from './creative/creative.component';
// import { ElectronicComponent } from './electronic/electronic.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { AnimalsComponent } from './animals/animals.component';
@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent
    // ToyListComponent,
    // DollsComponent,
    // CarsComponent,
    // EducationalComponent,
    // CreativeComponent,
    // ElectronicComponent,
    // AnimalsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // DataTablesModule,
    HttpClientModule,
    FormsModule,
    NgbModule
    // DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
