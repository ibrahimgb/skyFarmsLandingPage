import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SaveDataService } from 'src/app/save-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  emailForm!: FormGroup;

  constructor(
    private router: Router,
    private saveDataService: SaveDataService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.emailForm = this.fb.group({
      email: '',
    });
  }

  navigateTo(link: string): void {
    this.router.navigate([`/${link}`]);
    console.log('clicked home');
  }

  subscribe() {
    const emailObj = this.emailForm.getRawValue();

    console.log(emailObj);

    //if (contactUsObj.email) {
    this.saveDataService.submitEmail(emailObj.email);
    //}
  }
}
