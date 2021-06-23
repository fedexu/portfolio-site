import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var th = this;
    $(window).scroll(function () {
      var scrollTop = $(window).scrollTop();
      $('.name').css({
        opacity: function () {
          return th.opacity($(this).height(), scrollTop, 150);
        }
      });
      $('.side-nav').css({
        opacity: function () {
          return  th.opacity($(this).height(), scrollTop, 200) ;
        }
      });
    });
  }

  opacity(height: number, top: number, startPx: number){
    return 1- this.numberMap(top, height, startPx, 0, 1);
  }

  numberMap (input:number,in_min: number, in_max: number, out_min: number, out_max: number) {
    return (input - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }

}
