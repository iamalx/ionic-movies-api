import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: any = {
    name: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  tabsPage() {
    console.log('tabsPage() runs from LoginPage')
    sessionStorage.setItem('name', this.user.name)
    this.presentToast()
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'You are logged in',
      duration: 1000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
      this.navCtrl.setRoot(TabsPage)
    });
  
    toast.present();
  }

}
