import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { ModalService } from '../../../shared/services/modal/modal.service';
import { AuthService } from '../../../shared/auth/auth.service';
import { RoomService } from '../../../shared/services/rooms/room.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-booking-section',
  templateUrl: './booking-section.component.html',
  styles: []
})
export class BookingSectionComponent implements OnInit {
  room: { id: number, price: string };

  constructor(private modalService: ModalService, private authService: AuthService, private route: ActivatedRoute,
    private roomService: RoomService) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.room = this.roomService.getRoom2(id);
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
