import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  sendEmail = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    body: new FormControl('')    
  });

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.warn(this.sendEmail.value);
  }

}
