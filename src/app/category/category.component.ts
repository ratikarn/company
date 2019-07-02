import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  product:Array<Product>;

  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(
      product => this.product = product
    );
  }

  selectProduct(event:Event, product:Product):void {
    this.router.navigate(['/product',product.id, 'product_name',product.c_title]);
    event.preventDefault();
  }

}
