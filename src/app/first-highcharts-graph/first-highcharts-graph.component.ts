import { Component, OnInit, AfterViewInit } from "@angular/core";
import { DataService } from '../data.service'
import * as Highcharts from "highcharts";

@Component({
  selector: "app-first-highcharts-graph",
  template: `
        <div id={{id}}>
        </div>
    `
})
export class FirstHighchartGraphComponent implements AfterViewInit {
  id = "firstchart";
  constructor(private dataService: DataService) {}

  ngAfterViewInit() {


    Highcharts.chart(this.id, this.dataService.getFirstChartCompleteOption());
  }
}
