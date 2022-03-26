import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserRequestLogin } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loading: HTMLIonLoadingElement;

  user: UserRequestLogin = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService, 
    private router: Router,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
  }

  login() {

    this.presentLoading();

    this.authService.signIn(this.user).subscribe(
      resp => {
        console.log(resp);
        localStorage.setItem('token', resp.token);
        this.router.navigate(['/inicio']);
        this.loading.dismiss();
      }, error => {
        console.log(error);

        console.log(error.status);
        
        if (error.status === 400) {
          this.loading.dismiss();
          this.presentAlert('Algo salió mal', 'Correo electrónico o contraseña incorrectos, intenta de nuevo.');
        } else {
          this.loading.dismiss();
          this.presentAlert('Algo salió mal', 'intentalo más tarde');
        }
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
