import {Component, Input} from '@angular/core'

@Component({
  selector: 'book-detail',
  template: `
      <div><img src="{{data}}" style="width: 100%; height: 100%"></div>
    `,
    styles: [`
    div {
      display: block;
      width: 400px;
      height: 500px;
      font-size: 12px;
    }
    p, h2 {
      padding: 3px 35px;
      line-height: 1.4em;
      text-align: justify;
    }
    h2{
      margin: 15px 0 10px;
    }`]
})

export class PageComponent {
  @Input('book-data')
  private data: string;
}