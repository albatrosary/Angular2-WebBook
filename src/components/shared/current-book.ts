import {Injectable} from '@angular/core';

@Injectable()
export class CurrentBook {
  
  private book: string = 'pique';
  
  public put(book: string) {
    this.book = book;
  }
  
  public get() {
    return this.book;
  }

  public getBooks() {
    if (this.book === 'angular2') 
      return this.angular2_contents;
    else
      return this.pique_contents;
  }

  public getBook(book: string) {
    if (book === 'angular2') 
      return this.angular2_contents;
    else
      return this.pique_contents;
  }

  private angular2_contents = [
     {src: 'pages/angular2/01-1.png'},
     {src: 'pages/angular2/01-2.png'},
     {src: 'pages/angular2/02-1.png'},
     {src: 'pages/angular2/02-2.png'},
     {src: 'pages/angular2/03-1.png'},
     {src: 'pages/angular2/03-2.png'},
     {src: 'pages/angular2/04-1.png'},
     {src: 'pages/angular2/04-2.png'}
  ];

  private pique_contents = [
     {src: 'pages/pique/01.jpg'},
     {src: 'pages/pique/02.jpg'},
     {src: 'pages/pique/03.jpg'},
     {src: 'pages/pique/04.jpg'},
     {src: 'pages/pique/05.jpg'},
     {src: 'pages/pique/06.jpg'}
  ];
}