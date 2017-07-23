import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';

import { ModalComponent } from '../shared/services/modal/modal.component';
import { AuthComponent } from './auth/auth.component';
import { HomeSearchbarComponent } from './home-searchbar/home-searchbar.component';

@NgModule({
  declarations: [
    ModalComponent,
    AuthComponent,
    HomeSearchbarComponent
  ],
  exports: [
    AppRoutingModule,
    CommonModule,
    ModalComponent,
    AuthComponent,
    HomeSearchbarComponent
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule
  ]
})
export class SharedModule { }
