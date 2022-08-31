import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'qualifications',
  templateUrl: './qualifications.component.html',
  styleUrls: ['./qualifications.component.scss']
})
export class QualificationsComponent {

  constructor() { }

  changeTab(tab: any) {
    const target = document.querySelector(tab.dataset.target);

    document.querySelectorAll('[data-content]').forEach((tabContent: any) => {
      tabContent.classList.remove('qualification__active');
      tabContent.classList.add('qualification__hide');
    });

    target.classList.add('qualification__active');
    target.classList.remove('qualification__hide');

    document.querySelectorAll('[data-target]').forEach((tab: any) => {
      tab.classList.remove('qualification__active');
    });

    tab.classList.add('qualification__active');
  }

}
