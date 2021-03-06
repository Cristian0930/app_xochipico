import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { VisitRequest } from 'src/app/interfaces/visit';
import { AgendacionesService } from 'src/app/services/agendaciones.service';

@Component({
  selector: 'app-agendar',
  templateUrl: './agendar.page.html',
  styleUrls: ['./agendar.page.scss'],
})
export class AgendarPage implements OnInit {

  loading: HTMLIonLoadingElement;
  
  visit: VisitRequest = {
    'name': '',
    'date': new Date,
    'persons': '0',
    'hour': ''
  }

  constructor(
    private agendar: AgendacionesService,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
  }

  guardar() {

    this.presentLoading();

    this.agendar.saveVisit(this.visit).subscribe(
      resp => {
        console.log(resp);
        this.loading.dismiss();
        this.presentAlert('Visita guardada', '');
        
      }, error => {
        console.log(error);
        this.loading.dismiss();
        this.presentAlert('Algo salió mal', 'intentalo más tarde');
        
      }
    )    
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      message: 'Cargando...'
    });

    await this.loading.present();
  }

  async presentAlert(header: string, subHeader: string) {
    const alert = await this.alertController.create({
      backdropDismiss: false,
      header,
      subHeader,
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons () {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Estás seguro?',
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.guardar();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }
}
