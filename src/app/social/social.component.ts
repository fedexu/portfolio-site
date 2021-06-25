import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  openNav() {
    let menu = document.getElementById("social-nav");
    let openArrow = document.querySelector(".open");
    if (menu && openArrow){
      menu.style.transform = "translate(0px, 0px)";
      openArrow.classList.add('display-none');
    }
  }

  closeNav() {
    let menu = document.getElementById("social-nav");
    let openArrow = document.querySelector(".open");
    if (menu && openArrow) {
      menu.style.transform = "translate(55px, 0px)";
      openArrow.classList.remove('display-none');
    }
  }

}
