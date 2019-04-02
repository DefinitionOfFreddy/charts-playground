import { DataColorInterface } from '../data.service';

export class SurchargeGraphOption {
  private _highchartsOption: Highcharts.Options;
  constructor(private dataColorArray: DataColorInterface[]) {

    const courbeMauveData = [];
    const courbeVerteData = [];
    const courbeVerteICData = [];
    const courbeRougeData = [];
    const courbeBleueData = [];


    dataColorArray.forEach(
      data => {
        const dateValue = data.date.valueOf();
        courbeMauveData.push([dateValue, data.mauve]);
        courbeVerteData.push([dateValue, data.verte]);
        courbeVerteICData.push([dateValue, data.verteInf, data.verteSup]);
        courbeRougeData.push([dateValue, data.rouge]);
        courbeBleueData.push([dateValue, data.bleue]);
      }
    );

    const courbeMauve: Highcharts.SeriesOptions = {
      name: 'Courbe mauve',
      data: [
        [123456, 12]
      ],
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

    const serviceOption: Highcharts.Options = {
      title: {
        text: "Surcharger la page"
      },

      subtitle: {
        text: "voir code source"
      },

      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle"
      },

      chart: {
        type: 'area',
      },

      boost: {
        enabled: false
      },

      xAxis: {
        type: 'datetime',
      },

      plotOptions: {
        area: {
          stacking: 'normal',
          lineColor: '#666666',
          lineWidth: 1,
          marker: {
            lineWidth: 1,
            lineColor: '#666666'
          }
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

    this._highchartsOption = serviceOption;
  }

  get highchartsOption(): Highcharts.Options {
    return this._highchartsOption;
  }


}