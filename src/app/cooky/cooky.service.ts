import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Cooky } from './cooky';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

/**
 * décorateur pour injecter pour faire qlqchose 
 * par exemple requete ajax
 */
@Injectable()
export class CookyService {

  constructor(private _http:Http) {

  }

   // getCookys() {
   //     return this.cookys;
   // }

   getCookysFromAPI() {
     this._http.get('app/api/cooky.json')
         .do(x => console.log(x))
         .map(cookys => cookys.json());
   }
}