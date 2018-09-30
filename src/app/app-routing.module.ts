import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './body/content/home/home.component';
import {SkinDetailComponent} from './body/content/skins/skin-detail/skin-detail.component';
import {SkinsOverviewComponent} from './body/content/skins/skins-overview/skins-overview.component';
import {SkinsComparingComponent} from './body/content/skins/skins-comparing/skins-comparing.component';
import {ProjectsPersonalComponent} from './body/content/projects/projects-personal/projects-personal.component';
import {ProjectsProfessionalComponent} from './body/content/projects/projects-professional/projects-professional.component';
import {FormationComponent} from './body/content/formation/formation.component';
import {ContactComponent} from './body/content/contact/contact.component';
import {SkillsExtensionComponent} from './body/side-nav/skills-extension/skills-extension.component';

const routes: Routes = [

  { path: 'skins-comparing', component: SkinsComparingComponent, children: [
      { path: 'skins-comparing-extension', component: SkillsExtensionComponent, outlet: 'extension'}
    ]},
  { path: 'skins-overview', component: SkinsOverviewComponent},
  { path: 'projects-personal', component: ProjectsPersonalComponent},
  { path: 'projects-professional', component: ProjectsProfessionalComponent},
  { path: 'formation', component: FormationComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'home', component: HomeComponent},
  { path: 'skin-detail/:name', component: SkinDetailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
