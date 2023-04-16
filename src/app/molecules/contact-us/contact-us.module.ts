import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ContactUsComponent } from './contact-us.component';
import { ContactUsService } from './contact-us.service';
@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  exports: [ContactUsComponent],
  providers: [ContactUsService],
})
export class ContactUsModule {}
