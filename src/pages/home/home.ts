import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPaquetePage } from '../add-paquete/add-paquete';
import { Paquete, PaqueteProvider } from '../../providers/paquete/paquete';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  data: Paquete[] = [];

  constructor(public navCtrl: NavController, public service: PaqueteProvider) {
  }

  ionViewDidLoad() {
    this.loadBooks();
  }

  goToAdd() {
    this.navCtrl.push(AddPaquetePage);
  }

  loadBooks(refresher = null) {
    this.service.all().subscribe(res => {
      this.data = res;
      if(refresher != null)  refresher.complete();
    });
  }

  doRefresh(refresher) {
    this.loadBooks(refresher);
  }

}
