import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site-equipment-analytics',
  templateUrl: './site-equipment-analytics.component.html',
  styleUrls: ['./site-equipment-analytics.component.scss']
})
export class SiteEquipmentAnalyticsComponent implements OnInit {

  routeParams: any;

  id = 'chart1';
  width = '100%';
  height = 600;
  type = 'msline';
  dataFormat = 'json';
  dataSource;

  signalTypes = ['Siganal 1', 'Siganal 2', 'Siganal 3'];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.routeParams = this.route.snapshot.params;
    this.createData();
  }

  createData() {
    const days = Array.from({length: 24}, (v, k) => k + 1);

    this.dataSource = {
      chart: {
        caption: this.routeParams.equipName + ': Sensors graph',
        theme: 'fint',
        showvalues: 0,
        yaxisname: 'Temperature',
        xaxisname: 'Day'
      },
      categories: [{ category: days.map((item) => ({ label: item + 'h' })) }],
      dataset: this.signalTypes.map(signalType => {
        return {
          seriesname: signalType,
          data: days.map(value => ({value: Math.floor(Math.random() * 12) + 0  }))
        };
      })
    };
  }

}
