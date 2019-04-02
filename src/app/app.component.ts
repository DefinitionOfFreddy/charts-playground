import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

enum CHARTS_OPTIONS {
  comparison = "Comparaison de librairies",
  first = "Premier graphe angular",
  firstServiceUse = "Utilisation du service",
  overload = "Surcharger la page",
  usePlugin = "Utiliser un plugin",
  addButton = "Ajout d'un bouton",
  highstock = "Graphe Highstock",
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  CHARTS_OPTIONS: typeof CHARTS_OPTIONS = CHARTS_OPTIONS;

  title = "Charts Playground";

  dropdownSettings: {};
  charts: FormControl;
  chartList: any[];



  constructor(
  ) { }
  ngOnInit() {
    this.charts = new FormControl([]);


    this.chartList = [
      CHARTS_OPTIONS.comparison,
      CHARTS_OPTIONS.first,
      CHARTS_OPTIONS.firstServiceUse,
      CHARTS_OPTIONS.usePlugin,
      CHARTS_OPTIONS.overload,
      CHARTS_OPTIONS.addButton,
      CHARTS_OPTIONS.highstock,
    ];

  }


  isSelected(graphName: any) {
    const selected = this.charts.value.find(element => {
      return element === graphName;
    });
    return selected !== undefined;
  }
}
