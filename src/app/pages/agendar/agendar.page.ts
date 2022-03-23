import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { AgendarModel } from 'src/app/models/agendar.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  agendar: AgendarModel = new AgendarModel();

  dateValue2 = '';

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  // confirm() {
  //   this.datetime.citaspage.confirm();
  // }
  
  // reset() {
  //   this.datetime.nativeEl.reset();
  // }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Guardar Reservación',
      message: '¿Está seguro de reservar la fecha seleccionada?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          id: 'cancel-button',
          handler: (blah) => {
            console.log('Cancelado: blah');
          }
        }, {
          text: 'Aceptar',
          id: 'confirm-button',
          handler: () => {
            console.log('Guardado');
          }
        }
      ]
    });

    await alert.present();
  }

}
