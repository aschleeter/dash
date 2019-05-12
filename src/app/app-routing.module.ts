import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { GeneralComponent } from './general/general.component';
import { SettingsComponent } from './settings/settings.component';
import { DomainRiskComponent } from './domain-risk/domain-risk.component';
import { TestComponent} from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'upload',
    component: UploadComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'general',
    component: GeneralComponent
  },
  {
    path: 'domain-risk',
    component: DomainRiskComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'test',
    component: TestComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
