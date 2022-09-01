import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-password-validation',
  templateUrl: './password-validation.component.html',
  styleUrls: ['./password-validation.component.scss']
})
export class PasswordValidationComponent implements OnInit {

  @ViewChild('pswrd') pswrd: ElementRef;
  @ViewChild('toggleBtn') toggleBtn: ElementRef;
  @ViewChild('lower') lower: ElementRef;
  @ViewChild('upper') upper: ElementRef;
  @ViewChild('number') number: ElementRef;
  @ViewChild('special') special: ElementRef;
  @ViewChild('length') length: ElementRef;

  lowerTest = new RegExp('(?=.*[a-z])');
  upperTest = new RegExp('(?=.*[A-Z])');
  numberTest = new RegExp('(?=.*[0-9])');
  specialTest = new RegExp('(?=.*[!@#\$%\^&\*])');
  lengthTest = new RegExp('(?=.{8,})');

  constructor() { }

  ngOnInit(): void { }

  toggleEye() {
    if (this.pswrd.nativeElement.type === 'password') {
      this.pswrd.nativeElement.setAttribute('type', 'text')
      this.toggleBtn.nativeElement.classList.add('uil-eye-slash')
      this.toggleBtn.nativeElement.classList.remove('uil-eye')
    } else {
      this.pswrd.nativeElement.setAttribute('type', 'password')
      this.toggleBtn.nativeElement.classList.add('uil-eye')
      this.toggleBtn.nativeElement.classList.remove('uil-eye-slash')
    }
  }

  checkPassword(data: any) {
    this.testReg(data.value, this.lowerTest, this.lower);
    this.testReg(data.value, this.upperTest, this.upper);
    this.testReg(data.value, this.numberTest, this.number);
    this.testReg(data.value, this.specialTest, this.special);
    this.testReg(data.value, this.lengthTest, this.length);
  }

  testReg(value: string, test: RegExp, elem: ElementRef) {
    if (test.test(value)) {
      elem.nativeElement.classList.remove('uil-circle')
      elem.nativeElement.classList.add('uil-check-circle')
    }
    else {
      elem.nativeElement.classList.add('uil-circle')
      elem.nativeElement.classList.remove('uil-check-circle')
    }
  }

}
