import { Component } from '@angular/core';
import { MenuController, ModalController } from 'ionic-angular';
import { Cd } from '../../models/Cd';
import { LendCdPage } from '../lend-cd/lend-cd';
import { Services } from '../../services/services';


@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdsList: Cd[];


  constructor(public menuCtrl: MenuController,
              public services: Services,
              public modalCtrl: ModalController) {
  }

  ionViewWillEnter(){
    this.cdsList = this.services.cdsList.slice()
  }

  onLoadCd(index: number){
    let modal = this.modalCtrl.create(LendCdPage, {index:index})
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }

}
