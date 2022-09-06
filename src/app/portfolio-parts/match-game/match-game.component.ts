import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-match-game',
  templateUrl: './match-game.component.html',
  styleUrls: ['./match-game.component.scss']
})
export class MatchGameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check(chk: HTMLInputElement) {
    if (chk.checked)
      chk.disabled = true;
  }

  reset(chks: Array<HTMLInputElement>){
    chks.forEach(chk => {
      chk.disabled = false;
      chk.checked = false;
    })
  }

}
