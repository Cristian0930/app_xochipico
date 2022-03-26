import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { VisitRequest } from 'src/app/interfaces/visit';
import { AgendacionesService } from 'src/app/services/agendaciones.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {
  
  visit: VisitRequest = {
    'name': '',
    'date': new Date,
    'persons': '0',
    'hour': ''
  }

  constructor(
    private agendar: AgendacionesService,
    public alertController: AlertController) { }

  ngOnInit() {
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

  guardar() {

    this.agendar.saveVisit(this.visit).subscribe(
      resp => {
        console.log(resp);
        
      }, error => {
        console.log(error);
        
      }
    )
    console.log(this.visit);
    
  }
}
