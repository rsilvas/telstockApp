import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
  Generated class for the ListaImagenesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ListaImagenesProvider {

  data:any;
  items = [];
  apiUrl = 'https://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) {
    console.log('Hello ListaImagenesProvider Provider');
  }

  load() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl+'/photos?_start=10&_limit=10').subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  add(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/photos', JSON.stringify(data))
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}

