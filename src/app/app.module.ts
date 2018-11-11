import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {NavComponent} from './nav/nav.component';
import {BodyComponent} from './body/body.component';
import {SkillDetailComponent} from './body/content/skills/skill-detail/skill-detail.component';
import {AppRoutingModule} from './/app-routing.module';
import {HomeComponent} from './body/content/home/home.component';
import {SkillsOverviewComponent} from './body/content/skills/skills-overview/skills-overview.component';
import {SkillsComparingComponent} from './body/content/skills/skills-comparing/skills-comparing.component';
import {FormsModule} from '@angular/forms';
import {ProjectsPersonalComponent} from './body/content/projects/projects-personal/projects-personal.component';
import {ProjectsProfessionalComponent} from './body/content/projects/projects-professional/projects-professional.component';
import {FormationComponent} from './body/content/formation/formation.component';
import {ContactComponent} from './body/content/contact/contact.component';
import {SkillsExtensionComponent} from './body/side-nav/skills-extension/skills-extension.component';
import {SideNavComponent} from './body/side-nav/side-nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SkillExtensionComponent} from './body/side-nav/skills-extension/skill-extension.component';
import {ArraySortPipe} from './shared/array-sort.pipe';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BodyComponent,
    SkillDetailComponent,
    HomeComponent,
    SkillsOverviewComponent,
    SkillsComparingComponent,
    ProjectsPersonalComponent,
    ProjectsProfessionalComponent,
    FormationComponent,
    ContactComponent,
    SkillsExtensionComponent,
    SkillExtensionComponent,
    SideNavComponent,
    ArraySortPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
