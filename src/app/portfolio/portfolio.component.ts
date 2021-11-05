import { AfterViewInit, Component } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements AfterViewInit {

  swiperPortfolio: any;

  constructor() { }

  ngAfterViewInit(): void {
    /* PORTFOLIO SWIPER  */
    this.swiperPortfolio = new Swiper(".portfolio__container", {
      cssMode: true,
      loop: true,

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
    });
  }

}
