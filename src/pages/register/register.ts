import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AccountPage } from '../account/account';



@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  @ViewChild("Usernameinput") Fusername;
  @ViewChild("Passwordinput") Fpassword;
  @ViewChild("Confirmpasswordinput") Fconfirmpassword;
  @ViewChild("Emailinput") Femail;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }


  goAccount(){
    this.navCtrl.push(AccountPage);

  }
}
