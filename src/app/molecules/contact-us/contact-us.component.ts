import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactUsService } from './contact-us.service';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  contactUsForm!: FormGroup;

  constructor(
    private contactUsService: ContactUsService,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar
  ) {
    //
  }

  ngOnInit() {
    this.contactUsForm = this.fb.group({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: null,
      message: '',
    });
  }

  submit() {
    const contactUsObj = this.contactUsForm.getRawValue();
    console.log(contactUsObj);

    if (!contactUsObj.firstName) {
      this.openSnackBar('Please provide your Name');
    } else if (!contactUsObj.email) {
      this.openSnackBar('Please provide a valid email');
    } else if (!contactUsObj.message) {
      this.openSnackBar('Please provide a Message');
    } else {
      //console.log(logIn);
      this.contactUsService.submit(contactUsObj).subscribe(() => {
        this.openSnackBar('Sent');
        // console.log('Yes');
      });

      this.contactUsForm.patchValue({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: null,
        message: '',
      });
    }
  }
  openSnackBar(message: string) {
    this._snackBar.open(message, 'Ok', {
      duration: 800,
    });
  }
}
