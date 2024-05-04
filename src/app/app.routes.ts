import { Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { BlogComponent } from './modules/blog/blog.component';

export const routes: Routes = [
  { path: '', redirectTo: 'about', pathMatch: 'full' },
  { path: 'about', component: AboutComponent },
  { path: 'blog', component: BlogComponent },
];
