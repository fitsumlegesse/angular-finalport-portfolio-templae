import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {  ResumeComponent } from '../resume/resume.compnent'; 



@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ResumeComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
