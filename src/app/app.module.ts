/**
 * Module psk c'est un module
 */
import { NgModule }      from '@angular/core';

/**
 * BrowserModule psk ce projet est voué à être une application web alors besoin de platform-browser
 */
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { CookyModule } from './cooky/cooky.module';

/**
 * décorateur
 * transforme la classe en passant un objet de configuration
 * l'application va démarrer dans AppComponent, c'est le composant racine
 * celui qui est le plus haut dans la hiérarchie
 */
@NgModule({
  imports:      [ BrowserModule, CookyModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
