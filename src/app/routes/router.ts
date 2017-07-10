/**
 * Created by caoimhin on 7/8/17.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontPageComponent } from '../components/front-page';
import { AboutComponent } from '../components/about';
import { ContactComponent } from '../components/contact';
import { ArticleComponent } from '../components/article';

const appRoutes: Routes = [
  { path: 'article', component: ArticleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: '', component: FrontPageComponent }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);