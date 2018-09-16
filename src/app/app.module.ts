import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { BodyComponent } from './body/body.component';
import { ProjectsComponent } from './body/projects/projects.component';
import { SkinsComponent } from './body/skins/skins.component';
import { SkinDetailComponent } from './body/skins/skin-detail/skin-detail.component';
import { MessagesComponent } from './footer/messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { PresentationComponent } from './body/presentation/presentation.component';
import { SkinsOverviewComponent } from './body/skins/skins-overview/skins-overview.component';
import { SkinsComparingComponent } from './body/skins/skins-comparing/skins-comparing.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    BodyComponent,
    ProjectsComponent,
    SkinsComponent,
    SkinDetailComponent,
    MessagesComponent,
    PresentationComponent,
    SkinsOverviewComponent,
    SkinsComparingComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
