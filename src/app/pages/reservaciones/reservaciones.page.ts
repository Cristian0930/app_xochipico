import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { VisitResponse } from 'src/app/interfaces/visit';
import { AgendacionesService } from 'src/app/services/agendaciones.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.page.html',
  styleUrls: ['./reservaciones.page.scss'],
})
export class ReservacionesPage implements OnInit {

  loading: HTMLIonLoadingElement;

  visitas: VisitResponse[] = [];

  constructor(
    private agendar: AgendacionesService,
    public alertController: AlertController,
    public loadingController: LoadingController
  ) { }

  ngOnInit() {
    this.obtenerVisitas();
  }

  obtenerVisitas() {
    this.agendar.getVisit().subscribe(
      resp => {
        console.log(resp);
        this.visitas = resp;
        
      }, error => {
        console.log(error);
      }
    )
  }

  borrarVisita(id: any) {

    this.presentLoading();

    this.agendar.delete(id).subscribe(
      resp => {
        console.log(resp);
        this.loading.dismiss();
        this.presentAlert('Visita borrada', '');
        this.obtenerVisitas();
        
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

  async presentAlertMultipleButtons (id: any) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: '¿Estás seguro?',
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.borrarVisita(id);
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
