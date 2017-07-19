import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ModalService } from '../services/modal/modal.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styles: []
})
export class AuthComponent implements OnInit {

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

  // Wechseln zwischen den Tabs
  openTab(evt, sign_tab) {
    let i, content, links;
    content = document.getElementsByClassName('tabcontent');
    for (i = 0; i < content.length; i++) {
      content[i].style.display = 'none';
    }
    // links = document.getElementsByClassName('tablinks');
    // for (i = 0; i < links.length; i++) {
    //   links[i].className = links[i].className.replace(' tabblue', '');
    // }
    document.getElementById(sign_tab).style.display = 'block';
    // event.target.className += ' tabblue';
  }

  onSignup(form: NgForm) {
    // const firstName = form.value.firstName;
    // const lastName = form.value.lastName;
    // const bday = form.value.bday;
    const email = form.value.email;
    const password = form.value.password;
    // const confirm_password = form.value.confirm_password;
  }

}
