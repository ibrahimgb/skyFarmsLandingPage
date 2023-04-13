import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer.component';
@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule, FontAwesomeModule, MatIconModule],
  exports: [FooterComponent],
})
export class FooterModule {}
