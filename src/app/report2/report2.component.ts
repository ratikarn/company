import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report2',
  templateUrl: './report2.component.html',
  styleUrls: ['./report2.component.css']
})
export class Report2Component implements OnInit {
  public pieChartLabels:string[];
  public pieChartData:number[];
  public pieChartType:string = 'pie';

  constructor() { }

  ngOnInit() {
    this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    this.pieChartData = [300, 500, 100];
  }

}
