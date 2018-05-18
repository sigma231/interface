  import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { ClosedauctionsComponent } from './closedauctions/closedauctions.component';
import { LiveauctionsComponent } from './liveauctions/liveauctions.component';
import { CategoriesComponent } from './categories/categories.component';
import { BuybidsComponent } from './buybids/buybids.component';

const pageRoutes: Routes = [
  {
    path: ' ',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'signup',
    component: SigninComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'closed',
    component: ClosedauctionsComponent
  },
  {
    path: 'live',
    component: LiveauctionsComponent
  },
  {
    path: 'categories',
    component: CategoriesComponent
  },
  {
    path: 'buybids',
    component: BuybidsComponent
  }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pageRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class PageRoutingModule { }
