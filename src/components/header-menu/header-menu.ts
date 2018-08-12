import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { LoginPage } from '../../pages/login/login';

/**
 * Generated class for the HeaderMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header-menu',
  templateUrl: 'header-menu.html'
})
export class HeaderMenuComponent {

  text: string;

  constructor(public navCtrl: NavController, private toastCtrl: ToastController) {
    console.log('Hello HeaderMenuComponent Component');
    this.text = 'Hello World';
  }

  logout() {
    this.presentToast()
    this.navCtrl.setRoot(LoginPage)
  }

  
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'You are logged out',
      duration: 2000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
  

}
