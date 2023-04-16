import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SaveDataService } from 'src/app/save-data.service';
@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
})
export class ComingSoonComponent {
  emailForm!: FormGroup;

  constructor(
    private saveDataService: SaveDataService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.emailForm = this.fb.group({
      email: '',
    });
  }

  subscribe() {
    const emailObj = this.emailForm.getRawValue();

    console.log(emailObj);

    //if (contactUsObj.email) {
    this.saveDataService.submitEmail(emailObj.email);
    //}
  }
}
