import { Component, OnInit, AfterViewInit } from "@angular/core";
import { HighchartsService } from '../highcharts.service';
import { DataService } from '../data.service';
import { ChartsButtonOption } from './charts-button-option';


@Component({
  selector: "app-ajout-bouton",
  template: `
        <div id={{id}} class="graphDefaultClass">
        </div>
    `
})
export class AjoutBoutonComponent implements AfterViewInit {
  id = "charts-with-button";
  constructor(
    private highchartsService: HighchartsService,
    private dataService: DataService
  ) {}

  ngAfterViewInit() {
    const datas = this.dataService.getJsonFirstServiceUse();
    const chartsButton = new ChartsButtonOption(datas);
    this.highchartsService.drawChartFromOptions(this.id, chartsButton.highchartsOption);
  }
}
