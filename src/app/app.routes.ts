import { ProfileComponent } from './features/profile/profile.component';
import { Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { SidebarComponent } from './features/sidebar/sidebar.component';

export const HOME_ROUTE = 'home';
export const LOGIN_ROUTE = 'login';
export const PROFILE_ROUTE = 'profile';
export const TEST = 'test';

export const routes: Routes = [
  { path: '', redirectTo: LOGIN_ROUTE, pathMatch: 'full' },
  { path: LOGIN_ROUTE, component: LoginComponent },
  { path: HOME_ROUTE, component: HomeComponent },
  { path: PROFILE_ROUTE, component: ProfileComponent },
  { path: TEST, component: SidebarComponent },
  { path: '**', component: HomeComponent },
];
