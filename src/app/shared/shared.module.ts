import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';

import { ModalComponent } from '../shared/services/modal/modal.component';
import { AuthComponent } from './auth/auth.component';
import { HomeSearchbarComponent } from './home-searchbar/home-searchbar.component';

import { EqualValidatorDirective } from './auth/equal-validator.directive';

@NgModule({
  declarations: [
    ModalComponent,
    AuthComponent,
    HomeSearchbarComponent,
    EqualValidatorDirective
  ],
  exports: [
    AppRoutingModule,
    CommonModule,
    ModalComponent,
    AuthComponent,
    HomeSearchbarComponent,
    EqualValidatorDirective
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
