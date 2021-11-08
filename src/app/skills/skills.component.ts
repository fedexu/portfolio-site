import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements AfterViewInit {

  skillsContent: any;

  constructor() { }

  ngAfterViewInit(): void {
    this.skillsContent = document.getElementsByClassName('skills__content');
  }

  toggleSkills(element: any) {
    let itemClass = element.parentNode.className;

    for (let i = 0; i < this.skillsContent.length; i++) {
      this.skillsContent[i].className = 'skills__content skills__close';
    }
    if (itemClass === 'skills__content skills__close') {
      element.parentNode.className = 'skills__content skills__open';
    }
  }

}
