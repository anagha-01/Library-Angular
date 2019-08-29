import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { AddbookComponent } from './addbook/addbook.component';
import { NavComponent } from './nav/nav.component';
import { ViewbookComponent } from './viewbook/viewbook.component';

@NgModule({
  declarations: [
    AppComponent,
    AddbookComponent,
    NavComponent,
    ViewbookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [NavComponent,AppComponent,AddbookComponent]
})
export class AppModule { }
