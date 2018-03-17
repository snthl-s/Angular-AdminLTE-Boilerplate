import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ILogin } from './login';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/throw';
import { DataService } from '../data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private baseApiUrl = '';
  pageTitle:string = 'Login Page';
  rForm: FormGroup;
  tempData: String;
  errMsg:String;
  

  constructor(private _dataService:DataService,private _http: Http ,private router: Router,private fb: FormBuilder) { 
    this.rForm = fb.group({
      'username': [null, Validators.compose([Validators.required])],
      'password': [null, Validators.compose([Validators.required])],
      'rememberme':''
    });


  }

  login(values) {
    //console.log(values);
    var headers = new Headers({
      "content-type": "application/x-www-form-urlencoded"});
      let bu = this.baseApiUrl;

    let a = "username=" + values.username + "&password=" + values.password;
    //console.log(a);
    
    return this._http.post(bu, a, { headers: headers }).subscribe(
    
      res => {
        let body = res.json();
        
        console.log(body);

        if (body['STATUS'] == true)
        {
          //console.log(res['_body']);
          this._dataService.setLogin(true);
          
          return this.router.navigate(['/']);
         
        }
        else
        {
         // console.log("Fails");
          this._dataService.setLogin(false);
          this.errMsg = body['Message'];
          return true;
        }
      }
     );


  }


  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof Error) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

  ngOnInit() {
  }

}
