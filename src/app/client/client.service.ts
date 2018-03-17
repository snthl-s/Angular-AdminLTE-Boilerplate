import { Injectable } from '@angular/core';
import { IClient } from './client';

import { Observable } from 'rxjs/Observable';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import 'rxjs/add/observable/throw';


import { GlobalVariable } from '../global'; //<==== this one

@Injectable()
export class ClientService {

  private baseApiUrl = GlobalVariable.BASE_API_URL;
  
  viewClient(id): Observable<IClient> {

    let bu = this.baseApiUrl + 'client/view?id='+id;
    console.log(bu);
    return this._http.get<IClient>(bu)
               .do(data=>console.log('All: ' + JSON.stringify(data)))
               .catch(this.handleError);

  }
  deleteClient(id): Observable<IClient> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=UTF-8');

    let bu = this.baseApiUrl + 'client/delete/';
   
    return this._http.delete(bu,id)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);
  }



  getClient(values): Observable<IClient> {

    console.log(values);

    let CLIENT = values.listFilterclient;
    let DESCRIPTION = values.listFilterdescription;
    
    let bu = this.baseApiUrl + 'client?ClientSearch[CLIENT]=' + CLIENT +'&ClientSearch[DESCRIPTION]='+DESCRIPTION;
    console.log(bu);
    return this._http.get<IClient[]>(bu)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .catch(this.handleError);

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
  constructor(private _http: HttpClient) { }

}
