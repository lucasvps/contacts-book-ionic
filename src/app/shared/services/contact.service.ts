import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _contacts : Contact[] = [];

  constructor() { }

  public getContacts(): Contact[]{
    return this._contacts;
  }

  public addContact(contact: Contact) {
    this._contacts.push(contact);
  }
}
