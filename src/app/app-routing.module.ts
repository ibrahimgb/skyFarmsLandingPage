import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './molecules/blog/blog.component';
import { ComingSoonComponent } from './molecules/coming-soon/coming-soon.component';
import { NotFoundComponent } from './molecules/not-found/not-found.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'comingsoon',
    component: ComingSoonComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
