import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  constructor() { }

  ngAfterViewInit(): void { }

  openModal(modal: any) {
    modal.classList.add('active-modal');
  }

  closeModal(modal: any) {
    modal.classList.remove('active-modal');
  }

}
