import { DataService } from './data.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppsettingsComponent } from './appsettings/appsettings.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientModule } from './client/client.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppsettingsComponent,
    DashboardComponent,
    LoginComponent
  ],
  providers:[
    DataService
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ClientModule,
    RouterModule.forRoot([
      { path: "Dashboard", component: DashboardComponent },
      { path: "", component: DashboardComponent },
      { path: "Login", component: LoginComponent},
     
    ]),
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
