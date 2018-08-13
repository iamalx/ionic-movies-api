import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
//import { LoginPage } from '../../pages/login/login';
import { HomePage } from '../../pages/home/home';

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
    sessionStorage.removeItem('name')
    this.presentToast()
  }

  
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'You are logged out',
      duration: 1000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      this.navCtrl.setRoot(HomePage)
    });
  
    toast.present();
  }
  

}
