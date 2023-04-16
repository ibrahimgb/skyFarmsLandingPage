import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComingSoonComponent } from './coming-soon.component';

@NgModule({
  declarations: [ComingSoonComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [ComingSoonComponent],
})
export class ComingSoonModule {}
