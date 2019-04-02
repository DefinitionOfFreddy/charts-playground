import { Component, OnInit, AfterViewInit } from "@angular/core";

import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);
import {Chart} from 'chart.js';
import * as Plotly from 'plotly.js-dist';
import { ComparaisonLibrairies } from './comparaison-librairies.service';




@Component({
  selector: "app-comparaison-librairies",
  templateUrl: './comparaison-librairies.component.html',
  styleUrls: ['./comparaison-librairies.component.css']
})
export class ComparaisonLibrairiesComponent implements AfterViewInit {
  idHighcharts = "comparisonHighchart";
  idChartJs = "comparisonChartJs";
  idPlotly = "comparisonPlotly";

  canvas: any;
  ctx: any;

  constructor(private comparaisonLibrairies: ComparaisonLibrairies) {}

  ngAfterViewInit() {

    this.comparaisonLibrairies.getPlotlyComparisonGraph().subscribe(
      plot => {
        Plotly.plot(this.idPlotly, plot.data, plot.layout);
        window.addEventListener('resize', () => Plotly.Plots.resize(this.idPlotly));
      }
    );


    this.comparaisonLibrairies.getHighchartsComparisonGraph().subscribe(
      option => {
        Highcharts.chart(this.idHighcharts, option);
      }
    );


    this.canvas = document.getElementById(this.idChartJs);
    this.ctx = this.canvas.getContext('2d');
    this.comparaisonLibrairies.getChartjsComparisonGraph().subscribe(
      chartObject => {
        const myChart = new Chart(this.ctx, chartObject);
      }
    );


  }

}
