import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import { ProductDetail } from '../shared/product-detail';
import { ProductService } from '../shared/product.service';

import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {
  id:number;
  productDetail:ProductDetail[];
  errorMessage:string;
  sub:Subscription;
  sub2:Subscription;
  product_name:string;

  constructor(private route: ActivatedRoute, private product:ProductService, private location:Location) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.product_name = params['product_name'];
      this.getProductDetail();
  });
    
  }

  getProductDetail() {
    this.sub2 = this.product.getProductDetail(this.id)
    .subscribe(productDetail => this.productDetail = productDetail,
    error => this.errorMessage = <any> error);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub2.unsubscribe();
  }

  goBack() {
    this.location.back();
  }

  onClick(itemfromchild) {
    alert(itemfromchild);
  }

}
