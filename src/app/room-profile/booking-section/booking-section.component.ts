import { Component, OnInit } from '@angular/core';

import { ModalService } from '../../shared/services/modal/modal.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-booking-section',
  templateUrl: './booking-section.component.html',
  styles: []
})
export class BookingSectionComponent implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit() {
  }

  // Öffnen des Pop-ups
  openModal(id: string) {
    this.modalService.open(id);
  }

  // Schließen des Pop-ups
  closeModal(id: string) {
    this.modalService.close(id);
  }

}
