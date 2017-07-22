import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';

import { ModalComponent } from '../shared/services/modal/modal.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    ModalComponent,
    AuthComponent
  ],
  exports: [
    AppRoutingModule,
    CommonModule,
    ModalComponent,
    AuthComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ]
})
export class SharedModule { }
