import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PageRoutingModule } from './pages/page-routing.module';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: 'app/pages/pages.module#PagesModule'
  }


];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
