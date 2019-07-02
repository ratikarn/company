import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx'; //import all
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from './product';
import { ProductDetail } from './product-detail';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  getProduct():Observable<Product[]> {
    return this.http.get('https://codingthailand.com/api/get_courses.php')
    .map((res:Response) => <Product[]> res.json())
    .catch(this.handelError);
  }

  getProductDetail(id:number):Observable<ProductDetail[]> {
    return this.http.get('https://codingthailand.com/api/get_course_detail.php?course_id=' + id)
    .map((res:Response) => <ProductDetail[]> res.json())
    .catch(this.handelError);
  }

  private handelError(error:any) {
    return Observable.throw(error.json() || 'Server error');
  }

}
