import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';
import { ExperienceComponent } from './components/experiance/experience.component';
import {RouterModule} from "@angular/router";
import {AppRoutes} from "./app.routes";
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProfileComponent,
    HomeComponent,
    ExperienceComponent,
    ProjectsComponent,
    ContactComponent
  ],
    imports: [
        BrowserModule,
        RouterModule,
        AppRoutes
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
