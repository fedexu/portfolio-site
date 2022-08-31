import { Component, AfterViewInit } from '@angular/core';

declare var Swiper: any;

@Component({
  selector: 'testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements AfterViewInit {

  swiperTestimonial: any;

  constructor() { }

  ngAfterViewInit(): void {
    /* TESTIMONIAL */
    this.swiperTestimonial = new Swiper(".testimonial__container", {
      grabCursor: true,
      loop: true,
      spaceBetween: 48,

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      breakpoints: {
        568: {
          slidesPerView: 2,
        }
      }
    });
  }

}
