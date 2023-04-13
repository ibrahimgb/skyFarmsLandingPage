import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BlogComponent } from './blog.component';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, MatIconModule],
  exports: [BlogComponent],
})
export class BlogModule {}
