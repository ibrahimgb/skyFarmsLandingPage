import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer.component';
@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FooterComponent],
})
export class FooterModule {}
