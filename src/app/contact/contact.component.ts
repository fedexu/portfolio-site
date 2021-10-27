import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AbstractControl, ValidatorFn } from '@angular/forms';
@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  emailUrl = "/api/mail/send";

  submitOutput: boolean | null = null;

  sendEmail = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [
      Validators.required,
      forbiddenEmail()
    ]),
    body: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(private readonly client: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let request = JSON.parse(JSON.stringify(this.sendEmail.value));
    request.email = request.email.split(",")
    this.client.post(this.emailUrl, request).subscribe(data => {
      this.sendEmail.reset();
      this.sendEmail.markAsDirty();
      this.submitOutput = true;
    }, error => {
      console.error(error);
      this.submitOutput = false;
    });
  }

}


export function forbiddenEmail(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    let error
    if (control.value) {
      let emails = control.value.split(",")
      if (emails)
        emails.forEach((email: string) => {
          if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email.trim())) {
            error = { forbiddenEmail: { value: control.value } };
          }
        });
    }

    if (error)
      return error
    else
      return null;
  };
}
