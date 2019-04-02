import { Injectable } from '@angular/core';

import * as Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsNoDataToDisplay from 'highcharts/modules/no-data-to-display';
import HighchartsDraggablePoint from 'highcharts-draggable-points';
import HighchartsBoost from 'highcharts/modules/boost';
HighchartsBoost(Highcharts);

HighchartsMore(Highcharts);
HighchartsExporting(Highcharts);
HighchartsNoDataToDisplay(Highcharts);
HighchartsDraggablePoint(Highcharts);



@Injectable({ providedIn: 'root' })
export class HighchartsService {
  constructor() {
    Highcharts.setOptions({
      lang: {
        loading: 'Chargement ...',
        months: [
          'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
          'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
        ],
        weekdays: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
        shortMonths: ['jan', 'fév', 'mar', 'avr', 'mai', 'juin', 'juil', 'aoû', 'sep', 'oct', 'nov', 'déc'],
        downloadPNG: 'Télécharger en PNG',
        downloadJPEG: 'Télécharger en JPEG',
        downloadPDF: 'Télécharger en PDF',
        downloadSVG: 'Télécharger en SVG',
        thousandsSep: ' ',
        decimalPoint: ',',
        noData: 'Pas de données à afficher'
      },
      time: {
        timezoneOffset: new Date().getTimezoneOffset()
      }
    });
  }

  static getDefaultOptions(): Highcharts.Options {

    const options = {
      title: <Highcharts.TitleOptions>{
        
        widthAdjust: -200,
      },

      boost: {
        enable: true,
        useGPUTranslations: true,
        usePreAllocated: true
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

      chart: {
        zoomType: 'xy',
        resetZoomButton: {
          position: {
            align: 'right',
            verticalAlign: 'top',
            x: -5,
            y: 5,
          },
          relativeTo: 'chart'
        },
      },

      credits: {
        enabled: false
      },

      xAxis: {
        // type: 'datetime',
        gridLineWidth: 2,
        dateTimeLabelFormats: {
          day: '%d/%m/%y',
          month: '%b %Y'
        }
      },

      yAxis: {
        gridLineWidth: 2,
        reversedStacks: false,
        title: {
          text: '',
        },
      },

      navigation: {
        buttonOptions: {
          align: 'left'
        }
      },
      noData: {
        position: {
          verticalAlign: 'bottom'
        }
      },
      responsive: {
        rules: [{
          condition: {
            maxWidth: 500
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
      },
    };

    return options;
  }

  drawChartFromOptions(id: string, options: Highcharts.Options): Highcharts.ChartObject {
    if (!options.chart) {
      options.chart = {}
    }
    options.chart.renderTo = id;
    let chart: Highcharts.ChartObject = null;
    try {
      if (document.getElementById(id)) {
        chart = new Highcharts.Chart(options);
      }
    } catch (e) {
      console.log('We have a problem !');
    } finally {
      return chart;
    }
  }


}