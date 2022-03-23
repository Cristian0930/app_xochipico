import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UserRequest } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  user: UserRequest = {
    name: '',
    first_surname: '',
    second_surname: '',
    email: '',
    password: ''
  }

  constructor(
    private AuthService : AuthService,
    public alertController: AlertController
    ) { }

  ngOnInit() {
  }

  register() {
    this.AuthService.register(this.user).subscribe(
      resp => {
        console.log(resp);
        // todo bien
        this.alerta('Usuario registrado', 'Ya puedes iniciar sesión');
      }, error => {
        console.log(error);
        // todo mal
        this.alerta('Algo salio mal', 'no se pudo registrar el usuario');
      }
    )
  }

  async alerta(message: string, body: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: message,
      message: body,
    });

    await alert.present();
  }

}
