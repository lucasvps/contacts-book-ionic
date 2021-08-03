import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  private contacts: any[];

  constructor() {
    this.contacts = [
      {name: 'Lucas Vieira', phone : '42999504303'},
      {name: 'Emily',phone : '42999504303'},
      {name: 'Marina', phone : '42999504303'}
    ];
  }

}
