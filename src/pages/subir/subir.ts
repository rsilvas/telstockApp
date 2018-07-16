import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';


//plugins
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AltaArchivoProvider } from '../../providers/alta-archivo/alta-archivo';

/**
 * Generated class for the SubirPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-subir',
  templateUrl: 'subir.html',
})
export class SubirPage {

  titulo:string;
  imagenPreview:string;
  imagen64: string;
  url:any;
  thumbnail:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ViewController,
              public camera: Camera,
              public cargaImagen:AltaArchivoProvider) {
  }

  crearPost(){
    let archivo = {
      title: this.titulo,
      url: this.url,
      thumbnailUrl: this.thumbnail
    }

    this.cargaImagen.cargarImg(archivo);
    console.log('{ title: ' + archivo.title + ' url: ' + archivo.url + ' thumb: ' + archivo.thumbnailUrl+ ' }')
  }

  actualizaPost(){
    let archivo = {
      title: this.titulo,
      url: this.url,
      thumbnailUrl: this.thumbnail
    }

    this.cargaImagen.cargarImg(archivo);
    console.log('{ title: ' + archivo.title + ' url: ' + archivo.url + ' thumb: ' + archivo.thumbnailUrl+ ' }')

  }


  closeModal(){
    this.modalCtrl.dismiss();
  }

  selectImg(){
    let options = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY //DESDE Libreria
    };
    this.camera.getPicture(options).then((imageData) =>{
      this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
      this.imagen64 = imageData;
      this.url = options.destinationType;
      this.thumbnail = options.destinationType;
    }, (err) => {
      console.log("Error en galería: ", JSON.stringify(err));
    });
  }

  showCamera(){

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64:
      this.imagenPreview = 'data:image/jpeg;base64,' + imageData;
      this.imagen64 = imageData;
      this.imagen64 = imageData;
      this.url = options.destinationType;
      this.thumbnail = options.destinationType;
    }, (err) => {
      console.log("ERROR en camara",JSON.stringify(err));
    });
  }

}
