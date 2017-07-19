import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalComponent } from '../shared/services/modal/modal.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    ModalComponent,
    AuthComponent
  ],
  exports: [
    CommonModule,
    ModalComponent,
    AuthComponent
  ],
  imports: [
    FormsModule
  ]
})
export class SharedModule { }
