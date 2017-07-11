import { Component, OnInit } from '@angular/core';

import { ModalService } from '../shared/services/modal/modal.service';

@Component({
  moduleId: module.id.toString(),
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

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
    links = document.getElementsByClassName('tablinks');
    for (i = 0; i < links.length; i++) {
      links[i].className = links[i].className.replace(' tabblue', '');
    }
    document.getElementById(sign_tab).style.display = 'block';
    evt.currentTarget.className += ' tabblue';
  }


}
