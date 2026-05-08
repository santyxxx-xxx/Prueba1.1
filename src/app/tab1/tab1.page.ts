import { Component } from '@angular/core';
import { AlertController, IonCard } from '@ionic/angular';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone:false,
})
export class Tab1Page {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Precaucion',
      subHeader: 'No fotos ilicitas',
      message: 'SI llega a tener una foto ilicita se le bloqueara el acceso pilas',
      buttons: ['Action'],
    });

    await alert.present();
  }
}
