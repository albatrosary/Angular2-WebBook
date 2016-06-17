import {provideRouter, RouterConfig } from '@angular/router';
import {BookComponent} from './book/book'

export const routes: RouterConfig = [
  {path: '/pique/:id', component: BookComponent},
  {path: '/angular2/:id', component: BookComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];