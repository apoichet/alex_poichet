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
    PresentationComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
