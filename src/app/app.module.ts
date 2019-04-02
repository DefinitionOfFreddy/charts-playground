import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from "@angular/flex-layout";

import { QRCodeModule } from 'angular2-qrcode';

import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialImportModule } from './material-import.module';

const Highcharts = import ('highcharts');
import 'highcharts/highcharts-more';


import { AppComponent } from './app.component';
import { FirstHighchartGraphComponent } from "./first-highcharts-graph/first-highcharts-graph.component";
import { ChartsUsingServiceComponent } from "./charts-using-service/charts-using-service.component";
import { ComparaisonLibrairiesComponent } from "./comparaison-librairies/comparaison-librairies.component";
import { OverloadGraphsComponent } from "./overload-graphs/overload-graphs.component";
import { ChartsDraggableComponent } from "./charts-draggable/charts-draggable.component";
import { AjoutBoutonComponent } from "./ajout-bouton/ajout-bouton.component";
import { HighstockExampleComponent } from './highstock-example/highstock-example.component';


@NgModule({
  imports:      [ 
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule.forRoot(),
    FlexLayoutModule,
    BrowserAnimationsModule,
    MaterialImportModule,
    QRCodeModule
  ],
  declarations: [ 
    AppComponent,
    FirstHighchartGraphComponent,
    ComparaisonLibrairiesComponent,
    ChartsUsingServiceComponent,
    OverloadGraphsComponent,
    HighstockExampleComponent,
    ChartsDraggableComponent,
    AjoutBoutonComponent,
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
