import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import 'rxjs/Rx'; //import all
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { News } from './news';

@Injectable()

export class NewsService {
  apiKey:string = 'abcd82c1a29747d0ba58c2003b42eb7d';
  source:string = 'techcrunch';
  sortBy = 'top';
  apiURL:string = `https://newsapi.org/v1/articles?source=${this.source}&sortBy=${this.sortBy}&apiKey=${this.apiKey}`;

  constructor(private http: Http) { }
    // getNews() {
    //   return this.http.get(this.apiURL).map((res:Response) => res.json().articles).catch((error:any) => Observable.throw(error.json().message || 'Server error'));
    // }

    getNews():Observable<News[]> {
      return this.http.get(this.apiURL)
      .map((res:Response) => <News[]> res.json().articles)
      .catch(this.handelError);
    }

    private handelError(error:any) {
      return Observable.throw(error.json().message || 'Server error');
    }
    
}
