import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';
import { Paquete, PaqueteProvider } from '../../providers/paquete/paquete';


@Component({
  selector: 'page-add-paquete',
  templateUrl: 'add-paquete.html',
})
export class AddPaquetePage {

  paquete:Paquete;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public service: PaqueteProvider, public toastCtrl: ToastController) {
    this.paquete = new Paquete();
  }

  save() {

    this.service.insert(this.paquete)
      .subscribe(res => {
        if (res.success) {
          this.showToast("Paquete insertado !");
          this.navCtrl.pop();
        } else {
          this.showToast("Error al insertar Paquete");
        }
      });


  }


  showToast(msg: string) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

}
