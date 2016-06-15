import {Component, Input} from '@angular/core'

@Component({
  selector: 'book-detail',
  template: `
      <div><img src="{{data}}" style="width: 100%; height: 100%"></div>
    `
})

export class PageComponent {
  @Input('book-data')
  private data: string;
}