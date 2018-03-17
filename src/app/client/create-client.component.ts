import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
@Component({
  templateUrl: './create-client.component.html',
})
export class CreateClientComponent implements OnInit {

  pageTitle: string = 'Create New Client';
  constructor(private http: Http) { }
  confirmationString: string = "New Client has been added";
  isAdded: boolean = false;
  clientObj: object = {};

  addNewClient = function (client) {
    this.clientObj = {
      "CLIENT": client.CLIENT,
      "DESCRIPTION": client.DESCRIPTION
    }
    this.http.post("", this.clientObj).subscribe((res: Response) => {
      this.isAdded = true;
      
    })
  }



  ngOnInit() {
  }

}
