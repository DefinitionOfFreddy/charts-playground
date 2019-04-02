import { FirstChartJsonInterface } from '../data.service';
import { HighchartsService } from '../highcharts.service';
import * as _ from 'lodash';

export class ChartsButtonOption {
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
      data: installationData
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
        text: "Graphe avec un bouton plein écran"
      },
      legend: {
        layout: "vertical",
        align: "right",
        verticalAlign: "middle"
      },

      exporting: <Highcharts.ExportingOptions> {
        allowHTML: true,
        buttons: {
          contextButton: {
            enabled: false
          },

          fullscreenButton: {
            text: 'Plein écran',
            className: 'fullscreenGraphButton',

            onclick: function () {
              const chartObject: Highcharts.ChartObject = this;

              const button = this.exportSVGElements[0];
              const newText = button.attr('text').textStr !== 'Plein écran' ? 'Plein écran' : 'Réduire';
              button.attr({
                text: newText,
              });
              button.element.classList.toggle('highcharts-button-hover');

              const idContainer = chartObject.options.chart.renderTo.toString();
              document.getElementById(idContainer).classList.toggle('modal');
              chartObject.reflow();
            }
          }
        }
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