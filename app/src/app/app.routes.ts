//import { NgModule } from '@angular/core';
import {  Routes } from '@angular/router';
import { Signup } from './components/signup/signup';
import { Login } from './components/login/login';
import { Dashboard } from './components/dashboard/dashboard';
import { Homepage } from './components/homepage/homepage';


export const routes: Routes = [
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard },
  { path: 'homepage', component: Homepage },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' } // default route
];

