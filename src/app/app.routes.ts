import { ProfileComponent } from './features/profile/profile.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { NavbarComponent } from './features/navbar/navbar.component';
import { HOME_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, TEST } from './shared/costants';

export const routes: Routes = [
  { path: '', redirectTo: LOGIN_ROUTE, pathMatch: 'full' },
  { path: LOGIN_ROUTE, component: LoginComponent },
  { path: HOME_ROUTE, component: HomeComponent },
  { path: PROFILE_ROUTE, component: ProfileComponent },
  { path: TEST, component: NavbarComponent },
  { path: '**', component: HomeComponent },
];
