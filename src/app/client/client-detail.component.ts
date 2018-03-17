import { ClientService } from './client.service';
import { Component, OnInit } from '@angular/core';
import { IClient } from './client';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-client-details',
  moduleId: module.id,
  templateUrl: './client-detail.component.html',
  
})
export class ClientDetailComponent implements OnInit {

  pageTitle: string = 'Client Details';
  client: IClient;
  errorMessage:string;
  

  constructor(private _route: ActivatedRoute,
              private _router: Router,
            private _clientService: ClientService) {
      console.log(this._route.snapshot.params['id']);


   }

  viewClient(id: string) {
    this._clientService.viewClient(id).subscribe(
      client => this.client = client,
      error => this.errorMessage = <any>error);
  }



  ngOnInit() {

    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = param;
      this.viewClient(id);
    }

  }

  onBack(): void{
    //console.log('on back is clicked');
    this._router.navigate(['/clients']);
  }

}
