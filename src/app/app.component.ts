import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-list';
  items: NbMenuItem[] = [
    {
      title: 'BookList',
      icon: 'book-open-outline',
      link: 'Book-list'
    },
   
  ];
constructor(private sidebarService: NbSidebarService){}

}
