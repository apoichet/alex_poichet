import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { SkinsComponent } from './body/content/skins/skins.component';
import { SkinDetailComponent } from './body/content/skins/skin-detail/skin-detail.component';
import { MessagesComponent } from './footer/messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './body/content/home/home.component';
import { SkinsOverviewComponent } from './body/content/skins/skins-overview/skins-overview.component';
import { SkinsComparingComponent } from './body/content/skins/skins-comparing/skins-comparing.component';
import { FormsModule } from '@angular/forms';
import { ProjectsPersonalComponent } from './body/content/projects/projects-personal/projects-personal.component';
import { ProjectsProfessionalComponent } from './body/content/projects/projects-professional/projects-professional.component';
import { FormationComponent } from './body/content/formation/formation.component';
import { ContactComponent } from './body/content/contact/contact.component';
import { SkillsExtensionComponent } from './body/side-nav/skills-extension/skills-extension.component';
import { SideNavComponent } from './body/side-nav/side-nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BodyComponent,
    SkinsComponent,
    SkinDetailComponent,
    MessagesComponent,
    HomeComponent,
    SkinsOverviewComponent,
    SkinsComparingComponent,
    ProjectsPersonalComponent,
    ProjectsProfessionalComponent,
    FormationComponent,
    ContactComponent,
    SkillsExtensionComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
