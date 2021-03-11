import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// AuthGuard
import { AuthGuard } from './guards/auth.guard.service';

// VIEW COMPONENT STATEMENTS
import { LoginViewComponent } from './views/login/login.component';
import { DashboardViewComponent } from './views/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: "login", component: LoginViewComponent },
  { path: "dashboard", component: DashboardViewComponent, canActivate: [AuthGuard] },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
