import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkinsComponent } from './body/skins/skins.component';
import { ProjectsComponent } from './body/projects/projects.component';
import { PresentationComponent } from './body/presentation/presentation.component';
import { SkinDetailComponent } from './body/skins/skin-detail/skin-detail.component';

const routes: Routes = [
  { path: 'skins', component: SkinsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'presentation', component: PresentationComponent },
  { path: 'skin-detail/:name', component: SkinDetailComponent },
  { path: '', redirectTo: '/presentation', pathMatch: 'full' },
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
