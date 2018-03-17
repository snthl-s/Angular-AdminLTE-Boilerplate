import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ClientService } from './client/client.service';
import { DataService } from './data.service';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClientService, DataService]
})
  
export class AppComponent {
  title = 'CodeVU';

  constructor(private _dataService: DataService){}

  

}
