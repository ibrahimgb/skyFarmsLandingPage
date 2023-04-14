import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComingSoonModule } from 'src/app/molecules/coming-soon/coming-soon.module';
import { FooterModule } from 'src/app/molecules/footer/footer.module';
import { NavbarModule } from 'src/app/molecules/navbar/navbar.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BlogModule } from './molecules/blog/blog.module';
import { ContactUsModule } from './molecules/contact-us/contact-us.module';
import { NotFoundModule } from './molecules/not-found/not-found.module';
import { HomepageModule } from './pages/homepage/homepage.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BlogModule,
    FooterModule,
    ComingSoonModule,
    NavbarModule,
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    BrowserAnimationsModule,
    NotFoundModule,
    ContactUsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
