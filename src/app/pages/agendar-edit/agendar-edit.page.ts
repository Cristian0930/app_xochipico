import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { VisitRequest } from 'src/app/interfaces/visit';
import { AgendacionesService } from 'src/app/services/agendaciones.service';

@Component({
  selector: 'app-agendar-edit',
  templateUrl: './agendar-edit.page.html',
  styleUrls: ['./agendar-edit.page.scss'],
})
export class AgendarEditPage implements OnInit {

  loading: HTMLIonLoadingElement;
  
  visit: VisitRequest = {
    'id': 0,
    'name': '',
    'date': new Date,
    'persons': '0',
    'hour': ''
  }

  constructor(
    private agendar: AgendacionesService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    const params = this.activatedRoute.snapshot.paramMap.get("id");
    console.log(params);

    this.agendar.show(params).subscribe(
      resp => {
        console.log(resp);
        this.visit = resp;
      }, error => {
        console.log(error);
        
      }
    )
  }

  actualizar() {

    this.presentLoading();

    this.agendar.update(this.visit.id, this.visit).subscribe(
      resp => {
        console.log(resp);
        this.loading.dismiss();
        this.presentAlert('Visita actualizada', '');
        
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
            this.actualizar();
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
