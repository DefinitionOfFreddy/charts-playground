import { Injectable } from '@angular/core';
import moment from 'moment'

export interface FirstChartJsonInterface {
  installation: number;
  manufacturing: number;
  salesAndDistribution: number;
  projectDevelopment: number;
  other: number;
}

export interface DataColorInterface {
  date: Date;
  rouge: number;
  verte: number;
  verteInf: number;
  verteSup: number;
  bleue: number;
  mauve ?: number;
}

@Injectable({ providedIn: 'root' })
export class DataService {

  public getFirstChartCompleteOption() {
    return {
      title: {
        text: "Solar Employment Growth by Sector, 2010-2016"
      },

      subtitle: {
        text: "Source: thesolarfoundation.com"
      },

      yAxis: {
        title: {
          text: "Number of Employees"
        }
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle"
      },

      credits: {
        enabled: true,
        href: 'https://www.highcharts.com/demo/line-basic',
        text: 'Source'
      },
      plotOptions: {
        series: {
          pointStart: 2010
        }
      },

      series: [
        {
          name: "Installation",
          data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
        },
        {
          name: "Manufacturing",
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
        },
        {
          name: "Sales & Distribution",
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
        },
        {
          name: "Project Development",
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
        },
        {
          name: "Other",
          data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
        }
      ],
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
      }
    };

  }

  getSeriesFirstServiceUse() {
    return [
      {
        name: "Installation",
        data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
      },
      {
        name: "Manufacturing",
        data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      },
      {
        name: "Sales & Distribution",
        data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      },
      {
        name: "Project Development",
        data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      },
      {
        name: "Other",
        data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
      }
    ];
  }

  getJsonFirstServiceUse(): FirstChartJsonInterface[] {
    return [
      {
        installation: 43934,
        manufacturing: 24916,
        salesAndDistribution: 11744,
        projectDevelopment: null,
        other: 12908
      },
      {
        installation: 52503,
        manufacturing: 24064,
        salesAndDistribution: 17722,
        projectDevelopment: null,
        other: 5948
      },
      {
        installation: 57177,
        manufacturing: 29742,
        salesAndDistribution: 16005,
        projectDevelopment: 7988,
        other: 8105
      },
      {
        installation: 69658,
        manufacturing: 29851,
        salesAndDistribution: 19771,
        projectDevelopment: 12169,
        other: 11248
      },
      {
        installation: 97031,
        manufacturing: 32490,
        salesAndDistribution: 20185,
        projectDevelopment: 15112,
        other: 8989
      },
      {
        installation: 119931,
        manufacturing: 30282,
        salesAndDistribution: 24377,
        projectDevelopment: 22452,
        other: 11816
      },
      {
        installation: 137133,
        manufacturing: 38121,
        salesAndDistribution: 32147,
        projectDevelopment: 34400,
        other: 18274
      },
      {
        installation: 154175,
        manufacturing: 40434,
        salesAndDistribution: 39387,
        projectDevelopment: 34227,
        other: 18111
      },
    ];
  }


  public getRandomData(start: Date, end: Date): DataColorInterface[] {
    const randomArray: any[] = [];
    let currentMoment;
    for (currentMoment = moment(start); currentMoment <= moment(end); currentMoment.add(1, 'days')) {

      const randomGreenValue = Math.random() * 10 + 5;
      randomArray.push({
        date: currentMoment.toDate(),
        mauve: Math.random() * 10 - 5,
        rouge: Math.random() * 2 - 1,
        verte: randomGreenValue,
        verteInf: randomGreenValue * 0.8,
        verteSup: randomGreenValue * 1.2,
        bleue: Math.random() + 6
      });
    }


    return randomArray;
  }

  public getComparaisonData() {
    return [
      { date: new Date('2016-1'), mauve: 0.73, verte: 4.42, verteInf: 2.31, verteSup: 6.53, rouge: 0.00, bleue: 3.70 },
      { date: new Date('2016-2'), mauve: 1.25, verte: 5.12, verteInf: 3.011, verteSup: 7.22, rouge: 0.08, bleue: 3.87 },
      { date: new Date('2016-3'), mauve: 2.55, verte: 6.45, verteInf: 4.34, verteSup: 8.56, rouge: 0.56, bleue: 3.90 },
      { date: new Date('2016-4'), mauve: -1.37, verte: 11.88, verteInf: 9.77, verteSup: 13.98, rouge: 0.03, bleue: 13.24 },
      { date: new Date('2016-5'), mauve: -1.55, verte: 14.81, verteInf: 12.70, verteSup: 16.91, rouge: 0.12, bleue: 16.36 },
      { date: new Date('2016-6'), mauve: -0.91, verte: 12.19, verteInf: 10.08, verteSup: 14.30, rouge: 0.00, bleue: 13.10 },
      { date: new Date('2016-7'), mauve: -0.67, verte: 7.93, verteInf: 5.82, verteSup: 10.03, rouge: 0.00, bleue: 8.59 },
      { date: new Date('2016-8'), mauve: 0.61, verte: 4.95, verteInf: 2.84, verteSup: 7.05, rouge: 0.75, bleue: 4.33 },
      { date: new Date('2016-9'), mauve: 0.43, verte: 4.37, verteInf: 2.26, verteSup: 6.47, rouge: 0.00, bleue: 3.94 },
      { date: new Date('2016-10'), mauve: -0.73, verte: 7.39, verteInf: 5.28, verteSup: 9.49, rouge: 0.00, bleue: 8.12 },
      { date: new Date('2016-11'), mauve: 1.84, verte: 15.55, verteInf: 13.44, verteSup: 17.66, rouge: 0.14, bleue: 13.72 },
      { date: new Date('2016-12'), mauve: 3.06, verte: 11.43, verteInf: 9.32, verteSup: 13.54, rouge: 0.00, bleue: 8.37 },
      { date: new Date('2017-1'), mauve: 2.66, verte: 6.67, verteInf: 4.86, verteSup: 9.08, rouge: 0.00, bleue: 4.32 },
      { date: new Date('2017-2'), mauve: 1.44, verte: 6.31, verteInf: 4.20, verteSup: 8.42, rouge: 0.00, bleue: 4.88 },
      { date: new Date('2017-3'), mauve: 1.29, verte: 9.82, verteInf: 7.71, verteSup: 11.92, rouge: 0.00, bleue: 8.53 },
      { date: new Date('2017-4'), mauve: 0.06, verte: 13.53, verteInf: 11.42, verteSup: 15.63, rouge: 0.00, bleue: 13.47 },
      { date: new Date('2017-5'), mauve: -1.66, verte: 18.49, verteInf: 16.38, verteSup: 20.6, rouge: 0.00, bleue: 20.16 },
      { date: new Date('2017-6'), mauve: 13.67, verte: 13.67, verteInf: 11.56, verteSup: 15.77, rouge: 0.25, bleue: 15.10 },
      { date: new Date('2017-7'), mauve: 6.60, verte: 6.60, verteInf: 4.49, verteSup: 8.71, rouge: 0.00, bleue: 6.36 },
      { date: new Date('2017-8'), mauve: 4.61, verte: 4.61, verteInf: 2.50, verteSup: 6.71, rouge: 0.07, bleue: 3.97 },
      { date: new Date('2017-9'), mauve: 3.83, verte: 3.83, verteInf: 1.72, verteSup: 5.93, rouge: 0.45, bleue: 2.50 },
      { date: new Date('2017-10'), mauve: 3.23, verte: 3.23, verteInf: 1.12, verteSup: 5.33, rouge: 0.00, bleue: 2.35 },
      { date: new Date('2017-11'), mauve: 3.22, verte: 3.22, verteInf: 1.11, verteSup: 5.32, rouge: 0.00, bleue: 2.10 },
      { date: new Date('2017-12'), mauve: 4.35, verte: 4.35, verteInf: 2.23, verteSup: 6.45, rouge: 0.16, bleue: 2.10 },
      { date: new Date('2018-1'), mauve: 5.21, verte: 5.21, verteInf: 3.10, verteSup: 7.31, rouge: 0.08, bleue: 2.82 },
    ];
  }

}