import {Component, OnInit} from '@angular/core';
import {BookComponent} from '../book/book';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a [routerLink]="['Books', { id: 'pique'}]"><img src="pages/pique/01.jpg"></a></li>
      <li><a [routerLink]="['Books', { id: 'angular2'}]"><img src="pages/angular2/01-1.png"></a></li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: [`
  img {
    height: 100%
  }
  ul {
    margin-top: 0px;
    background-color: #eee;
    z-index: 200;
  }
  li {
    display: inline-block;
    background-color: #ccc;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 5px;
    width: 40px;
    height: 50px;
    border: 1px solid #ccc;
    background-size: contain;
    text-align: center;
  }`],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/books/:id',     name: 'Books',     component: BookComponent, useAsDefault: true}
])
export class AppComponent {}
　