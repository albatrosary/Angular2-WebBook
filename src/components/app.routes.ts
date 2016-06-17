import {provideRouter, RouterConfig } from '@angular/router';
import {BookComponent} from './book/book'

export const routes: RouterConfig = [
  {path: '/books/:id', component: BookComponent}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];