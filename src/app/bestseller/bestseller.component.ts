import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-bestseller',
  templateUrl: './bestseller.component.html',
  styleUrls: ['./bestseller.component.css']
})
export class BestsellerComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit() {
    this.title.setTitle('สินค้า');
  }

}
