import { ClientService } from './client.service';
import { Component, OnInit } from '@angular/core';
import { IClient } from './client';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbdTooltipBasic } from './tooltip-basic';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-client',
  moduleId: module.id,
  templateUrl: 'client.component.html',
  styleUrls: ['client.component.css'],
 
})
export class ClientComponent implements OnInit {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  
  pageTitle: string = 'Client Search';
  id: string;
  rForm: FormGroup;
  listFilterclient:string ='';
  listFilterdescription:string ='';
  titleAlert: string = 'This field is required';
  clients: IClient[];
  errorMessage: string;

  constructor(private _clientService:ClientService,private fb: FormBuilder) {

    this.rForm = fb.group({
      'listFilterclient': '',
      'listFilterdescription': [null, Validators.compose([Validators.required, Validators.minLength(2)])],
      'validate': ''
    });

  }


  fetchData = function(values){

    
    this._clientService.getClient(values).subscribe(clients => this.clients = clients, error => this.errorMessage = <any>error);

  }

  deleteClient = function (id) {
    if (confirm("Are you sure?")) {


      this._clientService.deleteClient(id).subscribe(clients => this.clients = clients, error => this.errorMessage = <any>error);

      
    }
  }

  ngOnInit(): void{

  }


}
