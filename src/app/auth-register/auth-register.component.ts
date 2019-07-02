import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthRegisterService } from './auth-register.service';

@Component({
  selector: 'app-auth-register',
  templateUrl: './auth-register.component.html',
  styleUrls: ['./auth-register.component.css'],
  providers: [AuthRegisterService]
})
export class AuthRegisterComponent implements OnInit {
  loading:boolean = false;
  isError:boolean = false;
  errorMessage:any;

  constructor(private auth:AuthRegisterService, private route:Router) { }

  ngOnInit() {
  }

  register(form:any) {
     this.loading = true;
     this.auth.register(form.email,form.password).subscribe(
       result => {
         if (result === true) {
           this.loading = false;
           this.route.navigate(['/']);
           //this.route.navigate(['/login']);
           console.log('insert ok');
         }
       },
       error => {
         this.errorMessage = <any>error;
         this.loading = false;
         this.isError = true;
       }
     );
  }

}
