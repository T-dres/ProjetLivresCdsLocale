import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Book } from '../../models/Book';
import { Services } from '../../services/services';

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {

  index: number;
  book: Book;

  constructor(public navParams: NavParams,
              private services: Services,
              public viewCtrl: ViewController) {
  }

  ngOnInit(){
    this.index = this.navParams.get('index');
    this.book = this.services.bookList[this.index];
    
  }

  onToggleBook(){
    this.book.etatEmprunt = !this.book.etatEmprunt;
    this.book.etatRendu = !this.book.etatRendu;
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

}
