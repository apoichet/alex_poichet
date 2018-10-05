import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './body/content/home/home.component';
import {SkillDetailComponent} from './body/content/skills/skill-detail/skill-detail.component';
import {SkillsOverviewComponent} from './body/content/skills/skills-overview/skills-overview.component';
import {SkillsComparingComponent} from './body/content/skills/skills-comparing/skills-comparing.component';
import {ProjectsPersonalComponent} from './body/content/projects/projects-personal/projects-personal.component';
import {ProjectsProfessionalComponent} from './body/content/projects/projects-professional/projects-professional.component';
import {FormationComponent} from './body/content/formation/formation.component';
import {ContactComponent} from './body/content/contact/contact.component';
import {SkillsExtensionComponent} from './body/side-nav/skills-extension/skills-extension.component';

const routes: Routes = [

  { path: 'skills-comparing', component: SkillsComparingComponent, children: [
      { path: 'skills-comparing-extension', component: SkillsExtensionComponent, outlet: 'extension'}
    ]},
  { path: 'skills-overview', component: SkillsOverviewComponent},
  { path: 'projects-personal', component: ProjectsPersonalComponent},
  { path: 'projects-professional', component: ProjectsProfessionalComponent},
  { path: 'formation', component: FormationComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'home', component: HomeComponent},
  { path: 'skill-detail/:name', component: SkillDetailComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
