import {provideRouter, RouterConfig } from '@angular/router';
import {BookComponent} from '../book/book';
import {HomeComponent} from '../home/home';

export const routes: RouterConfig = [
  {path: '/', component: HomeComponent},
  {path: '/pique/:id', component: BookComponent},
  {path: '/angular2/:id', component: BookComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];