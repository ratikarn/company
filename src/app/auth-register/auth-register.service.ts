import { Injectable } from '@angular/core';
import { Http, Response, Headers} from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthRegisterService {

  constructor(public http: Http) { }

  register(email, password):Observable<boolean>  {

      let myHeader = new Headers();
      myHeader.append('Content-Type','application/json');

      let data = {
        'client_id': 'sBr3kJwBRUEdqLnoH2bhQxiRJc4EABe3',
        'email':  email,
        'password': password,
        'connection': 'Username-Password-Authentication'
      }
      
      return this.http.post('https://dev-fb8esb7u.auth0.com/dbconnections/signup',data, { headers:myHeader })
      .map((res: Response) => {
          let data = res.json();
          if (data) {
            return true;
          } else {
            return false;
          }
      }).catch(this.handleError);
  }

  private handleError(error:any) {
    console.log(error);
    return Observable.throw(error.json() || 'Server error');
  }

}
