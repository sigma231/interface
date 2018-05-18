import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';
import { LiveauctionsComponent } from './pages/liveauctions/liveauctions.component';
import { SigninComponent } from './pages/signin/signin.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'live', component: LiveauctionsComponent },
  {path: 'signin', component: SigninComponent}
];



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LiveauctionsComponent,
    SigninComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    // AppRoutingModule,
    CommonModule,
    HttpModule

  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
