import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './body/home/home.component';
import { SkinDetailComponent } from './body/skins/skin-detail/skin-detail.component';
import { SkinsOverviewComponent } from './body/skins/skins-overview/skins-overview.component';
import { SkinsComparingComponent } from './body/skins/skins-comparing/skins-comparing.component';
import {ProjectsPersonalComponent} from './body/projects/projects-personal/projects-personal.component';
import {ProjectsProfessionalComponent} from './body/projects/projects-professional/projects-professional.component';
import {FormationComponent} from './body/formation/formation.component';
import {ContactComponent} from './body/contact/contact.component';

const routes: Routes = [
  { path: 'skins-overview', component: SkinsOverviewComponent },
  { path: 'skins-comparing', component: SkinsComparingComponent },
  { path: 'projects-personal', component: ProjectsPersonalComponent },
  { path: 'projects-professional', component: ProjectsProfessionalComponent },
  { path: 'formation', component: FormationComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'skin-detail/:name', component: SkinDetailComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
