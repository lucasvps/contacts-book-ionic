import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/shared/services/contact.service';
import { RouteServiceService } from 'src/app/shared/services/route-service.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  private contacts: Contact[];

  constructor(private _contactService: ContactService, private _serviceRouter : RouteServiceService) {
    this.contacts = this._contactService.getContacts();

  }

  

}
