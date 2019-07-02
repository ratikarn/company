import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-rate',
  templateUrl: './product-rate.component.html',
  styleUrls: ['./product-rate.component.css']
})
export class ProductRateComponent implements OnInit {
  @Input() item:number;
  @Output() itemClick:EventEmitter<string> = new EventEmitter<string>();
  rateText:string;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges():void {
    if(this.item >= 10000) {
      this.rateText = 'นิยมมาก';
    } else {
      this.rateText = 'นิยมน้อย';
    }
  }

  onclick():void {
    this.itemClick.emit('จำนวนการดู ' + this.item);
  }

}
