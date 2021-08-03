import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  private _name : string;
  private _phone : string;

  constructor(public alertController: AlertController) {}

  ngOnInit() {
  }

  private register(): void {
    if(!this.isValid(this._name) || !this.isValid(this._phone)){
      this.presentAlert("Agenda de Contatos", "Os campos nome e telefone são obrigatórios!", "Cadastro" );
    } else {
      this.presentAlert("Agenda de Contatos", "Cadastro efetuado com sucesso!", "Cadastro" );
    }
    console.log(this._phone)
  }

  private isValid(field: any) : boolean{
    if(!field){
      return false;
    } else {
      return true;
    }
  }

  async presentAlert(title: string, message: string, subtitle: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: title,
      subHeader: subtitle,
      message: message,
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}
