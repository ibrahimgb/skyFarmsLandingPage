import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ContactUsComponent],
})
export class ContactUsModule {}
