import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {DataService} from '../data.service';
import * as Plotly from 'plotly.js-dist';
import moment from 'moment';


@Injectable({ providedIn: 'root' })
export class ComparaisonLibrairies {

  constructor(private dataService: DataService) { 
  }

  getHighchartsComparisonGraph(): Observable<any> {

    const courbeMauveData = [];
    const courbeVerteData = [];
    const courbeVerteICData = [];
    const courbeRougeData = [];
    const courbeBleueData = [];

    const dataArray = this.dataService.getComparaisonData();

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

    const options = {
      title: {
        text: "Graphe Highcharts avec une courbe mauve, une courbe verte, une courbe rouge et une courbe bleue"
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime',
        gridLineWidth: 2,
      },
      yAxis: {
        title: {
          text: "unité",
        },
        gridLinWidth: 2,
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle"
      },
      chart: {
        zoomType: 'xy',
        resetZoomButton: {
          position: {
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 0,
          },
          relativeTo: 'plot'
        },
      },
      tooltip: {
        crosshairs: true,
        shared: true,
        valueDecimals: 2,
        dateTimeLabelFormats: {
          day: '%d/%m/%Y',
          hour: '%d/%m/%Y  %H:%M'
        }
      },
      series: [
        courbeMauve,
        courbeVerte,
        courbeVerteIC,
        courbeRouge,
        courbeBleue,
      ],

      responsive: {
        rules: [{
          condition: {
            maxWidth: 600
          },
          chartOptions: {
            legend: {
              align: 'center',
              verticalAlign: 'bottom',
              layout: 'horizontal'
            },
            yAxis: {
              labels: {
                align: 'left',
                x: 0,
                y: -5
              },
              title: {
                text: null
              }
            },
            subtitle: {
              text: null
            },
            credits: {
              enabled: false
            }
          }
        }]
      }
    };

    return of(options);



  }


  getPlotlyComparisonGraph(): Observable<{ data: any, layout: any }> {

    const plotlyData = [];
    const sharedXAxis = []
    const courbeMauveData = [];
    const courbeVerteData = [];
    const courbeVerteLowData = [];
    const courbeVerteHighData = [];
    const courbeRougeData = [];
    const courbeBleueData = [];
    const dataArray = this.dataService.getComparaisonData();


    for (const data of dataArray) {
      const date = moment(data.date, "YYYY-M");

      sharedXAxis.push(date.format('YYYY-MM'));

      courbeMauveData.push(data.mauve);
      courbeVerteData.push(data.verte);
      courbeVerteLowData.push(data.verteInf);
      courbeVerteHighData.push(data.verteSup);
      courbeRougeData.push(data.rouge);
      courbeBleueData.push(data.bleue);

    }

    const trace1: Partial<Plotly.ScatterData> = {
      type: 'scatter',
      mode: 'lines',
      name: 'Courbe bleue',
      x: sharedXAxis,
      y: courbeBleueData,
      line: { color: '#00BFFF' },
    };

    plotlyData.push(trace1);

    const trace2: Partial<Plotly.ScatterData> = {
      type: 'scatter',
      mode: 'lines',
      name: 'Courbe rouge',
      x: sharedXAxis,
      y: courbeRougeData,
      line: { color: '#FF0000' }
    };
    plotlyData.push(trace2);

    const trace29 = {
      type: 'scatter',
      mode: 'lines',
      x: sharedXAxis,
      name: 'Intervalle de confiance: borne inférieure',
      showlegend: true,
      y: courbeVerteLowData,
      line: { color: 'transparent' },
      fillcolor: 'rgba(0,176,246,0.2)',
      fill: 'tonexty',
      //hoverinfo: 'none',
    };

    const trace31 = {
      type: 'scatter',
      mode: 'lines',
      x: sharedXAxis,
      name: 'Intervalle de confiance: borne supérieure',
      showlegend: true,
      y: courbeVerteHighData,
      line: { color: 'transparent' },
      // hoverinfo: 'none',
    };



    const trace30: Partial<Plotly.ScatterData> = {
      type: 'scatter',
      mode: 'lines',
      name: 'Courbe verte',
      x: sharedXAxis,
      y: courbeVerteData,
      line: { color: '#ADFF2F' }
    };
    plotlyData.push(trace30);
    plotlyData.push(trace31);
    plotlyData.push(trace29);

    const trace4: Partial<Plotly.ScatterData> = {
      type: 'scatter',
      mode: 'lines',
      name: 'Courbe mauve',
      x: sharedXAxis,
      y: courbeMauveData,
      line: { color: '#4169E1' }
    };
    plotlyData.push(trace4);


    const plotlyLayout = {
      title: 'Graphe plotly avec une courbe mauve, une courbe verte, une courbe rouge et une courbe bleue',
      margin: {},
      autosize: true,
      xaxis: {
        nticks: sharedXAxis.length,
      },
      yaxis: {
      }
    };

    return of({
      data: plotlyData,
      layout: plotlyLayout
    });
  }

  getChartjsComparisonGraph(): Observable<any> {

    const courbeMauveData = [];
    const courbeVerteData = [];
    const courbeVerteLowData = [];
    const courbeVerteHighData = [];
    const courbeRougeData = [];
    const courbeBleueData = [];
    const sharedXAxis = []
    const dataArray = this.dataService.getComparaisonData();

    for (const data of dataArray) {
      //const date = new Date(data.date).valueOf();
      const date = moment(data.date, "YYYY-M");

      sharedXAxis.push(date.format('YYYY-MM'));
      courbeMauveData.push(data.mauve);
      courbeVerteData.push(data.verte);
      courbeVerteLowData.push(data.verteInf);
      courbeVerteHighData.push(data.verteSup);
      courbeRougeData.push(data.rouge);
      courbeBleueData.push(data.bleue);

    }
    const chartObject = {
      type: 'line',
      data: {
          labels: sharedXAxis,
          datasets: [{
            type: 'line',
            label: 'Courbe bleue',
            data: courbeBleueData,
            borderColor: "#00BFFF",
            fill: false
          },{
            type: 'line',
            label: 'Courbe mauve',
            data: courbeMauveData,
            borderColor: "#4169E1",
            fill: false
          },{
            type: 'line',
            label: 'Courbe rouge',
            data: courbeRougeData,
            borderColor: "#FF0000",
            fill: false
          },{
            type: 'line',
            label: 'Courbe verte',
            data: courbeVerteData,
            borderColor: "#ADFF2F",
            fill: false
          },
          {
            type: 'line',
            label: 'IC borne inférieure',
            data: courbeVerteLowData,
            backgroundColor: "rgba(0,176,246,0.2)",
            fill: false
          },
          {
            type: 'line',
            label: 'IC borne supérieure',
            data: courbeVerteHighData,
            backgroundColor: "rgba(0,176,246,0.2)",
            fill: 4
          }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: 'Graphe chart.js avec une courbe mauve, une courbe verte, une courbe rouge et une courbe bleue'
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        xAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'Date'
						},
						ticks: {
							major: {
								fontStyle: 'bold',
								fontColor: '#FF0000'
							}
						}
					}],
					yAxes: [{
						display: true,
						scaleLabel: {
							display: true,
							labelString: 'value'
						}
					}]
      } 

    }
    console.log(chartObject);
    return of(chartObject);
  }
} 