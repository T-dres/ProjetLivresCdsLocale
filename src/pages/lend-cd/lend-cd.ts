import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Cd } from '../../models/Cd';
import { Services } from '../../services/services';


@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage implements OnInit{

  index: number;
  cd: Cd;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public services: Services) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.cd = this.services.cdsList[this.index];
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onToggleCd(){
    this.cd.etatEmprunt = !this.cd.etatEmprunt;
    this.cd.etatRendu = !this.cd.etatRendu;
  }

}
