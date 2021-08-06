import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Contact } from 'src/app/models/contact';
import { ContactService } from 'src/app/shared/services/contact.service';
import { RouteServiceService } from 'src/app/shared/services/route-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private _name : string;
  private _phone : string;
  private _gender: string;
  private _birthDate: string;

  constructor(public alertController: AlertController, private _router : Router, private _contactService : ContactService) {}

  ngOnInit() {
  }

  private register(): void {
    if(!this.isValid(this._name) || !this.isValid(this._phone) || !this.isValid(this._gender) || !this.isValid(this._birthDate)){
      this.presentAlert("Opsss!", "Todos os campos são obrigatórios!");
    } else {
      
      let contact : Contact = new Contact(this._name, this._phone, this._gender, this._birthDate.split('T')[0]);
      this._contactService.addContact(contact);
      this.presentAlert("Agenda de Contatos", "Contato adicionado com sucesso!");
      this._router.navigate(["/home"]);
    }
  }

  private isValid(field: any) : boolean{
    if(!field){
      return false;
    } else {
      return true;
    }
  }

  async presentAlert(title: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      message: message,
      buttons: ['OK'],
      animated: true,

    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
  }

}
