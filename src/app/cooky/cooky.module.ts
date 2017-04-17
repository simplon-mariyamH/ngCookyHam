import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookyListComponent } from './cooky-list.component';
import { CookyService } from './cooky.service';
/**
 * décorateur 
 */
@NgModule({
    imports: [CommonModule],
    declarations: [CookyListComponent], //tableau avec tous les component qu'on va utiliser
    exports: [CookyListComponent],
    providers: [CookyService] //déclaré des services pour récupérer les données via les services
})
export class CookyModule {

}