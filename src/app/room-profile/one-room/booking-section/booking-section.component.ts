import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { RoomService } from '../../../shared/services/rooms/room-backend/room.service';
import { ModalService } from '../../../shared/services/modal/modal.service';
import { AuthService } from '../../../shared/auth/auth.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-booking-section',
  templateUrl: './booking-section.component.html',
  styles: []
})
export class BookingSectionComponent implements OnInit {
  private rooms: any[] = [];

  constructor(private modalService: ModalService, private authService: AuthService, private roomService: RoomService) { }

  ngOnInit() {
    this.getRoomsFromAPI();
  }

  getRoomsFromAPI(): void {
    this.roomService.getRooms().then(rooms => this.rooms = rooms);
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
