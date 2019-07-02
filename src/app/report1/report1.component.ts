import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.css']
})
export class Report1Component implements OnInit {
  barChartLabels:string[];
  barChartType:string = 'bar';
  barChartLegend:boolean = true;
  barChartData:any[];
  barChartOptions:any = {
    responsive: true,
    scales: {
      yAxes: [{
          ticks: {
            //max: 100,
            min: 0,
            stepSize: 10
          }
        }]
    }
  }

  constructor() { }

  ngOnInit() {
    this.barChartLabels = ['2006','2007','2008'];
    this.barChartData = [
      {data: [60, 45, 81], label: 'ข้าว'},
      {data: [30, 65, 40], label: 'น้ำตาล'}
    ]
  }

}
