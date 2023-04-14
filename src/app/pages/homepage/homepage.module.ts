import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { NgImageSliderModule } from 'ng-image-slider';
import { ComingSoonModule } from 'src/app/molecules/coming-soon/coming-soon.module';
import { FooterModule } from 'src/app/molecules/footer/footer.module';
import { NavbarModule } from 'src/app/molecules/navbar/navbar.module';
import { HomepageComponent } from './homepage.component';
import { HomepageService } from './homepage.service';
import { ImageSliderComponent } from './molecules/atoms/image-slider/image-slider.component';
@NgModule({
  declarations: [HomepageComponent, ImageSliderComponent],
  imports: [
    CommonModule,
    NavbarModule,
    MatIconModule,
    NgImageSliderModule,
    FooterModule,
    ComingSoonModule,
    RouterModule,
  ],
  exports: [HomepageComponent],
  providers: [HomepageService],
})
export class HomepageModule {}
