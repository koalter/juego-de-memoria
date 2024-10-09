import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  logoutButtons = [
    {
      text: 'Cancelar',
      role: 'cancel',
      cssClass: ['ion-color-danger'],
    },
    {
      text: 'Confirmar',
      role: 'confirm',
      cssClass: ['ion-color-success'],
      handler: () => this.logout()
    }
  ];

  get width() : number {
    return window.innerWidth;
  }

  get height() : number {
    return window.innerHeight;
  }

  constructor(
    private auth: AuthService,
    private router: Router,
    private loadingController: LoadingController
  ) {}

  async logout() {
    const loadingElement = await this.loadingController
      .create({ message: 'Cerrando sesión...' });
      
    await loadingElement.present();
    const result = await this.auth.logout();
    await loadingElement.dismiss();

    if (result) {
      this.router.navigate(['login']);
    }
  }

  start(difficulty: number) {
    this.router.navigate(['juego', difficulty]);
  }
}
