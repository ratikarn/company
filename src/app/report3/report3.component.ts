import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report3',
  templateUrl: './report3.component.html',
  styleUrls: ['./report3.component.css']
})
export class Report3Component implements OnInit {
  options: Object;
  month: string[];
  series: Array<Object>;

  constructor() { }

  ngOnInit() {
    this.month = ['มกราคม', 'กุมภาพันธ์', 'มีนาคม'];
    this.series = [
      {
        name: 'ข้าว',
        data: [29.9, 71, 96]
      },
      {
        name: 'น้ำตาล',
        data: [40, 56.5, 86]
      }
    ];

    this.options = {
      chart: { type: 'line'  }, //type: column
      title: { text: 'รายงานยอดขายประจำปี 2560' },
      credits: { enabled: false },
      legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical',
        borderWidth: 2,
        borderRadius: 3
      },
      xAxis: {
        title: { text: 'เดือน' },
        categories: this.month
      },
      yAxis: {
        title: { text: 'ยอดขายรวม' }
      },
      series: this.series
    }

  }

}
