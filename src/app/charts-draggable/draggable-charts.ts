import { FirstChartJsonInterface } from '../data.service';
import { HighchartsService } from '../highcharts.service';
import * as _ from 'lodash';

export class DraggableCharts {
  private _highchartsOption: Highcharts.Options;
  constructor(private firstChartJsonInterfaceArray: FirstChartJsonInterface[]) {

    const installationData = [];
    const manufacturingData = [];
    const otherData = [];
    const projectDevelopmentData = [];
    const salesAndDistributionData = [];

    firstChartJsonInterfaceArray.forEach(
      data => {
        installationData.push(data.installation);
        manufacturingData.push(data.manufacturing);
        otherData.push(data.other);
        projectDevelopmentData.push(data.projectDevelopment);
        salesAndDistributionData.push(data.salesAndDistribution);
      }
    );

    const installationSerie = {
      name: "Installation",
      data: installationData,
      draggableY: true,
      cursor: 'ns-resize'
    };
    const manufacturingSerie = {
      name: "Manufacturing",
      data: manufacturingData
    };
    const salesAndDistributionSerie = {
      name: "Sales & Distribution",
      data: salesAndDistributionData
    };
    const projectDevelopmentSerie = {
      name: "Project Development",
      data: projectDevelopmentData
    };
    const otherSerie = {
      name: "Other",
      data: otherData
    };

    const serviceOption: Highcharts.Options = {
      title: {
        text: "Graphe avec une courbe modifiable"
      },
      chart: {
        zoomType: null,
      },
      subtitle: {
        text: "Drag & drop : installation"
      },

      yAxis: <Highcharts.AxisOptions>{
        title: {
          text: "Number of Employees"
        },
      },
      plotOptions: {
        series: {
          point: {
            events: {
              drag: function (e) {
                console.log(this.series.name + ' - ' + this.category + ' : ' + _.round(e.y, 2));
              }
            },
          }
        },
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle"
      },

      series: [
        installationSerie,
        otherSerie,
        salesAndDistributionSerie,
        projectDevelopmentSerie,
        manufacturingSerie
      ]
    }

    this._highchartsOption = _.merge(HighchartsService.getDefaultOptions(), serviceOption);
  }

  get highchartsOption(): Highcharts.Options {
    return this._highchartsOption;
  }


}