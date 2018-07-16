import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { ListaImagenesProvider } from '../../providers/lista-imagenes/lista-imagenes';
import { HttpClient } from '@angular/common/http';

import { SubirPage } from "../subir/subir";
import { AltaArchivoProvider } from '../../providers/alta-archivo/alta-archivo';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  listaImagenes:any;
  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(public navCtrl: NavController,
              public ListaImagenesProv:ListaImagenesProvider,
              public http: HttpClient,
              public modalCtrl:ModalController,
              public altaProv:AltaArchivoProvider) {
    this.cargaImgs();
  }

  cargaImgs(){
    this.ListaImagenesProv.load()
    .then(data => {
      this.listaImagenes = data;
    });
  }

  borrarImg(idx:number,i:number){
    this.listaImagenes.splice(i,1);
    this.altaProv.borrarImg(idx);
  }

  addImg(){

    let modal = this.modalCtrl.create(SubirPage).present();

  }
}
