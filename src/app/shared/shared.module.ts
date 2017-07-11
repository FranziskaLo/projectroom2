import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from '../shared/services/modal/modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  exports: [
    CommonModule,
    ModalComponent
  ]
})
export class SharedModule { }
