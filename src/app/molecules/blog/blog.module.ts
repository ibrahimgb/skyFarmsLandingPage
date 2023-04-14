import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { BlogComponent } from './blog.component';
@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, MatIconModule, RouterModule],
  exports: [BlogComponent],
})
export class BlogModule {}
