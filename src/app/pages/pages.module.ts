import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRoutingModule } from './page-routing.module';
import { HomePageComponent } from './home-page/home-page.component';
import { LiveauctionsComponent } from './liveauctions/liveauctions.component';
import { ClosedauctionsComponent } from './closedauctions/closedauctions.component';
import { BuybidsComponent } from './buybids/buybids.component';
import { CategoriesComponent } from './categories/categories.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  declarations: [ ClosedauctionsComponent, BuybidsComponent, CategoriesComponent, LoginComponent, SigninComponent]
})
export class PagesModule { }
