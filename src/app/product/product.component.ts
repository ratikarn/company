import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../shared/product.service';
import { Product } from '../shared/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: Product[];
  keywordFilter:string;
  
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProduct().subscribe(product => this.product = product);
  }

  onShowDetail(product:Product) {
    this.router.navigate(['/product', product.id, 'product_name', product.c_title]);
  }

}
