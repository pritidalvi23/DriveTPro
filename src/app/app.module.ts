import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDriveComponent } from './create-drive/create-drive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ViewDriveComponent } from './view-drive/view-drive.component';
import {Routes,RouterModule} from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { HttpClientModule} from '@angular/common/http';
import { EditComponent } from './edit/edit.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';


const approutes:Routes=[
  {path:'profile',component:LoginformComponent,pathMatch:'full'},
  {path:'register',component:RegistrationformComponent,pathMatch:'full'},
  {path:'create',component:CreateDriveComponent,pathMatch:'full'},
  {path:'view',component:ViewDriveComponent,pathMatch:'full'},
  {path:'xyz/:id',component: EditComponent,pathMatch:'full'},
  
  {path:'',redirectTo:'/profile',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent}
  
]
@NgModule({
  declarations: [
    AppComponent,
    CreateDriveComponent,
    ViewDriveComponent,
    LoginformComponent,
    RegistrationformComponent,
    EditComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,RouterModule.forRoot(approutes),FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
