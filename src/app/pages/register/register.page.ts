import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserRequest } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  loading: HTMLIonLoadingElement;

  user: UserRequest = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
  }

  constructor(
    private AuthService : AuthService,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  register() {

    this.presentLoading();
    
    this.AuthService.register(this.user).subscribe(
      resp => {
        console.log(resp);
        this.loading.dismiss();
        this.presentAlert('Usuario creado', 'Ya puedes iniciar sesión');
      }, error => {
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
}
