import { Component, OnInit, AfterViewInit } from "@angular/core";
import { DataService } from '../data.service';
import Highstock from 'highcharts/highstock';
import HighchartsMore from 'highcharts/highcharts-more';

HighchartsMore(Highstock);

@Component({
  selector: "app-highstock-example",
  template: `
        <div id={{id}}>
        </div>
    `,
  styles: ['div{height: 600px;}']
})
export class HighstockExampleComponent implements AfterViewInit {

  id = 'highstock-chart';

  constructor(private dataService: DataService) { }

  ngAfterViewInit() {

    Highstock.stockChart(this.id, this.getStockOption());

  }


  private getStockOption() {

    const courbeMauveData = [];
    const courbeVerteData = [];
    const courbeVerteICData = []; 
    const courbeRougeData = [];
    const courbeBleueData = [];

    const dataArray = this.dataService.getRandomData(new Date(1900, 0, 1), new Date(2018, 0, 1));

    for (const data of dataArray) {
      const date = new Date(data.date).valueOf();
      courbeMauveData.push([date, data.mauve]);
      courbeVerteData.push([date, data.verte]);
      courbeVerteICData.push([date, data.verteInf, data.verteSup]);
      courbeRougeData.push([date, data.rouge]);
      courbeBleueData.push([date, data.bleue]);

    }

    const courbeMauve = {
      name: 'Courbe mauve',
      data: courbeMauveData,
      color: '#4169E1'
    }

    const courbeVerte = {
      name: 'Courbe verte',
      id: 'verte',
      data: courbeVerteData,
      color: '#ADFF2F'
    }

    const courbeVerteIC = {
      name: 'Intervalle de confiance',
      data: courbeVerteICData,
      marker: {
        enabled: false
      },
      type: 'arearange',
      linkedTo: 'verte',
      lineWidth: 0,
      fillOpacity: 0.2,
      zIndex: -1,
      color: 'rgb(0,176,246)'
    }

    const courbeRouge = {
      name: 'Courbe rouge',
      data: courbeRougeData,
      color: '#FF0000',
      marker: {
        enabled: false
      }
    }

    const courbeBleue = {
      name: 'Courbe bleue',
      data: courbeBleueData,
      color: '#00BFFF',
      marker: {
        enabled: false
      }
    }

    const stockOptions = {
      rangeSelector: {
        selected: 1
      },
      chart: {
        zoomType: 'xy'
      },

      title: {
        text: 'Highstock chart avec beaucoup de données'
      },

      legend: {
        enabled: true,
      },

      xAxis: {
        scrollbar: {
          enabled: true,
          showFull: false
        },
      },
      yAxis: {
        scrollbar: {
          enabled: true,
          showFull: false
        }
      },

      tooltip: {
        crosshairs: true,
        split: false,
        shared: true,
        valueDecimals: 2,
        dateTimeLabelFormats: {
          day: '%d/%m/%Y',
          hour: '%d/%m/%Y  %H:%M'
        }
      },

      series: [
        courbeMauve,
        courbeBleue,
        courbeRouge,
        courbeVerte,
        courbeVerteIC,
      ]
    }
    return stockOptions;

  }

}
