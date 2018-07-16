import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Generated class for the AltaArchivoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AltaArchivoProvider {

  constructor(public http: HttpClient, public toastCtrl:ToastController) {
  }

  apiUrl = 'https://jsonplaceholder.typicode.com';

  cargarImg(archivo:Archivo) {

    const records = {
          title: archivo.title,
          url: archivo.url,
          thumbnailUrl: archivo.thumbnailUrl
    };

    this.crearToast("Cargando...");

    return new Promise(resolve => {
      this.http.post(this.apiUrl+'/photos',records).subscribe(data => {
        resolve(data);
        this.crearToast('Realizado');
        console.log(records);
      }, err => {
        this.crearToast(JSON.stringify(err));
        console.log(err);
      });
    });
  }

  actImg(archivo:Archivo,idImg:number) {

    const records = {
          title: archivo.title,
          url: archivo.url,
          thumbnailUrl: archivo.thumbnailUrl
    };

    this.crearToast("Cargando...");

    return new Promise(resolve => {
      this.http.put(this.apiUrl+'/photos/'+ idImg,records).subscribe(data => {
        resolve(data);
        this.crearToast('Actualizado');
        console.log(records);
      }, err => {
        this.crearToast(JSON.stringify(err));
        console.log(err);
      });
    });
  }

  borrarImg(idx:number){

    return new Promise(resolve => {
      this.http.delete(this.apiUrl+'/photos/'+ idx).subscribe(data => {
        resolve(data);
        this.crearToast('Eliminado');
      }, err => {
        this.crearToast(JSON.stringify(err));
        console.log(err);
      });
    });

  }


  private crearToast(mensaje:string){
    const toast = this.toastCtrl.create({
      message: mensaje,
      showCloseButton: true,
      closeButtonText: 'Ok',
      duration: 3000,
      position: 'middle'
    });
    toast.present();
  }

}

interface Archivo{

 title: string,
 url: string,
 thumbnailUrl: string

}

