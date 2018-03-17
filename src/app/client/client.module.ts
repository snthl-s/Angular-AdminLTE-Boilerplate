
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from './client.service';
import { ClientComponent } from './client.component';
import { CreateClientComponent } from './create-client.component';
import { UpdateClientComponent } from './update-client.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { ClientDetailComponent } from './client-detail.component';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'Clients', component: ClientComponent },
      { path: 'Clients/:id', component: ClientDetailComponent },
      { path: 'CreateClient', component: CreateClientComponent },
      { path: 'UpdateClient/:id', component: UpdateClientComponent }
     
    ]),
    
  ],
  declarations: [
    ClientComponent,
    CreateClientComponent,
    UpdateClientComponent,
    ClientDetailComponent,
    

  ],
  providers: [
    ClientService,
  ]
})
export class ClientModule { }