import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SvogvModule } from './lib/module';

import { Form1Component } from './form1/form1.component';
import { WindowRef } from './lib/utils/windowref';
import { FormValidatorService } from './lib/services/formvalidator.service';
import { FormValidatorFromJsonService } from './lib/services/formvalidator-fromjson.service';


@NgModule({
  declarations: [
    AppComponent,
    Form1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SvogvModule
  ],
  providers: [WindowRef
    , FormValidatorService, FormValidatorFromJsonService  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
