import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx'; //import all
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Product } from './product';

@Injectable()
export class ProductService {

  constructor(private http:Http) { }

  getProduct():Observable<Product[]> {
    return this.http.get('https://codingthailand.com/api/get_courses.php')
    .map((res:Response) => <Product[]> res.json())
    .catch(this.handelError);
  }

  private handelError(error:any) {
    return Observable.throw(error.json() || 'Server error');
  }

}
