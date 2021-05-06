import { FooterOnlyLayoutComponent } from './containers/layout/footer-only-layout/footer-only-layout.component';
import { LoginComponent } from './resources/security/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    data: {
      title: 'Dashboard',
    },
    loadChildren: () => import('./resources/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'login',
    component: FooterOnlyLayoutComponent,
    children: [
      { path: '', component: LoginComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
